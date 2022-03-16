let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
});