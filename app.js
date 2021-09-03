// Form Validation
const name = document.getElementById('name');

const email = document.getElementById('email');

const message = document.getElementById('msg');

const errorElement = document.getElementById('error');

form.addEventListener ('submit', (e) => {
    let messages = [];

    if(name.value === '' || name.value === null){
        messages.push('Name is required');
    }

    if(email.value <= 6){
        message.push('Please enter a valid email address');
    }

})

// NAVBAR
function navBar() {
    let x = document.getElementsByClassName('nav-link');
    if(x.style.display === 'block'){
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}



// Display Mobile Menu
// const mobileMenu = () => {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// }

// menu.addEventListener('click', mobileMenu);

// Show actice menu when scrolling 
// const hightlightMenu = () => {
//     const elem = document.querySelector('.highlight');
//     const offersMenu = document.querySelector('#offer');
//     const gallerys = document.querySelector('#gallery');
//     const contactMe = document.querySelector('#contact-me');

//     let scrollPos = window.scrollY;

//     if(window.innerWidth > 960 && scrollPos < 600){
//         offersMenu.classList.add('.highlight');
//         gallerys.classList.remove('.highlight');
//         return;
//     } else if (window.innerWidth > 960 && scrollPos < 1400){
//         gallerys.classList.add('.highlight');
//         offersMenu.classList.remove('.highlight');
//         contactMe.classList.remove('.highlight');
//         return;
//     } else if {
//         contactMe.classList.add('.highlight');
//         gallerys.classList.remove('.highlight');
//         return;
//     } 

//     if(elem && window.innderWidth < 960 && scrollPos < 600 || elem){
//         elem.classList.remove('.highlight');
//         return;
//     }

//     window.addEventListener('scroll', highlightMenu)
//     window.addEventListener('click', highlightMenu)
// }

// Closing mobile menu after click
// const hideMobileMenu = () => {
//     const menuBars = document.querySelector('.is-active');
//     if(window.innerWidth <= 768 && menuBars) {
//         menu.classList.toggle('is-active');
//         menuLinks.classList.remove('active');
//     }
// }

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);