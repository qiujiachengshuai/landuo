var swiper = new Swiper('.swiper-container', {
      pagination:'.swiper-pagination',
      loop:true,
      autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
    },
      paginationClickable:true
    });