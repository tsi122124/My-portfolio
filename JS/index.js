// Typewriter effect
const roles = [
  "ML Engineer",
  "Data Scientist",
  "AI Engineer",
  "Fullstack Developer",
];
let ri = 0,
  ci = 0,
  deleting = false;
const el = document.getElementById("typed-role");

function type() {
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 55 : 90);
}
type();

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".project-card, .skill-card, .timeline-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    observer.observe(el);
  });
