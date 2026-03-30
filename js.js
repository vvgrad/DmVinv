const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

elements.forEach(el => observer.observe(el));


