<template>
  <section class="pt-20 pb-15">
    <div class="container">
      <IndexFeaturesCards :data="cardData" />
      <div class="cta-row-careers mt-20">
        <div class="cta-row-careers_container">
          <h3>Need a self-managed VPS?</h3>
          <p class="body-lg">
            We also offer self-managed VPS hosting plans starting at $ 4.99/mo.
          </p>

          <NuxtLink :to="{ name: 'vps-reseller' }" tabindex="0">
            Read more
          </NuxtLink>
        </div>
      </div>
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
      text: " See all WordPress prices",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/services.png",
      backgroundColor: "transparent",
    },
  },
  {
    title: "Dedicated Server Hosting for system admins and developers.",
    subtitle: {
      text: " DEDICATED SERVER HOSTING",
      color: "#ff2934",
    },

    description:
      "Calling all experienced developers, system admins or agencies seeking powerful server capabilities: our Dedicated Server Hosting provides high-performance server options with isolated resources to run mission-critical applications where latency and uptime matters.All plans come with free standard hosting support. Optional paid server management services include fully managed support and task-based services.",
    button: {
      path: "/servers",
      text: "Start configure your server now",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/services-2.png",
      backgroundColor: "transparent",
    },
  },
  {
    title: " A fast track to more sales.",
    subtitle: {
      text: "ECOMMERCE",
      color: "#ee9823",
    },
    description:
      "Did you know that 57% of users will leave your site if it takes longer than 3 seconds to load? That’s a lot of lost revenue. And with Web Hosting Plus, your pages load faster than shared hosting,so more visitors convert to customers.   With our latest optimized server hardware, you'll get faster sites — up to nearly 40% average improvement in overall server response times*.",
    button: {
      path: "/dedicated",
      text: "Start your building your online store",
      color: "dark",
      exist: true,
    },
    image: {
      path: "/img/demo/features/services-3.png",
      backgroundColor: "transparent",
    },
  },
]);
</script>

<style></style>
