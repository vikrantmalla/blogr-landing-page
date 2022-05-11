// Hamburger icon
const menuButton = document.getElementById('toggle');
const navbarMenu = document.getElementById('navbar-list');
const hamburgerIcon = document.getElementById('hamburger-icon')

menuButton.addEventListener('click', function() {
    navbarMenu.classList.toggle('d-show');
    this.classList.toggle('opened');

    if (this.classList.contains('opened')) {
        hamburgerIcon.src = 'images/icon-close.svg';
    } else {
        hamburgerIcon.src = 'images/icon-hamburger.svg';
    }
});



const navDropDown = document.getElementsByClassName('nav__dropdown');
const navDropDownMenu = document.getElementsByClassName('nav__dropdown-menu');
const dropdowns = document.querySelectorAll('.nav__dropdown-menu');
const navName = document.getElementsByClassName('nav-name');
// show and hide of nav list item and span arrow(rotation) according to click
function nav1Fun() {
    navCheck()
    dropdowns[0].classList.add('opened');
    navName[0].classList.add('opened');
}

function nav2Fun() {
    navCheck();
    dropdowns[1].classList.add('opened');
    navName[1].classList.add('opened');
}

function nav3Fun() {
    navCheck();
    dropdowns[2].classList.add('opened');
    navName[2].classList.add('opened');
}
// adding and removing (opened) class of nav list item and span arrow(rotation) according to click
function navCheck() {
    for (var i = 0; i < navDropDown.length; i++) {
        if (navDropDownMenu[i].classList.contains('opened')) {
            navDropDownMenu[i].classList.remove("opened");
        }
    }
    for (var i = 0; i < navDropDown.length; i++) {
        if (navName[i].classList.contains('opened')) {
            navName[i].classList.remove("opened");
        }
    }
}