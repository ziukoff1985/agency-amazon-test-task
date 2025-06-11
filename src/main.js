import { Swiper } from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,

  slidesPerView: 1,
  spaceBetween: 18,
  centeredSlides: false,

  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  speed: 400,
});
