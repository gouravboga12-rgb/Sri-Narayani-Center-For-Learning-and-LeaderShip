import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

// Initialize Animate On Scroll
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});

// Typewriter Effect Function
async function typeSentence(elementId, text, speed = 50) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.classList.add('typewriter-cursor');
  element.textContent = ''; // Clear existing static text (for SEO) before typing
  for (let i = 0; i < text.length; i++) {
    element.textContent += text.charAt(i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  element.classList.remove('typewriter-cursor');
}

document.addEventListener('DOMContentLoaded', async () => {
  // Start Hero Animations
  if (document.getElementById('hero-title')) {
    await typeSentence('hero-title', 'From Classrooms to Board Rooms', 80);
    await typeSentence('hero-subtitle', 'World-class training programs designed to enhance skills, build confidence, and foster lifelong learning.', 40);
  }

  // Mobile menu functionality
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Testimonials dropdown functionality
  const testimonialsBtn = document.getElementById('testimonials-btn');
  const testimonialsDropdown = document.getElementById('testimonials-dropdown');
  const testimonialsArrow = document.getElementById('testimonials-arrow');

  if (testimonialsBtn && testimonialsDropdown) {
    testimonialsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      testimonialsDropdown.classList.toggle('hidden');
      if (testimonialsArrow) {
        testimonialsArrow.classList.toggle('rotate-180');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!testimonialsBtn.contains(e.target) && !testimonialsDropdown.contains(e.target)) {
        testimonialsDropdown.classList.add('hidden');
        if (testimonialsArrow) {
          testimonialsArrow.classList.remove('rotate-180');
        }
      }
    });
  }

  // Mobile testimonials toggle functionality
  const mobileTestimonialsBtn = document.getElementById('mobile-testimonials-btn');
  const mobileTestimonialsDropdown = document.getElementById('mobile-testimonials-dropdown');
  const mobileTestimonialsArrow = document.getElementById('mobile-testimonials-arrow');

  if (mobileTestimonialsBtn && mobileTestimonialsDropdown) {
    mobileTestimonialsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileTestimonialsDropdown.classList.toggle('hidden');
      if (mobileTestimonialsArrow) {
        mobileTestimonialsArrow.classList.toggle('rotate-180');
      }
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
