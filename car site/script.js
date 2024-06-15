const btnSideBar = document.querySelector(".side-barBtn");
const btnCloseSideBar = document.querySelector(".bi-x-lg");
const sideBar = document.querySelector(".side-bar");
const navBar = document.querySelector(".nav-bar");

function openSideBar() {
    sideBar.style.top = '0';
    sideBar.style.backgroundColor = 'white';
    sideBar.style.filter = 'blur(0px)';
}

function closeSideBar() {
    sideBar.style.top = '-100%';
    sideBar.style.backgroundColor = 'transparent';
    sideBar.style.filter = 'blur(25px)';
}

function whiteBar() {
    navBar.style.backgroundColor = 'white';
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = 'transparent';
    }
}

btnSideBar.addEventListener("click", openSideBar);
btnCloseSideBar.addEventListener("click", closeSideBar);

document.addEventListener("scroll", whiteBar);