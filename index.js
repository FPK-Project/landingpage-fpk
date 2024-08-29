const navbar = document.querySelector("nav");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburgerToggle.classList.toggle("active");
});
let slidesPerView = 1;

// Swiper

const swiperOffer = new Swiper(".swiper--offers", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },

  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination-offers",
  },
});

const swiperMentor = new Swiper(".swiper--mentors", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper--mentors .swiper-navigation-prev",
    nextEl: ".swiper--mentors .swiper-navigation-next",
  },

  // And if we need scrollbar
});

const swiperEvents = new Swiper(".swiper--events", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper--events #swiper--events__navigator--prev",
    nextEl: ".swiper--events #swiper--events__navigator--next",
  },

  // And if we need scrollbar
});

const swiperProjects = new Swiper(".swiper--projects", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper--projects #swiper--projects__navigator--prev",
    nextEl: ".swiper--projects #swiper--projects__navigator--next",
  },

  // And if we need scrollbar
});

const swiperTestimonials = new Swiper(".swiper--testimonials", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 32,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper--projects #swiper--projects__navigator--prev",
    nextEl: ".swiper--projects #swiper--projects__navigator--next",
  },

  // And if we need scrollbar
});
