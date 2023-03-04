document.addEventListener('DOMContentLoaded', () => {

  function headerScrollFixed() {
        const headerFixed = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
          let scrollY = window.scrollY;
          scrollY > 50 ? headerFixed.classList.add('header--active') : headerFixed.classList.remove('header--active');
        });
	};
    headerScrollFixed();


      
    // new Swiper('.swiper', {
    //     slidesPerView: 2,
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    // });
});