import { Swiper } from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Autoplay],

  // Enable loop mode for infinite scrolling
  loop: true,

  // Default slides per view
  slidesPerView: 1,
  spaceBetween: 18,
  centeredSlides: false,

  // Responsive breakpoints
  breakpoints: {
    // Mobile (480px and up)
    480: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // Tablet (768px and up)
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // Desktop (1024px and up)
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets', // Використовуємо точки (можна змінити на 'fraction' або 'progressbar')
  },

  // Autoplay
  // autoplay: {
  //   delay: 5000, // Затримка 5 секунд між слайдами
  //   disableOnInteraction: false, // Продовжувати автопрокрутку після взаємодії
  // },

  // Optional: Add smooth transition
  speed: 400,

  // Optional: Add autoplay (uncomment if needed)
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});

// // Optional: Add keyboard navigation
// swiper.keyboard.enable();

// console.log('Swiper initialized successfully!');
