(function(){var BOOK_WIDTH=830;var BOOK_HEIGHT=260;var PAGE_WIDTH=400;var PAGE_HEIGHT=250;var PAGE_Y=(BOOK_HEIGHT-PAGE_HEIGHT)/2;var CANVAS_PADDING=60;var page=0;var canvas=document.getElementById("pageflip-canvas");var context=canvas.getContext("2d");var mouse={x:0,y:0};var flips=[];var book=document.getElementById("book");var pages=book.getElementsByTagName("section");for(var i=0,len=pages.length;i<len;i++){pages[i].style.zIndex=len-i;flips.push({progress:1,target:1,page:pages[i],dragging:false});}
canvas.width=BOOK_WIDTH+(CANVAS_PADDING*2);canvas.height=BOOK_HEIGHT+(CANVAS_PADDING*2);canvas.style.top=-CANVAS_PADDING+"px";canvas.style.left=-CANVAS_PADDING+"px";setInterval(render,1000/60);document.addEventListener("mousemove",mouseMoveHandler,false);document.addEventListener("mousedown",mouseDownHandler,false);document.addEventListener("mouseup",mouseUpHandler,false);function mouseMoveHandler(event){mouse.x=event.clientX-book.offsetLeft-(BOOK_WIDTH/2);mouse.y=event.clientY-book.offsetTop;}
function mouseDownHandler(event){if(Math.abs(mouse.x)<PAGE_WIDTH){if(mouse.x<0&&page-1>=0){flips[page-1].dragging=true;}
else if(mouse.x>0&&page+1<flips.length){flips[page].dragging=true;}}
event.preventDefault();}
function mouseUpHandler(event){for(var i=0;i<flips.length;i++){if(flips[i].dragging){if(mouse.x<0){flips[i].target=-1;page=Math.min(page+1,flips.length);}
else{flips[i].target=1;page=Math.max(page-1,0);}}
flips[i].dragging=false;}}
function render(){context.clearRect(0,0,canvas.width,canvas.height);for(var i=0,len=flips.length;i<len;i++){var flip=flips[i];if(flip.dragging){flip.target=Math.max(Math.min(mouse.x/PAGE_WIDTH,1),-1);}
flip.progress+=(flip.target-flip.progress)*0.2;if(flip.dragging||Math.abs(flip.progress)<0.997){drawFlip(flip);}}}
function drawFlip(flip){var strength=1-Math.abs(flip.progress);var foldWidth=(PAGE_WIDTH*0.5)*(1-flip.progress);var foldX=PAGE_WIDTH*flip.progress+foldWidth;var verticalOutdent=20*strength;var paperShadowWidth=(PAGE_WIDTH*0.5)*Math.max(Math.min(1-flip.progress,0.5),0);var rightShadowWidth=(PAGE_WIDTH*0.5)*Math.max(Math.min(strength,0.5),0);var leftShadowWidth=(PAGE_WIDTH*0.5)*Math.max(Math.min(strength,0.5),0);flip.page.style.width=Math.max(foldX,0)+"px";context.save();context.translate(CANVAS_PADDING+(BOOK_WIDTH/2),PAGE_Y+CANVAS_PADDING);context.strokeStyle='rgba(0,0,0,'+(0.05*strength)+')';context.lineWidth=30*strength;context.beginPath();context.moveTo(foldX-foldWidth,-verticalOutdent*0.5);context.lineTo(foldX-foldWidth,PAGE_HEIGHT+(verticalOutdent*0.5));context.stroke();var rightShadowGradient=context.createLinearGradient(foldX,0,foldX+rightShadowWidth,0);rightShadowGradient.addColorStop(0,'rgba(0,0,0,'+(strength*0.2)+')');rightShadowGradient.addColorStop(0.8,'rgba(0,0,0,0.0)');context.fillStyle=rightShadowGradient;context.beginPath();context.moveTo(foldX,0);context.lineTo(foldX+rightShadowWidth,0);context.lineTo(foldX+rightShadowWidth,PAGE_HEIGHT);context.lineTo(foldX,PAGE_HEIGHT);context.fill();var leftShadowGradient=context.createLinearGradient(foldX-foldWidth-leftShadowWidth,0,foldX-foldWidth,0);leftShadowGradient.addColorStop(0,'rgba(0,0,0,0.0)');leftShadowGradient.addColorStop(1,'rgba(0,0,0,'+(strength*0.15)+')');context.fillStyle=leftShadowGradient;context.beginPath();context.moveTo(foldX-foldWidth-leftShadowWidth,0);context.lineTo(foldX-foldWidth,0);context.lineTo(foldX-foldWidth,PAGE_HEIGHT);context.lineTo(foldX-foldWidth-leftShadowWidth,PAGE_HEIGHT);context.fill();var foldGradient=context.createLinearGradient(foldX-paperShadowWidth,0,foldX,0);foldGradient.addColorStop(0.35,'#fafafa');foldGradient.addColorStop(0.73,'#eeeeee');foldGradient.addColorStop(0.9,'#fafafa');foldGradient.addColorStop(1.0,'#e2e2e2');context.fillStyle=foldGradient;context.strokeStyle='rgba(0,0,0,0.06)';context.lineWidth=0.5;context.beginPath();context.moveTo(foldX,0);context.lineTo(foldX,PAGE_HEIGHT);context.quadraticCurveTo(foldX,PAGE_HEIGHT+(verticalOutdent*2),foldX-foldWidth,PAGE_HEIGHT+verticalOutdent);context.lineTo(foldX-foldWidth,-verticalOutdent);context.quadraticCurveTo(foldX,-verticalOutdent*2,foldX,0);context.fill();context.stroke();context.restore();}})();