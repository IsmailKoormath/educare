/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "educare-primary": "#8A1538",
        "educare-secondary": "#EBC48B",
        "educare-text-dark": "#333333",
        "educare-text-light": "#666666",
        "educare-bg-light": "#F8F8F8",
        "whatsapp-green": "#25D366",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
