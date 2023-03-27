// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      script: [
        {
          src: "/js/jquery.min.js",
        },
        {
          src: "/js/jquery.touchSwipe.min.js",
          async: true,
        },
        {
          src: "/js/bootstrap.min.js",
        },
        {
          src: "/js/template-scripts.js",
        },
        {
          src: "/js/popper.min.js",
        },

        {
          src: "/js/parallax.min.js",
        },
        {
          src: "/js/mailchamp.js",
        },
        {
          src: "/js/bootstrap.offcanvas.min.js",
        },
        {
          src: "/js/particles-code.js",
        },
        {
          src: "/js/particles.js",
        },
        {
          src: "/js/smoothscroll.js",
        },
        {
          src: "/owlcarousel/owl.carousel.min.js",
        },
        {
          src: "/js/flickity.pkgd.min.js",
        },
      ],
    },
  },
  css: [
    "assets/css/bootstrap.min.css",
    "assets/icons-pack/fontawesome-5/css/all.css",
    "assets/css/main.min.css",
  ],
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  //   app: {
  //     head: {
  //       script: [
  //         {
  //           src = "/js/jquery.min.js",
  //         },
  //         {
  //           src = "/js/popper.min.js",
  //         },
  //         {
  //           src: "/js/vendors/jquery.magnific-popup.min.js",
  //         },
  //         {
  //           src: "/js/app.js",
  //         },
  //       ],
  //     },
  //   },
});
