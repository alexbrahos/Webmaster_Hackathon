/*
 * Filename: menu.js
 *
 * History:
 * 02/15/23 made hamburger menu (AB)
 */

//Open the menu when the hamburger is clicked
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Close menu when any navigation links are clicked
const navLink = document.querySelectorAll(".nav-link");
const logoLink = document.querySelector(".nav-logo");

navLink.forEach(n => n.addEventListener("click", closeMenu));
logoLink.addEventListener("click", closeMenu);

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}