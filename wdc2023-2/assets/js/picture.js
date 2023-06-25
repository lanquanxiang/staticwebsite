const images = document.querySelectorAll('.slideshow img');
let index = 0;

function changeImage() {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}

setInterval(changeImage, 4000);