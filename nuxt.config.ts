// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    cssPath: "~/assets/css/main.css",
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
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "http://laravel-dhammapada-api.test",
    },
  },
});