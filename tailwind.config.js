/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js", "about/index.html", "about/index.js", "project/index.html", "project/index.js", "event/index.html", "event/index.js"],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter",
      },
    },
  },
  plugins: [],
};
