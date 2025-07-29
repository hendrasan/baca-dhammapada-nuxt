// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Baca Dhammapada Online",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        {
          name: "description",
          content: "Baca syair-syair Dhammapada dan cerita tentang setiap syairnya online",
        },
        {
          name: "og:image",
          content: `${process.env.NUXT_PUBLIC_BASE_URL || ''}/og.jpg`,
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
  ],
  gtag: {
    id: "G-H03KF4C82T",
  },
  colorMode: {
    classSuffix: "",
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/main.css", {
      injectPosition: 0,
    }],
    // configPath: "tailwind.config.js",
    // exposeConfig: false,
    // config: {},
    // injectPosition: 0,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "",
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "http://laravel-dhammapada-api.test",
    },
  },
});