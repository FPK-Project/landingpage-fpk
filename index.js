const hamburgerToggle = document.querySelector("#hamburger-toggle");
const linksWrapper = document.querySelector("#links-wrapper");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("active");
  linksWrapper.classList.toggle("active");
});
