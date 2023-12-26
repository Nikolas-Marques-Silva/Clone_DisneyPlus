//toggle do header

const header = document.querySelector('header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const heroHeight = hero.offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('header--active');
    } else {
        header.classList.remove('header--active');
    }
})
