// Mobile nav drawer with overlay
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  // create overlay
  let overlay = document.querySelector('.mobile-nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    document.body.appendChild(overlay);
  }

  function openNav() {
    nav.classList.add('open');
    overlay.classList.add('active');
    toggle.innerText = '✕';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    nav.classList.remove('open');
    overlay.classList.remove('active');
    toggle.innerText = '☰';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });

  // Close when overlay clicked
  overlay.addEventListener('click', closeNav);

  // Close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 1024) closeNav();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });
});