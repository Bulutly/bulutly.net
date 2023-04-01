<template>
  <section class="fastTrack pt-20 pb-25 border-top">
    <div class="container">
      <IndexFeaturesCards :data="cardData" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const cardData = ref<IFeatureCard[]>([
  {
    title: "A fast track to more sales.",
    subtitle: {
      text: "SUPER FAST DEVELOPMENT",
      color: "#ee9823",
    },

    description:
      "Did you know that 57% of users will leave your site if it takes longer than 3 seconds to load? That’s a lot of lost revenue. And with Web Hosting Plus, your pages load faster than shared hosting, so more visitors convert to customers. With our latest optimized server hardware, you'll get faster sites — up to nearly 40% average improvement in overall server response times*.",

    button: {
      path: "/servers",
      text: "Discover all plans and prices",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/yellow-feature.png",
      backgroundColor: "#fede48",
    },
  },
  {
    title: "WooCommerce offers powerful online stores.",
    subtitle: {
      text: "MANAGED WORDPRESS ECOMMERCE",
      color: "#ff2934",
    },

    description:
      "Managed WordPress Ecommerce offers hassle-free online store setup, built-in speed and performance, plus free access to over 40 WooCommerce extensions. Build client sites quickly with the latest version of WordPress installed. From there you can start from scratch or save time picking from dozens of flexible, editable themes.",
    button: {
      path: "/wordpress",
      text: " See all WooCommerce offers",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/red-feature.png",
      backgroundColor: "#ff5059",
    },
  },
]);
</script>

<style></style>
