<template>
  <section class="bg-default-2 pt-30 pb-20">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12 text-left">
          <h1 class="coodiv-text-5 font-weight-bold mb-0">
            Get Fully Managed Dedicated Server Hosting.
          </h1>
          <p class="coodiv-text-9 font-weight-bold color-opacity-3">
            Get powerful single tentant, bare metal servers to run
            mission-critical apps.
          </p>
        </div>

        <div class="col-lg-4 col-12">
          <div id="monthly-yearly-chenge" class="style-two mb-0 mt-5">
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
              class="yearli-price"
              ><span class="change-box-text">billed annually</span></a
            >
          </div>
        </div>
      </div>

      <div class="form form-user-per-server mt-md-15 mt-gl-25 mt-20">
        <div class="form-group position-relative">
          <div class="form-slider price' data-js-form-slider='true">
            <input class="field" max="1000" min="10" type="range" value="100" />
            <span class="fill"></span>
            <span class="thumb users-container"
              ><span class="users"></span
            ></span>
          </div>
          <div class="slider-label how-much-users">
            <span>10</span>
            <span>250</span>
            <span>500</span>
            <span>750</span>
            <span>1000</span>
          </div>
        </div>
      </div>
      <ServersPriceCard :items="activeItems" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const dataMonthly = ref<IPriceCard[]>([
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$1.99",
      type: "/Monthly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-64 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$6.99",
      type: "/Monthly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "64 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],

    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-128 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "With an annual term (60% savings)",
      isSpan: true,
    },
    price: {
      currency: "$3.99",
      type: "/Monthly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "128 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],

    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },

      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],

    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-256 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.s",
    alertMsg: {
      text: "With an annual term (60% savings)",
      isSpan: true,
    },
    price: {
      currency: "$3.99",
      type: "/Monthly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "256 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],

    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },

      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],

    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
]);
const dataAnnually = ref<IPriceCard[]>([
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/Yearly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/Yearly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/Yearly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/Yearly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
  {
    title: "DS-32 w/Managed Support",
    subtitle:
      "Our dedicated server hosting experts are available to support you 24/7.",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/Yearly",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "Intel Xeon-D",
      },
      {
        isUnavailable: false,
        text: "",
        value: "4C/8T – 3.0 GHz Turbo",
      },
      {
        isUnavailable: false,
        text: "32 GB",
        value: "DDR4 RAM",
      },
      {
        isUnavailable: false,
        text: "2 x 4 TB HDD",
        value: "Storage (RAID-1)",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Dedicated team of experts to fully manage your server",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "Choose Plan", variant: "primary" },
  },
]);
const activeItems = ref<IPriceCard[]>(dataMonthly.value);
</script>

<style></style>
