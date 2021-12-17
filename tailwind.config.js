module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },

    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  variants: {},
  plugins: [],
};
