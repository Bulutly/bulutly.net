<template>
  <section class="fast-track pt-20 pb-25">
    <div class="container">
      <IndexFeaturesCards :data="cardData" />

      <div class="cta-row-careers mt-20">
        <div class="cta-row-careers_container">
          <h3>Need a self-managed VPS?</h3>
          <p class="body-lg">
            We also offer self-managed VPS hosting plans starting at $ 4.99/mo.
          </p>

          <NuxtLink :to="{ name: 'wordpress' }" tabindex="0">
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
    title: "A fast track to more sales.",
    subtitle: {
      text: " MANAGED WORDPRESS ECOMMERCE",
      color: "#ff2934",
    },

    description:
      "Did you know that 57% of users will leave your site if it takes longer than 3 seconds to load? That’s a lot of lost revenue. And with Web Hosting Plus, your pages load faster than shared hosting, so more visitors convert to customers.   With our latest optimized server hardware, you'll get faster sites — up to nearly 40% average improvement in overall server response times*.",
    button: {
      path: "/servers",
      text: "Start building your server",
      color: "dark",
      exist: true,
    },
    image: {
      path: "img/demo/features/services.png",
      backgroundColor: "transparent",
    },
  },
]);
</script>

<style></style>
