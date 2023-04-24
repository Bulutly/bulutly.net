// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  extends: [
    // "github:traderfour/base-trader4-layers", // Extend from a git repository
    "base-layers", // Extend from a local directory
  ],
});
