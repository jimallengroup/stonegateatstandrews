/* Slide 29 (#3) */

$(function(){
  window.swiper115 = new Swiper('.swiper-115', {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-115-next',
      prevEl: '.swiper-115-prev', 
    },      
  });
});

/* Example Contact Form Redirect (#5) */

  // This script will redirect your visitors on the successful form submit
  $(document).ajaxSuccess(function() {
    window.location.href = 'https://designmodo.com/affiliate/';
  });