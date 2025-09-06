// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["usebootstrap"],
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css", "~/assets/css/screen.css", "~/assets/css/font.css", "~/assets/css/auth.css", "~/assets/css/navbar.css", "~/assets/css/footer.css", "~/assets/css/mobilemenu.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'th',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  runtimeConfig: {
    /*
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3000"
    }
      */
    public: {
      apiBase: '/api' // 👈 ให้เรียกผ่าน proxy
    }
  },
  nitro: {

    devProxy: {
      '/api': {
        target: process.env.API_BASE, // เป้าหมายจริง
        changeOrigin: true
      },
      '/getip': {
        target: 'https://ifconfig.co/json',
        changeOrigin: true
      },

    },
    // สำหรับ production - ใช้ routeRules แทน
    routeRules: {
      '/api/**': {
        proxy: process.env.API_BASE + '/**'
      },
      '/getip': {
        proxy: 'https://ifconfig.co/json'
      }
    }
  }
});
