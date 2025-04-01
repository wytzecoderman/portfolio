document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    const fadeInElements = document.querySelectorAll('.Fade-in-Left-JS');
    fadeInElements.forEach(element => observer.observe(element));
  });

  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    const fadeInElements = document.querySelectorAll('.Fade-in-Right-JS');
    fadeInElements.forEach(element => observer.observe(element));
  });