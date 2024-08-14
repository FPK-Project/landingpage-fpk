const hamburgerToggle = document.querySelector("#hamburger-toggle");
const linksWrapper = document.querySelector("#links-wrapper");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("active");
  linksWrapper.classList.toggle("active");
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
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
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
