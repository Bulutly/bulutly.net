// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "A Better Nuxt 3 Starter",
      link: [{ rel: "icon", type: "image/*", href: "/favicon.svg" }],
      script: [
        {
          src: "/js/vendors/aos.js",
        },
        {
          src: "/js/vendors/bootstrap.bundle.min.js",
        },
        {
          src: "/js/vendors/jquery-3.6.0.min.js",
        },
        {
          src: "/js/vendors/jquery.magnific-popup.min.js",
        },
        {
          src: "/js/vendors/massonry.min.js",
        },
        /*  {
          src: "/js/vendors/parallax.min.js",
        },  */
        {
          src: "/js/vendors/swiper-bundle.min.js",
        },
        {
          src: "/js/app.js",
        },
      ],

      // Global CSS: https://go.nuxtjs.dev/config-css
    },
  },
  css: ["@/assets/css/main.css", "@/assets/css/custom.css"],
  plugins: [
    // only on client side
  ],
});
