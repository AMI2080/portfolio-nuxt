// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  app: {
    head: {
      title: "Abdelrhman Mohamed",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Abdelrhman Mohamed frontend team lead",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
