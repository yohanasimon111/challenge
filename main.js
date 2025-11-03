// js/main.js - shared interactions for single-page portfolio

document.addEventListener('DOMContentLoaded', () => {
  // set footer year
  const yearEls = document.querySelectorAll('#year');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);

  // mobile nav toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  mobileToggle && mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    mobileToggle.classList.toggle('active');
  });

  // close nav on link click (mobile)
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  });

  // animate skill bars when they appear
  const barFills = document.querySelectorAll('.bar-fill');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const fill = el.getAttribute('data-fill') || '80%';
          el.style.transition = 'width 1200ms cubic-bezier(.2,.9,.2,1)';
          setTimeout(()=> el.style.width = fill, 80);
          obs.unobserve(el);
        }
      });
    }, {threshold:0.25});
    barFills.forEach(b => obs.observe(b));
  } else {
    barFills.forEach(b => b.style.width = b.getAttribute('data-fill') || '80%');
  }

  // contact form (frontend only) - simple validation + simulated send
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msgEl = document.getElementById('formMessage');
      msgEl.textContent = '';
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const email = (data.get('email') || '').trim();
      const message = (data.get('message') || '').trim();
      if (!name || !email || !message) {
        msgEl.textContent = 'Please fill all fields.';
        msgEl.style.color = '#ffb3c6';
        return;
      }
      msgEl.textContent = 'Sending...';
      msgEl.style.color = '#fff';
      // Simulate network send; replace with real integration (EmailJS, server) if needed.
      setTimeout(() => {
        msgEl.textContent = 'Message sent — I will get back to you soon!';
        msgEl.style.color = '#b7ffdd';
        form.reset();
      }, 900);
    });
  }

  // subtle glow pulse on orbit blobs
  const blobs = document.querySelectorAll('.glow-blob');
  blobs.forEach((b, i) => {
    let scaleUp = true;
    setInterval(() => {
      b.style.transition = 'transform 1200ms ease-in-out, opacity 800ms';
      b.style.transform = scaleUp ? 'scale(1.05)' : 'scale(1)';
      b.style.opacity = scaleUp ? '1' : '0.95';
      scaleUp = !scaleUp;
    }, 2200 + (i*200));
  });

  // smooth scrolling for anchor links (improves behavior)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
