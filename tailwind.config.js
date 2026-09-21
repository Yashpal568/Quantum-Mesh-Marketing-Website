/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          dark: '#081426',
          blue: '#0066FF',
          royal: '#1D4ED8',
          electric: '#0070F3',
          cyan: '#06B6D4',
          purple: '#7C3AED',
          muted: '#64748B',
          light: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        cardTint: {
          hmsBg: '#F0F7FF',
          hmsBorder: '#D8EAFF',
          hmsAccent: '#2563EB',
          vmsBg: '#F0FDF4',
          vmsBorder: '#DCFCE7',
          vmsAccent: '#16A34A',
          umsBg: '#FAF5FF',
          umsBorder: '#F3E8FF',
          umsAccent: '#9333EA',
          lmsBg: '#FFF7ED',
          lmsBorder: '#FFEDD5',
          lmsAccent: '#EA580C',
          restaurantBg: '#FDF2F8',
          restaurantBorder: '#FCE7F3',
          restaurantAccent: '#DB2777',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -5px rgba(0, 50, 120, 0.07), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -10px rgba(0, 80, 200, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'device': '0 25px 60px -15px rgba(10, 25, 47, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'glow-blue': '0 0 40px -5px rgba(0, 102, 255, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
