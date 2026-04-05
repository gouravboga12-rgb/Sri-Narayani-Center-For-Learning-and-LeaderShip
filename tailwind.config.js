/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./courses.html",
    "./contact.html",
    "./participant-testimonials.html",
    "./parent-testimonials.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        secondary: '#FFD700',
        accent: '#1E3A8A',
        textLight: '#FFFFFF',
        textDark: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
