/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B6B3A",
        accent: "#A6CE39",
        background: "#F8FAF8",
        surface: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 22px 60px -26px rgba(11, 107, 58, 0.24)",
        panel: "0 28px 80px -40px rgba(15, 23, 42, 0.25)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(166, 206, 57, 0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(11, 107, 58, 0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};
