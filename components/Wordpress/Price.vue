<template>
  <section class="py-25 position-relative">
    <div class="container">
      <div class="row justify-content-center text-center">
        <h1 class="coodiv-text-5 font-weight-bold">
          Trust your site to the world’s #1 web host.
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="coodiv-text-10">
            Choose the package that is right for you.
          </p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-7 mb-25">
        <div id="monthly-yearly-chenge" class="style-two mb-0">
          <a
            @click="activeItems = dataMonthly"
            :class="activeItems == dataMonthly ? 'active' : ''"
            class="monthly-price">
            <span class="change-box-text">billed monthly</span>
            <span class="change-box"></span
          ></a>
          <a
            @click="activeItems = dataAnnually"
            :class="activeItems == dataAnnually ? 'active' : ''"
            class="yearli-price">
            <span class="change-box-text">billed annually</span></a
          >
        </div>
      </div>
      <WordpressPriceCard :items="activeItems" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const dataMonthly = ref<IPriceCard[]>([
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$0",
      type: "/month",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$3",
      type: "/month",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$6",
      type: "/month",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$9",
      type: "/month",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
]);
const dataAnnually = ref<IPriceCard[]>([
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$5",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$25",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$47",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
  {
    title: "WordPress Starter",
    subtitle:
      "Start with a free sub-domain name, simple payments, and extra storage.",
    alertMsg: {
      text: "Save 15% when billed annualy",
      isSpan: true,
    },
    price: {
      currency: "$93",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "Up to 999 ",
        value: "User",
      },
      {
        isUnavailable: false,
        text: "2GB",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "Google Analytics",
        value: "integration",
      },
      {
        isUnavailable: false,
        text: "Free sub-domain",
        value: "name",
      },
      {
        isUnavailable: false,
        text: "Collect",
        value: "payments",
      },
      {
        isUnavailable: true,
        text: "WordPress",
        value: "plugins",
      },
      {
        isUnavailable: true,
        text: "Premium",
        value: "Support",
      },
      {
        isUnavailable: true,
        text: "Premium ",
        value: "themes",
      },
      {
        isUnavailable: true,
        text: "Sell with",
        value: "WooCommerce ",
      },
    ],
    extraInfo: [
      {
        title: "",
        text: "Unlimited listeners",
      },
      {
        title: "",
        text: "Unlimited bandwidth",
      },
      {
        title: "",
        text: "Free Auto DJ",
      },
      {
        title: "",
        text: "SSL Streaming",
      },
    ],
    ctaBtn: { text: "Start your free trial", variant: "dark" },
  },
]);
const activeItems = ref<IPriceCard[]>(dataMonthly.value);
</script>

<style></style>
