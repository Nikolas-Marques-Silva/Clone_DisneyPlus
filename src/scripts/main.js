//toggle do header

const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight) {
        header.classList.add('header--active');
    } else {
        header.classList.remove('header--active');
    }
})
