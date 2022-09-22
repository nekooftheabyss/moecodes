import { Description, SiteName } from "./data/Constants";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: `${SiteName}`,
      titleTemplate: `%s - ${SiteName}`,
      meta: [
        { name: "description", hid: "description", content: Description },
      ],
      link: [
        { rel: "shortcut icon", href: "/neko.png"},
        { rel: "apple-touch-icon", href: "/neko.png"},
      ]
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@pinia/nuxt",
    "nuxt-schema-org",
  ],

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
      preload: ["c", "sql"],
    },
  },
});
