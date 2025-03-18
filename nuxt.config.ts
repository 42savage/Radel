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
  nitro: {
    storage: {
      myFileSystem: {
        driver: "fs",
        base: "public/",
      },
    },
  },

  modules: ["@nuxt/image", "@pinia/nuxt", "nuxt-gtag", "nuxt-mail"],

  gtag: {
    id: "GTM-K8WFF5GK",
    config: {
      debug_mode: true,
    },
    initCommands: [
      // Setup up consent mode
      [
        "consent",
        "default",
        {
          ad_user_data: "denied",
          ad_personalization: "denied",
          ad_storage: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
  },
  mail: {
    message: {
      to: "biuro@sztukateriaradel.pl",
    },
    smtp: {
      host: process.env.SMTP,
      port: process.env.PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    },
  },

  compatibilityDate: "2025-02-09",
});
