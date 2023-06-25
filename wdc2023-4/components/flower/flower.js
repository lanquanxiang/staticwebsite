const flowerTypes = ['../../assets/images/flower/梅花.svg','../../assets/images/flower/桃花.svg','../../assets/images/flower/棉花.svg','../../assets/images/flower/桃花.png'];
const numFlowers = 30;

for (let i = 0; i < numFlowers; i++) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = Math.random() * 100 + '%';
  flower.style.animationDelay = Math.random() * 5 + 's';

  flower.style.left = Math.floor(Math.random()*100) + '%';
  flower.style.top = Math.floor(Math.random()*100) + '%';
  flower.style.zIndex = 999999
  flower.style.position = 'fixed'


  flower.style.backgroundImage = 'url(' + flowerTypes[Math.floor(Math.random() * flowerTypes.length)] + ')';
  document.body.appendChild(flower);
  if(i%5==0)  document.body.removeChild(flower);
}
