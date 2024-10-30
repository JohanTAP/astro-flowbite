module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f5f7fa",
          "100": "#e4e7eb",
          "200": "#cbd2d9",
          "300": "#9aa5b1",
          "400": "#52606d",
          "500": "#313d49",
          "600": "#29333e",
          "700": "#212932",
          "800": "#181f25",
          "900": "#1e3a8a",
        },
        accent: {
          "default": "#A6447A",
          "dark": "#8A038C",
        },
        text: {
          light: "#ffffff",
          dark: "#f5f5f5",
        },
      },
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'sans': ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
