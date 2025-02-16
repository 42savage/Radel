// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ["gsap"],
  },

  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "Specjalizujemy się w dziedzinie sztukaterii elewacyjnej. Produkujemy wysokiej jakości Ryfle, profile elewacyjne, płaskorzeźby, pilastry i kroksztyny.",
        },
      ],
      charset: "utf-8",
      htmlAttrs: {
        lang: "pl",
      },
      title:
        "Radel - Sztukateria elewacyjna | Ryfle. Proflie elewacyjne, płaskorzeźby, pilastry, kroksztyny",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxt/image", "@pinia/nuxt"],
  compatibilityDate: "2025-02-09",
});
