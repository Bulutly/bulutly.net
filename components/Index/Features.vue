<template>
  <section class="pt-20 pb-25">
    <div class="container">
      <IndexFeaturesCards :data="cardData" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const cardData = ref<IFeatureCard[]>([
  {
    title: "WooCommerce offers powerful online stores.",
    subtitle: {
      text: "MANAGED WORDPRESS ECOMMERCE",
      color: "#ee9823",
    },

    description:
      "Managed WordPress Ecommerce offers hassle-free online store setup, built-in speed and performance, plus free access to over 40 WooCommerce extensions. Build client sites quickly with the latest version of WordPress installed. From there you can start from scratch or save time picking from dozens of flexible, editable themes.",
    button: {
      path: "/wordpress",
      text: "Shop now",
      color: "dark",
      exist: true,
    },
    image: {
      path: "img/demo/features/yellow-feature.png",
      backgroundColor: "#fede48",
    },
  },
  {
    title: "Dedicated Server Hosting for system admins and developers.",
    subtitle: {
      text: "DEDICATED SERVER HOSTING",
      color: "#ff2934",
    },

    description:
      "Calling all experienced developers, system admins or agencies seeking powerful server capabilities: our Dedicated Server Hosting provides high-performance server options with isolated resources to run mission-critical applications where latency and uptime matters.All plans come with free standard hosting support. Optional paid server management services include fully managed support and task-based services.",
    button: {
      path: "/servers",
      text: "configure your server",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/red-feature.png",
      backgroundColor: "#ff5059",
    },
  },
  {
    title: "A fast track to more sales.",
    subtitle: {
      text: "ECOMMERCE",
      color: "#079d63",
    },

    description:
      "Did you know that 57% of users will leave your site if it takes longer than 3 seconds to load? That’s a lot of lost revenue. And with Web Hosting Plus, your pages load faster than shared hosting, so more visitors convert to customers.With our latest optimized server hardware, you'll get faster sites — up to nearly 40% average improvement in overall server response times*.",
    button: {
      path: "/dedicated",
      text: "See plans and pricing",
      color: "dark",
      exist: true,
    },
    image: {
      path: "img/demo/features/green-feature.png",
      backgroundColor: "#56e7a5",
    },
  },
]);
</script>

<style></style>
