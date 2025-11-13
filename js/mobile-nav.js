// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isVisible = nav.style.display === 'flex' || nav.classList.contains('open');
    if (isVisible) {
      nav.style.display = '';
      nav.classList.remove('open');
      toggle.innerText = '☰';
    } else {
      nav.style.display = 'flex';
      nav.classList.add('open');
      toggle.innerText = '✕';
    }
  });

  // Close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.style.display = '';
        nav.classList.remove('open');
        toggle.innerText = '☰';
      }
    });
  });
});