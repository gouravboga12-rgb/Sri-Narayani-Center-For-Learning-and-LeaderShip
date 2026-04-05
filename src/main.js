import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

// Initialize Animate On Scroll
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true,
  offset: 100,
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
