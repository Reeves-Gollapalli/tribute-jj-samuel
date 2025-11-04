// ===== HEADER SHRINK & NAVBAR BEHAVIOR =====
const header = document.querySelector("header");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// ===== SECTION FADE-IN =====
const sections = document.querySelectorAll(".content-section, .verse-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// ===== TIMELINE ANIMATION =====
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
timelineItems.forEach(item => timelineObserver.observe(item));

// ===== NAVBAR ACTIVE LINK =====
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 250;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});
