/* ===================================================
   NewFeed Marketing — Portfolio JS
   =================================================== */

(() => {
  'use strict';

  // ===== Header on scroll =====
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Mobile nav =====
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // close mobile nav after link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ===== Smooth scroll with offset for fixed header =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ===== AOS-style fade-in on scroll =====
  const aosEls = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small staggered delay based on parent siblings
          const sib = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
          entry.target.style.transitionDelay = (sib > -1 ? Math.min(sib, 6) * 80 : 0) + 'ms';
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    aosEls.forEach(el => io.observe(el));
  } else {
    aosEls.forEach(el => el.classList.add('is-visible'));
  }

  // ===== Animated counters =====
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = el => {
    const target = parseFloat(el.dataset.counter);
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = (decimals > 0 ? target.toFixed(decimals) : Math.round(target)) + suffix;
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  // ===== Back to top =====
  const backTop = document.getElementById('backToTop');
  const toggleBackTop = () => {
    backTop.classList.toggle('is-visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', toggleBackTop, { passive: true });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Year in footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Contact form (front-end only) =====
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      note.className = 'form-note';
      note.textContent = '';

      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.email || !data.message) {
        note.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        note.classList.add('is-error');
        return;
      }
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(data.email)) {
        note.textContent = 'Informe um e-mail válido.';
        note.classList.add('is-error');
        return;
      }

      // Build mailto with form contents (works without backend)
      const subject = encodeURIComponent(`Novo contato — ${data.name}${data.company ? ' / ' + data.company : ''}`);
      const body = encodeURIComponent(
        `Nome: ${data.name}\n` +
        `E-mail: ${data.email}\n` +
        `Telefone: ${data.phone || '-'}\n` +
        `Empresa: ${data.company || '-'}\n` +
        `Serviço: ${data.service || '-'}\n\n` +
        `Mensagem:\n${data.message}`
      );
      window.location.href = `mailto:newfeedmarketing24@gmail.com?subject=${subject}&body=${body}`;

      note.textContent = 'Abrindo seu cliente de e-mail… Caso não abra, escreva para newfeedmarketing24@gmail.com.';
      note.classList.add('is-success');
      form.reset();
    });
  }
})();
