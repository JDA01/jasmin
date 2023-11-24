// HAMBURGER MENU BTN
const burgerBtn = document.querySelector(".burger");
// MENU
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".menu > li");

//HAMBURGER BTN ANIMATION
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("menuOpen");
});

// REMOVE MENU ACTIVE CLASS
const clearActiveClass = () => {
  navItems.forEach((item) => {
    item.classList.remove("active-link");
  });
};

// ADD MENU ACTIVE CLASS
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveClass();
    item.classList.add("active-link");
    if (window.innerWidth <= 820) {
      burgerBtn.classList.toggle("active");
      menu.classList.toggle("menuOpen");
    }
  });
});