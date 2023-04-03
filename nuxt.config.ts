// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Trader4 - Just A Trader, Level Up Your Trading",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        //twitter
        { name: "twitter:site", content: "@themetags" },
        { name: "twitter:creator", content: "@themetags" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Trader4 - Just A Trader, Level Up Your Trading",
        },
        {
          name: "twitter:description",
          content:
            "Quiety creative Saas, software technology, Saas agency &amp; business Bootstrap 5 Html template. It is best and famous software company and Saas website template.",
        },
        { name: "twitter:image", content: "#" },
        //facebook
        { name: "og:url", content: "#" },
        {
          name: "og:description",
          content:
            "#Quiety creative Saas, software technology, Saas agency &amp; business Bootstrap 5 Html template. It is best and famous software company and Saas website template.",
        },
        { name: "og:image", content: "#" },
        { name: "og:image:secure_url", content: "#" },
        { name: "og:image:type", content: "image/png" },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "600" },

        //meta
        {
          name: "description",
          content:
            "Quiety creative Saas, software technology, Saas agency &amp; business Bootstrap 5 Html template. It is best and famous software company and Saas website template.",
        },
        { name: "author", content: "Trader4" },
      ],

      link: [{ rel: "icon", type: "image/*", href: "/favicon.svg" }],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-L5QLZBVBH1",
          async: true,
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
  runtimeConfig: {
    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config
    public: {
      googleAnalyticsId:''
    },
  },
});
