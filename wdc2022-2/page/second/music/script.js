// https://github.com/hmongouachon/rgbKineticSlider
const images = [
  "./img/2/meiyou.jpg",
  "./img/2/emmm.jpg",
  "./img/2/shang2.jpg",
  "./img/2/xin2.jpg",
  "./img/2/wohe.jpg",
];

const texts = [
  ["没有共产党就没有新中国", "\"1943年曹火星在北平（北京）房山区霞云岭乡堂上村创作的歌曲，在抗日战争时期该村为平西根据地的前沿地带\""],
  ["我们走在大路上", "\"由李劫夫作词、作曲，王其慧试唱的爱国主义歌曲，创作和发行于1963年。\""],
  ["山丹丹开花红艳艳", "\"是由李若冰、徐锁、刘烽、关鹤岩、冯富宽作词，刘烽作曲，杨巧首次领唱的陕甘民歌，于1971年12月25日发行\""],
  ["我的中国心", "\"是一首由黄霑作词、王福玲作曲、张明敏演唱的一首爱国主义歌曲\""],
  ["我和我的祖国", "\"是张藜作词、秦咏诚作曲、李谷一原唱的爱国主义歌曲，创作和发行于1985年\""],
];

rgbKineticSlider = new rgbKineticSlider({
  slideImages: images,
  itemsTitles: texts,

  backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg",
  cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png",
  cursorImgEffect: true,
  cursorTextEffect: true,
  cursorScaleIntensity: 0.65,
  cursorMomentum: 0.14,

  swipe: true,
  swipeDistance: window.innerWidth * 0.4,
  swipeScaleIntensity: 2,

  slideTransitionDuration: 1, // transition duration
  transitionScaleIntensity: 30, // scale intensity during transition
  transitionScaleAmplitude: 160, // scale amplitude during transition

  nav: true, // enable navigation
  navElement: ".main-nav", // set nav class

  imagesRgbEffect: true,
  imagesRgbIntensity: 0.9,
  navImagesRgbIntensity: 80,

  textsDisplay: true,
  textsSubTitleDisplay: true,
  textsTiltEffect: true,
  googleFonts: ["Playfair Display:700", "Roboto:400"],
  buttonMode: false,
  textsRgbEffect: true,
  textsRgbIntensity: 0.03,
  navTextsRgbIntensity: 15,

  textTitleColor: "white",
  textTitleSize: 125,
  mobileTextTitleSize: 80,
  textSubTitleColor: "white",
  textSubTitleSize: 21,
  mobileTextSubTitleSize: 16,
  textSubTitleLetterspacing: 2,
  textSubTitleOffsetTop: 90,
  mobileTextSubTitleOffsetTop: 90,
});
let nav = document.getElementsByClassName('main-nav')
// let previous = document.getElementById('play-previous')
nav[0].addEventListener('click', function () {
  selectTrack(-1)
});
nav[1].addEventListener('click', function () {
  selectTrack(1)
});

