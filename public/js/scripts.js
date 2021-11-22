"use strict";

// /*
// ======================================
// Desktop Sub Menu
// ======================================
// */

// Opens Sub Moible Nav
document.querySelector(".sub-btn").addEventListener("click", function () {
  document.querySelector(".sub-nav").style.display = "block";
});

document.querySelector(".mobile-sub-close-btn").addEventListener("click", function () {
  document.querySelector(".sub-nav").style.display = "none";
});

/*
======================================
Mobile Navigation Menu
======================================
*/

// Opens Moible nav
document.querySelector(".open-mobile-nav").addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "block";
});

// Closes Moible nav
document.querySelector(".mobile-close-btn").addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "none";
});

/*
======================================
Navigation, Sticky 2nd Part OF Bar
======================================
*/

window.addEventListener("scroll", function () {
  let navArea = document.querySelector("nav");

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});
