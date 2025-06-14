const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach((section) => {
  section.classList.add("hidden-section");
  observer.observe(section);
});
