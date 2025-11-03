const header = document.getElementById('main-header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Shrink header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }

    // Fade-in sections
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });

    // Scroll spy (highlight nav link)
    let current = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 250;
        if (pageYOffset >= sectionTop) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
