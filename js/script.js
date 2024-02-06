let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.cup-text',{delay:200, origin:'top'});
sr.reveal('.cup-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:200, origin:'left'});