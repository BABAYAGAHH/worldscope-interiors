/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A4B3B",
        accent: "#D7C2A8",
        background: "#F6F1EA",
        surface: "#FFFDF8",
        text: "#241B16",
        muted: "#6C615A",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -28px rgba(56, 37, 26, 0.22)",
        panel: "0 36px 90px -46px rgba(44, 30, 22, 0.28)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(215, 194, 168, 0.5), transparent 42%), radial-gradient(circle at bottom right, rgba(106, 75, 59, 0.18), transparent 34%)",
      },
    },
  },
  plugins: [],
};
