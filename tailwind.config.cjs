module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
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
        navy: '#1B2A3A',
        blue: {
          400: '#3182F6',
          500: '#2563EB',
        },
        mint: {
          400: '#4FFFB0',
          500: '#1DE9B6',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 32px 0 rgba(49,130,246,0.10), 0 1.5px 6px 0 rgba(49,130,246,0.08)',
        'soft': '0 2px 8px 0 rgba(49,130,246,0.10)',
      },
    },
  },
  plugins: [],
};