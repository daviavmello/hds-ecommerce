module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {
      height: (theme) => ({
        "screen-90": "90vh",
        "screen-50": "50vh",
        "screen-33": "calc(100vh / 3)",
        "screen-25": "calc(100vh / 4)",
        "screen-20": "calc(100vh / 5)",
        "screen-10": "calc(100vh / 10)",
      }),
      width: (theme) => ({
        "fit-content": "fit-content",
        "screen-90": "90vw",
        "screen-50": "50vw",
        "screen-33": "calc(100vw / 3)",
        "screen-25": "calc(100vw / 4)",
        "screen-20": "calc(100vw / 5)",
        "screen-10": "calc(100vw / 10)",
      }),
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        medium: "var(--color-medium)",
        accent: "var(--color-accent)",
        lightYellow: "var(--color-light-yellow)",
        success: "var(--color-success)",
      },
    },
    backgroundImage: {
      homeImg: "url('/src/images/home.jpeg')",
      mapImg: "url('/src/images/map.png')",
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [],
};
