// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        whitesmoke: '#F5F5F5',
        navy: '#000080',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
