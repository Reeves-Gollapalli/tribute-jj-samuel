// ===== HEADER SHRINK ON SCROLL + NAVBAR ALIGNMENT =====
const header = document.querySelector("header");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("shrink");
    nav.classList.add("nav-shrink"); // move navbar closer when header shrinks
  } else {
    header.classList.remove("shrink");
    nav.classList.remove("nav-shrink"); // reset navbar position
  }
});

// ===== SCROLL FADE-IN ANIMATION =====
const sections = document.querySelectorAll(".content-section, .verse-section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

// ===== NAV ACTIVE LINK HIGHLIGHT (SCROLL SPY) =====
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 250;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



// ===== TIMELINE SCROLL ANIMATION =====
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
timelineItems.forEach((item) => timelineObserver.observe(item));
