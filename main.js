  var rotationCounter = 4;
  var swiper = new Swiper(".swiper-container", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    paralax: true,
    preloadImages: false,
    lazy: false,
    autoplay: true,
    speed: 500,
    cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94
    },
  });
var slidecounter = 0
  swiper.on("slideChange", function() {
    --rotationCounter;
    slidecounter = swiper.activeIndex;
    if (rotationCounter <= 0) {
      swiper.autoplay.stop();
    }
  });
  $('#stage').on('click',function(){
    PEXI.event('klik_'+slidecounter)
    PEXI.click();
  })

  swiper.on("touchStart", function() {
    $(".swipe-hand").fadeOut();
    PEXI.event('user_move')
  });

TweenMax.to('.hiddenOnload',.3,{opacity:1})