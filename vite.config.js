import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        courses: resolve(__dirname, 'courses.html'),
        contact: resolve(__dirname, 'contact.html'),
        participantTestimonials: resolve(__dirname, 'participant-testimonials.html'),
        parentTestimonials: resolve(__dirname, 'parent-testimonials.html'),
        team: resolve(__dirname, 'team.html')
      }
    }
  }
});
