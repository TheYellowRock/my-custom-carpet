import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // For titles, actions, and menu
        serif: ['Lora', 'serif'],           // For content
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed:{
          base: '#cb1528'
        },
        customBlue:{
          base: '#012551'
        },
        customTurcoise:{
          base: '#5ce1e6',
          hover: '#008ec5'
        },
        customYellow:{
          base: '#ffde59',
          hover: '#f6cb1f'
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 1s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-out forwards',
        bounce: 'bounce 2s infinite',
        scroll: 'scroll 20s linear infinite',
      },
      transitionDelay: {
        0: '0ms',
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        // Add more if needed
      },
      backgroundSize: {
        custom: '500px 500px', // Adjust to your desired size
      },
    },
    
  },
  plugins: [],
};
export default config;
