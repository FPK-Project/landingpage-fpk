const navbar = document.querySelector("nav");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburgerToggle.classList.toggle("active");
});
