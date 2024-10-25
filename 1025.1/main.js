$('.slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  navigation: {
    nextEl: '.slick-button-next',
    prevEl: '.slick-button-prev',
  },
  pagination: {
    el: '.slick-dots',
    type: 'bullets',
    clickable: true,
  }
});
		