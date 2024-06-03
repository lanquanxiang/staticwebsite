var image = document.getElementById("woimage");
        var images = ['../images/ai.jpg', '../images/ai2.jpg', '../images/ai3.jpg']; // 多张图片列表
        var currentImageIndex = 0;
        function changeImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length; // 循环切换图片索引
            image.style.animation = 'fadeOut 2s ease forwards'; // 添加淡出动画
            setTimeout(function() {
                image.src = images[currentImageIndex]; // 更换图片源
                image.style.animation = 'fadeIn 2s ease forwards'; // 添加淡入动画
            }, 1000); // 1秒后执行图片切换
        }