/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          deep: 'var(--color-primary-deep)',
        },
        brandRed: {
          50: 'var(--color-red-50)',
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)',
          textBtn: 'var(--color-red-text)',
        },
      },
    },
    fontFamily: {
      heading: ['var(--font-inter)', 'sans-serif'],
      body: ['var(--font-orbitron)', 'sans-serif'],
      space_grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      bebas_neue: ['var(--font-bebas-neue)', 'sans-serif'],
    },
    screens: {
      md: '768px',
      lg: '1440px',
    },
    fontSize: {
      // format: [fontSize, { lineHeight }]
      caption: ['12px', '16px'],
      tag: ['20px', '24px'],

      // Headings
      h1: ['60px', '72px'],
      h2: ['48px', '56px'],
      h3: ['40px', '48px'],
      h4: ['32px', '40px'],
      h5: ['24px', '28px'],
      h6: ['20px', { lineHeight: '24px', letterSpacing: '4%' }],

      // Body variations
      'body-lg': ['20px', '24px'],
      'body-md': ['16px', '19.2px'],
      'body-sm': ['14px', '16.8px'],

      //Buttons
      'btn-protocol': ['35px', { lineHeight: '100%', letterSpacing: '0%' }],
    },
  },
  plugins: [],
};
