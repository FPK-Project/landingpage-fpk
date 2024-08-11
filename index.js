const hamburgerToggle = document.querySelector("#hamburger-toggle");
const linksWrapper = document.querySelector("#links-wrapper");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("active");
  linksWrapper.classList.toggle("active");
});
let slidesPerView = 1;

function setSlidesPerViewOnOfferSection(width) {
  slidesPerView = width < 1024 ? 1 : 2;
  return slidesPerView;
}

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  slidesPerView: setSlidesPerViewOnOfferSection(window.innerWidth),

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
