export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  modules: ["@nuxtjs/google-fonts"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
