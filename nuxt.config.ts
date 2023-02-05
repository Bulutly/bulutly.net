// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Quiety - Software & IT Solutions HTML Template",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        //twitter
        { name: "twitter:site", content: "@themetags" },
        { name: "twitter:creator", content: "@themetags" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Quiety - Creative SAAS Technology &amp; IT Solutions Bootstrap 5 HTML Template",
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
        { name: "author", content: "ThemeTags" },
      ],

      link: [{ rel: "icon", type: "image/*", href: "/img/favicon.png" }],
      script: [
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
});
