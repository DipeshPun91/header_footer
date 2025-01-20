// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});
