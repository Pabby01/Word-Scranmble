export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          neon: "#00ffff",
          darkBg: "#0d0d0d",
          cardBg: "#1a1a1a",
        },
        boxShadow: {
          neon: "0px 0px 20px 2px rgba(0, 255, 255, 0.8)",
        },
      },
    },
    plugins: [],
  };
  