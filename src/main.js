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

  // Handle Contact Form submission via WhatsApp
  const contactForms = document.querySelectorAll('#contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = form.querySelector('#name').value;
      const phone = form.querySelector('#phone').value;
      const message = form.querySelector('#message').value;
      
      const whatsappNumber = "919908925730";
      const text = `*New Lead from Website*%0A%0A*Full Name:* ${encodeURIComponent(name)}%0A*Phone Number:* ${encodeURIComponent(phone)}%0A*Message:* ${encodeURIComponent(message)}`;
      
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
      
      // Optional: Clear form
      form.reset();
    });
  });
});
