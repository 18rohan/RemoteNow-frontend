module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },

    extend: {},
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
