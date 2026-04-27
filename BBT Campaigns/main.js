// BBT Shared JS — 40 Day | 40 Brand Series

// Nav scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.bbt-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(r => revealObserver.observe(r));

// Animate rating bars when visible
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.r-bar-fill').forEach(bar => {
        bar.classList.add('animate');
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.rating-card').forEach(card => barObserver.observe(card));