import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin(({ $config,vueApp,$router }) => {
  vueApp.use(
    VueGtag,
    {
      config: {
        id: $config.public.googleAnalyticsId,
      },
    },
    $router
  );
});
