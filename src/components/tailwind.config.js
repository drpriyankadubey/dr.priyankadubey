/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#F8F5F0', // Off-white / warm cream
        'dark-olive': '#3A4D39', // Dark olive green
        'sage-green': '#6B8E23', // Sage green accent
        'primary': '#2ECC71', // Existing primary green, can be adjusted if needed
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/images/paper-texture.png')", // Assuming a paper-texture.png exists in public/images
        'gradient-green': 'linear-gradient(to right bottom, #6B8E23, #4A6B1A)', // Custom gradient for buttons/elements
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(107, 142, 35, 0.5)', // Soft green glow
      }
    },
  },
  plugins: [],
}