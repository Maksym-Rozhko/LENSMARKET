document.addEventListener('DOMContentLoaded', () => {

  function headerScrollFixed() {
        const headerFixed = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
          let scrollY = window.scrollY;
          scrollY > 50 ? headerFixed.classList.add('header--active') : headerFixed.classList.remove('header--active');
        });
	};
    headerScrollFixed();


      
    new Swiper('.main-screen-slider.swiper', {
        slidesPerView: 1,
        loop: true,
		speed: 1000,
		spaceBetween: 25,
        // Navigation arrows
		navigation: {
			nextEl: '.main-screen-slider .swiper-button-next',
			prevEl: '.main-screen-slider .swiper-button-prev',
		},
        // If we need pagination
        pagination: {
          el: '.main-screen-slider .swiper-pagination',
          clickable: true,
        },
    });
});