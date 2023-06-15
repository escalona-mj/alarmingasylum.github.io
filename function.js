let menu = document.querySelector('#hamburger');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('hamburger-menu');
    nav.classList.toggle('open');
}

//using the ScrollReveal from the external js script hosted in unpkg
ScrollReveal({distance: '50px', duration: 2000, delay: 450});

ScrollReveal().reveal('.home-logo',{delay:300, origin: 'top'});
ScrollReveal().reveal('.home-text',{delay:400, origin: 'bottom'});
ScrollReveal().reveal('.scroll-down',{delay:300, origin: 'top', reset: true});

ScrollReveal().reveal('.hero-text',{delay:200, origin: 'top'});
ScrollReveal().reveal('.hero-video',{delay:450, origin: 'bottom'});
ScrollReveal().reveal('header',{delay:200, origin: 'top'});

ScrollReveal().reveal('.about-header',{delay:200, origin: 'top'});
ScrollReveal().reveal('#profile-mj',{delay:300, origin: 'top'});
ScrollReveal().reveal('#profile-aron',{delay:400, origin: 'top'});
ScrollReveal().reveal('#profile-luigi',{delay:500, origin: 'top'});
ScrollReveal().reveal('#profile-alonso',{delay:600, origin: 'top'});