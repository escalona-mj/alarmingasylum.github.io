let menu = document.querySelector('#hamburger');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('hamburger-menu');
    nav.classList.toggle('open');
}

//using the ScrollReveal from the external js script hosted in unpkg
ScrollReveal({distance: '50px', duration: 1000, delay: 450});

ScrollReveal().reveal('.home-logo-image',{delay:300, origin: 'top'});
ScrollReveal().reveal('.home-text',{delay:400, origin: 'bottom'});
ScrollReveal().reveal('.scroll-down',{delay:300, origin: 'top', reset: true});


ScrollReveal().reveal('.hero-text',{delay:200, origin: 'top'});
ScrollReveal().reveal('.hero-video',{delay:450, origin: 'bottom'});
ScrollReveal().reveal('header',{delay:500, origin: 'top'});

function testAlert() {
    alert("No link yet :(");
}