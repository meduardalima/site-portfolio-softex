function closeMenu() {
  document.querySelector("nav ul").classList.remove("active");
  document.querySelector(".menu-icon").classList.remove("active");
}

document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
  document.querySelector(".menu-icon").classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const menu = document.querySelector("nav ul");
  const menuIcon = document.querySelector(".menu-icon");

  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
  }
});

const menuItems = document.querySelectorAll("nav ul li");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    closeMenu();
  });
});
