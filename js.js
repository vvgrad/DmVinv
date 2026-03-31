let lastScroll = window.scrollY;

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  const currentScroll = window.scrollY;
  const isScrollingUp = currentScroll < lastScroll;

  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('visible');
    } else {
      // удаляем только если скролл вверх
      if (isScrollingUp) {
        entry.target.classList.remove('visible');
      }
    }
  });

  lastScroll = currentScroll;
}, {
  threshold: 0.5
});

elements.forEach(el => observer.observe(el));