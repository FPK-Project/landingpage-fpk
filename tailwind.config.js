/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js", "about/index.html", "register/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter",
      },
    },
  },
  plugins: [],
};
