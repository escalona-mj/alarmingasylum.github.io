let menu = document.querySelector('#hamburger');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('hamburger-menu');
    nav.classList.toggle('open');
}

//using the ScrollReveal from the external js script hosted in unpkg
ScrollReveal({distance: '50px', duration: 2000, delay: 450});

ScrollReveal().reveal('.hero-text',{delay:200, origin: 'top'});
ScrollReveal().reveal('.hero-video',{delay:450, origin: 'bottom'});
ScrollReveal().reveal('header',{delay:500, origin: 'top'});

function testAlert() {
    alert("No link yet :(");
}