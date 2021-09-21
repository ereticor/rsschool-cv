const body = document.body;
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const navOver = document.querySelector(".menu_over");

menu.addEventListener("click", () => {
  nav.classList.toggle("header__nav_active");
  menu.classList.toggle("active");
  body.classList.toggle("menu__open");
});

navOver.addEventListener("click", () => {
  nav.classList.remove("header__nav_active");
  menu.classList.remove("active");
  body.classList.remove("menu__open");
});

console.group("Self-rating:");
console.log("160/160");
console.log("Job done");
console.groupEnd();