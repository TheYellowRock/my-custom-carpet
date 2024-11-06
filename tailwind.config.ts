import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },   // Changed to string
          '100%': { opacity: '1' },  // Changed to string
        },
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' }, // Changed to string
          '100%': { transform: 'translateX(0)', opacity: '1' },   // Changed to string
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },  // Changed to string
          '100%': { transform: 'scale(1)', opacity: '1' },  // Changed to string
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
        zoomIn: 'zoomIn 0.8s ease-in-out',
      },
    },
    
  },
  plugins: [],
};
export default config;
