/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        accent: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        dark: {
          950: '#04040A',
          900: '#080B14',
          800: '#0D1120',
          700: '#141929',
          600: '#1C2333',
          500: '#252D40',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        'gradient-hero':    'linear-gradient(135deg, #4338ca 0%, #0ea5e9 100%)',
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
        'float':       'float 5s ease-in-out infinite',
        'orb-drift':   'orbDrift 12s ease-in-out infinite',
        'orb-drift-2': 'orbDrift2 15s ease-in-out infinite',
        'chip-float':  'chipFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(40px,-30px) scale(1.06)' },
          '66%':      { transform: 'translate(-25px,15px) scale(0.94)' },
        },
        orbDrift2: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '40%':      { transform: 'translate(-50px,25px) scale(1.04)' },
          '70%':      { transform: 'translate(30px,-20px) scale(0.96)' },
        },
        chipFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(99,102,241,0.45)',
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.35)',
      },
    },
  },
  plugins: [],
}
