let nav = document.getElementById("nav-list");
let navList = document.querySelectorAll("#nav-list a");
let icon = document.getElementById("close-menu");
let menu = document.getElementById("menu");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
console.log(navList);

icon.addEventListener("click", function () {
  nav.style.right = "-300px";
});

menu.addEventListener("click", function () {
  nav.style.right = "0";
});

moon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  sun.style.display = "flex";
  moon.style.display = "none";
});
sun.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  sun.style.display = "none";
  moon.style.display = "flex";
});

navList.forEach((el) => {
  el.addEventListener("click", function () {
    navList.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
