// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "/js/jquery.min.js",
        },
        {
          src: "/js/popper.min.js",
        },
        {
          src: "/js/template-scripts.js",
        },
        {
          src: "/js/flickity.pkgd.min.js",
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
          src: "/js/bootstrap.min.js",
        },
        {
          src: "/owlcarousel/owl.carousel.min.js",
        },
      ],
    },
  },
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/icons-pack/fontawesome-5/css/all.css",
    "@/assets/css/main.min.css",
  ],
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
