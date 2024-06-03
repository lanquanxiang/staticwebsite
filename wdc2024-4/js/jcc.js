/*!
reflection.js for jQuery v1.12
*/
;
(function($) {
	$.fn.reflect = function(options) {
		options = $.extend({
			height: 1 / 3,
			opacity: 0.5
		}, options);
		return this.unreflect().each(function() {
			var img = this;
			if (/^img$/i.test(img.tagName)) {
				function doReflect() {
					var imageWidth = img.width,
						imageHeight = img.height,
						reflection, reflectionHeight, wrapper, context, gradient;
					reflectionHeight = Math.floor((options.height > 1) ? Math.min(imageHeight, options
						.height) : imageHeight * options.height);
					reflection = $("<canvas />")[0];
					if (reflection.getContext) {
						context = reflection.getContext("2d");
						try {
							$(reflection).attr({
								width: imageWidth,
								height: reflectionHeight
							});
							context.save();
							context.translate(0, imageHeight - 1);
							context.scale(1, -1);
							context.drawImage(img, 0, 0, imageWidth, imageHeight);
							context.restore();
							context.globalCompositeOperation = "destination-out";
							gradient = context.createLinearGradient(0, 0, 0, reflectionHeight);
							gradient.addColorStop(0, "rgba(255, 255, 255, " + (1 - options.opacity) +
								")");
							gradient.addColorStop(1, "rgba(255, 255, 255, 1.0)");
							context.fillStyle = gradient;
							context.rect(0, 0, imageWidth, reflectionHeight);
							context.fill();
						} catch (e) {
							return;
						}
					} else {
						if (!window.ActiveXObject) return;
						reflection = $("<img />").attr("src", img.src).css({
							width: imageWidth,
							height: imageHeight,
							marginBottom: reflectionHeight - imageHeight,
							filter: "FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (
									options.opacity * 100) +
								", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY=" +
								(reflectionHeight / imageHeight * 100) + ")"
						})[0];
					}
					$(reflection).css({
						display: "block",
						border: 0
					});
					wrapper = $(/^a$/i.test(img.parentNode.tagName) ? "<span />" : "<div />")
						.insertAfter(img).append([img, reflection])[0];
					wrapper.className = img.className;
					$(img).data("reflected", wrapper.style.cssText = img.style.cssText);
					$(wrapper).css({
						width: imageWidth,
						height: imageHeight + reflectionHeight,
						overflow: "hidden"
					});
					img.style.cssText = "display: block; border: 0px";
					img.className = "reflected";
				}
				if (img.complete) doReflect();
				else $(img).load(doReflect);
			}
		});
	}
	$.fn.unreflect = function() {
		return this.unbind("load").each(function() {
			var img = this,
				reflected = $(this).data("reflected"),
				wrapper;
			if (reflected !== undefined) {
				wrapper = img.parentNode;
				img.className = wrapper.className;
				img.style.cssText = reflected;
				$(img).data("reflected", null);
				wrapper.parentNode.replaceChild(img, wrapper);
			}
		});
	}
})(window.jQuery || window.Zepto);

