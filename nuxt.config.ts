export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: "dracula",
        // Theme used if `html.dark`
        dark: "dracula",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
      preload: [
        "c",
        "sql",
        "scala",
        "r",
        "html",
        "vue",
        "javascript",
        "typescript",
      ],
    },
  },
});
