
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .topic-card, .aud-card, .article-main, .article-side').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px';
        ring.style.width = '56px'; ring.style.height = '56px';
        ring.style.opacity = '0.8';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'; cursor.style.height = '12px';
        ring.style.width = '36px'; ring.style.height = '36px';
        ring.style.opacity = '0.5';
      });
    });

    // Nav scroll
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(r => observer.observe(r));

    // Newsletter subscribe
    document.querySelector('.nl-btn').addEventListener('click', function() {
      const input = document.querySelector('.nl-input');
      if (input.value && input.value.includes('@')) {
        this.textContent = 'Subscribed ✦';
        this.style.background = '#2d6a4f';
        input.value = '';
      } else {
        input.style.borderColor = '#E63946';
        setTimeout(() => { input.style.borderColor = ''; }, 1500);
      }
    });

    // Stagger topic cards
    document.querySelectorAll('.topic-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.06}s`;
    });