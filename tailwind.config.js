/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#203A8F', // LOGO BLUE: Deep Royal Blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0f172a', // Darker Navy for 3D contrast
          black: '#1a1a1a',
          gray: '#333333',
          silver: '#F8FAFC'
        },
        accent: {
          400: '#f472b6',
          500: '#CF2E78', // LOGO PINK: Magenta
          600: '#be185d',
          700: '#9d174d'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}
