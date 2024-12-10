module.exports = {
  content: [
    "./*.html", // Matches all HTML files in the current folder
    "./**/*.{js,jsx,ts,tsx}", // Optional: Matches JS/TS files in subfolders
  ],
  theme: {
    extend: {
      spacing: {
        '50': '12.5rem', // 50px = 3.125rem
      },
    },

  },
  plugins: [],
};
