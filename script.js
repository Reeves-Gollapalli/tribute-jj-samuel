const header = document.getElementById("main-header");
const sections = document.querySelectorAll("section.reveal");
const navLinks = document.querySelectorAll(".nav-links a");
const bibleVerse = document.getElementById("bible-verse");

// Adjust scroll offset for sticky elements
function updateScrollMargin() {
  const navHeight = document.querySelector("nav").offsetHeight || 60;
  const headerHeight = header.offsetHeight || 160;
  const verseHeight = bibleVerse ? bibleVerse.offsetHeight : 0;
  const offset = Math.round(navHeight + verseHeight + 20);
  document.documentElement.style.setProperty("--nav-offset-desktop", `${offset}px`);
  document.documentElement.style.setProperty("--nav-offset-mobile", `${Math.max(80, Math.round(offset * 0.7))}px`);
}

// Reveal sections smoothly
function revealOnScroll() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add("visible");
  });
}

// Highlight current nav link
function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - window.innerHeight * 0.2;
    if (window.pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (current && link.getAttribute("href").includes(current)) link.classList.add("active");
  });
}

// Header shrink on scroll
function onScroll() {
  if (window.scrollY > 80) header.classList.add("shrink");
  else header.classList.remove("shrink");
  revealOnScroll();
  updateActiveLink();
}

window.addEventListener("load", () => {
  updateScrollMargin();
  revealOnScroll();
  updateActiveLink();
});
window.addEventListener("resize", updateScrollMargin);
window.addEventListener("scroll", onScroll);
