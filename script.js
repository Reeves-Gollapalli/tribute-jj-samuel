const header = document.getElementById('main-header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Shrink header on scroll and animate sections
window.addEventListener('scroll', () => {
  // Shrink header
  if (window.scrollY > 80) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }

  // Fade-in sections
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });

  // Highlight current nav link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