(function($) {
	var transform = (function() {
		var vendors = ['webkit', 'moz', 'ms'];
		var style = document.createElement("div").style;
		var trans = 'transform' in style ? 'transform' : undefined;
		for (var i = 0, count = vendors.length; i < count; i++) {
			var prop = vendors[i] + 'Transform';
			if (prop in style) {
				trans = prop;
				break;
			}
		}
		return trans;
	})();
	var Item = function(element, options) {
		element.item = this;
		this.element = element;
		if (element.tagName === 'IMG') {
			this.fullWidth = element.width;
			this.fullHeight = element.height;
		} else {
			element.style.display = "inline-block";
			this.fullWidth = element.offsetWidth;
			this.fullHeight = element.offsetHeight;
		}
		element.style.position = 'absolute';
		if (options.mirror && this.element.tagName === 'IMG') {
			this.reflection = $(element).reflect(options.mirror).next()[0];
			var $reflection = $(this.reflection);
			this.reflection.fullHeight = $reflection.height();
			$reflection.css('margin-top', options.mirror.gap + 'px');
			$reflection.css('width', '100%');
			element.style.width = "100%";
			this.element = this.element.parentNode;
			this.element.item = this;
			this.element.alt = element.alt;
			this.element.title = element.title;
		}
		if (transform && options.transforms)
			this.element.style[transform + "Origin"] = "0 0";
		this.moveTo = function(x, y, scale) {
			this.width = this.fullWidth * scale;
			this.height = this.fullHeight * scale;
			this.x = x;
			this.y = y;
			this.scale = scale;
			var style = this.element.style;
			style.zIndex = "" + (scale * 100) | 0;
			if (transform && options.transforms) {
				style[transform] = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
			} else {
				if (options.mirror && this.element.tagName === 'IMG')
					this.reflection.style.marginTop = (options.mirror.gap * scale) + "px";
				style.width = this.width + "px";
				style.left = x + "px";
				style.top = y + "px";
			}
		}
	}
	var time = !window.performance || !window.performance.now ? function() {
		return +new Date()
	} : function() {
		return performance.now()
	};
	var cancelFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame;
	var requestFrame = window.requestAnimationFrame;
	(function() {
		var vendors = ['webkit', 'moz', 'ms'];
		for (var i = 0, count = vendors.length; i < count && !cancelFrame; i++) {
			cancelFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] +
				'CancelRequestAnimationFrame'];
			requestFrame = requestFrame && window[vendors[i] + 'RequestAnimationFrame'];
		}
	}());
	var Carousel = function(element, options) {
		var self = this;
		var $container = $(element);
		this.items = [];
		this.xOrigin = (options.xOrigin === null) ? $container.width() * 0.5 : options.xOrigin;
		this.yOrigin = (options.yOrigin === null) ? $container.height() * 0.1 : options.yOrigin;
		this.xRadius = (options.xRadius === null) ? $container.width() / 2.3 : options.xRadius;
		this.yRadius = (options.yRadius === null) ? $container.height() / 6 : options.yRadius;
		this.farScale = options.farScale;
		this.rotation = this.destRotation = Math.PI / 2;
		this.speed = options.speed;
		this.smooth = options.smooth;
		this.fps = options.fps;
		this.timer = 0;
		this.autoPlayAmount = options.autoPlay;
		this.autoPlayDelay = options.autoPlayDelay;
		this.autoPlayTimer = 0;
		this.frontItemClass = options.frontItemClass;
		this.onLoaded = options.onLoaded;
		this.onRendered = options.onRendered;
		this.onAnimationFinished = options.onAnimationFinished;
		this.itemOptions = {
			transforms: options.transforms
		}
		if (options.mirror) {
			this.itemOptions.mirror = $.extend({
				gap: 2
			}, options.mirror);
		}
		$container.css({
			position: 'relative',
			overflow: 'hidden'
		});
		this.renderItem = function(itemIndex, rotation) {
			var item = this.items[itemIndex];
			var sin = Math.sin(rotation);
			var farScale = this.farScale;
			var scale = farScale + ((1 - farScale) * (sin + 1) * 0.5);
			item.moveTo(this.xOrigin + (scale * ((Math.cos(rotation) * this.xRadius) - (item.fullWidth *
				0.5))), this.yOrigin + (scale * sin * this.yRadius), scale);
			return item;
		}
		this.render = function() {
			var count = this.items.length;
			var spacing = 2 * Math.PI / count;
			var radians = this.rotation;
			var nearest = this.nearestIndex();
			for (var i = 0; i < count; i++) {
				var item = this.renderItem(i, radians);
				if (i === nearest)
					$(item.element).addClass(this.frontItemClass);
				else
					$(item.element).removeClass(this.frontItemClass);
				radians += spacing;
			}
			if (typeof this.onRendered === 'function')
				this.onRendered(this);
		}
		this.playFrame = function() {
			var rem = self.destRotation - self.rotation;
			var now = time();
			var dt = (now - self.lastTime) * 0.002;
			self.lastTime = now;
			if (Math.abs(rem) < 0.003) {
				self.rotation = self.destRotation;
				self.pause();
				if (typeof self.onAnimationFinished === 'function')
					self.onAnimationFinished();
			} else {
				self.rotation = self.destRotation - rem / (1 + (self.speed * dt));
				self.scheduleNextFrame();
			}
			self.render();
		}
		this.scheduleNextFrame = function() {
			this.lastTime = time();
			this.timer = this.smooth && cancelFrame ? requestFrame(self.playFrame) : setTimeout(self
				.playFrame, 1000 / this.fps);
		}
		this.itemsRotated = function() {
			return this.items.length * ((Math.PI / 2) - this.rotation) / (2 * Math.PI);
		}
		this.floatIndex = function() {
			var count = this.items.length;
			var floatIndex = this.itemsRotated() % count;
			return (floatIndex < 0) ? floatIndex + count : floatIndex;
		}
		this.nearestIndex = function() {
			return Math.round(this.floatIndex()) % this.items.length;
		}
		this.nearestItem = function() {
			return this.items[this.nearestIndex()];
		}
		this.play = function() {
			if (this.timer === 0)
				this.scheduleNextFrame();
		}
		this.pause = function() {
			this.smooth && cancelFrame ? cancelFrame(this.timer) : clearTimeout(this.timer);
			this.timer = 0;
		}
		this.go = function(count) {
			this.destRotation += (2 * Math.PI / this.items.length) * count;
			this.play();
		}
		this.goTo = function(index) {
			var count = this.items.length;
			var diff = index - (this.floatIndex() % count);
			if (2 * Math.abs(diff) > count)
				diff -= (diff > 0) ? count : -count;
			this.destRotation = this.rotation;
			this.go(-diff);
			return diff;
		}
		this.deactivate = function() {
			this.pause();
			clearInterval(this.autoPlayTimer);
			if (options.buttonLeft) options.buttonLeft.unbind('click');
			if (options.buttonRight) options.buttonRight.unbind('click');
			$container.unbind('.cloud9');
		}
		this.autoPlay = function() {
			this.autoPlayTimer = setInterval(function() {
				self.go(self.autoPlayAmount)
			}, this.autoPlayDelay);
		}
		this.enableAutoPlay = function() {
			$container.bind('mouseover.cloud9', function() {
				clearInterval(self.autoPlayTimer);
			});
			$container.bind('mouseout.cloud9', function() {
				self.autoPlay();
			});
			this.autoPlay();
		}
		this.bindControls = function() {
			if (options.buttonLeft) {
				options.buttonLeft.bind('click', function() {
					self.go(-1);
					return false;
				});
			}
			if (options.buttonRight) {
				options.buttonRight.bind('click', function() {
					self.go(1);
					return false;
				});
			}
			if (options.mouseWheel) {
				$container.bind('mousewheel.cloud9', function(event, delta) {
					self.go((delta > 0) ? 1 : -1);
					return false;
				});
			}
			if (options.bringToFront) {
				$container.bind('click.cloud9', function(event) {
					var hits = $(event.target).closest('.' + options.itemClass);
					if (hits.length !== 0) {
						var diff = self.goTo(self.items.indexOf(hits[0].item));
						if (Math.abs(diff) > 0.5)
							event.preventDefault();
					}
				});
			}
		}
		var items = $container.find('.' + options.itemClass);
		this.finishInit = function() {
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				if ((item.tagName === 'IMG') && ((item.width === undefined) || ((item.complete !==
						undefined) && !item.complete)))
					return;
			}
			clearInterval(this.initTimer);
			for (i = 0; i < items.length; i++)
				this.items.push(new Item(items[i], this.itemOptions));
			$container.bind('mousedown onselectstart', function() {
				return false
			});
			if (this.autoPlayAmount !== 0) this.enableAutoPlay();
			this.bindControls();
			this.render();
			if (typeof this.onLoaded === 'function')
				this.onLoaded(this);
		};
		this.initTimer = setInterval(function() {
			self.finishInit()
		}, 50);
	}
	$.fn.Cloud9Carousel = function(options) {
		return this.each(function() {
			options = $.extend({
				xOrigin: null,
				yOrigin: null,
				xRadius: null,
				yRadius: null,
				farScale: 0.3,
				transforms: true,
				smooth: true,
				fps: 30,
				speed: 4,
				autoPlay: 0,
				autoPlayDelay: 3000,
				bringToFront: true,
				itemClass: 'cloud9-item',
				frontItemClass: 'active',
				handle: 'carousel'
			}, options);
			$(this).data(options.handle, new Carousel(this, options));
		});
	}
})(window.jQuery || window.Zepto);
