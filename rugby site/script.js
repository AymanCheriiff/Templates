const buttonNav = document.querySelector('.bi-list');
const navList = document.querySelectorAll('.list');
const sideBar = document.querySelector('.side-bar');
const btnClose = document.querySelector('.bi-x-lg');

buttonNav.addEventListener('click', function sideBarOpen(){
    sideBar.style.left = '0px';
    sideBar.style.width = '100%';
    setTimeout(()=>{
        btnClose.style.transform = 'rotate(-90deg)';
    },250)
    btnClose.style.transform = 'rotate(90deg)';
})

btnClose.addEventListener('click', function sideBarClose(){
    sideBar.style.left = '-300px';
    sideBar.style.width = '300px';
})