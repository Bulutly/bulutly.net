<template>
  <section>
    <div class="container">
      <div class="row justify-content-center align-items-center mb-15">
        <div id="monthly-yearly-chenge" class="style-two mb-0">
          <a
            @click="activeItems = dataMonthly"
            :class="activeItems == dataMonthly ? 'active' : ''"
            class="monthly-price">
            <span class="change-box-text">billed monthly</span>
            <span class="change-box"></span
          ></a>
          <a
            @click="activeItems = dataannually"
            :class="activeItems == dataannually ? 'active' : ''"
            class="yearli-price">
            <span class="change-box-text">billed annually</span></a
          >
        </div>
        <span class="price-discount-billed">20% discount</span>
      </div>

      <DedicatedPriceCard :items="activeItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
const dataMonthly = ref<IPriceCard[]>([
  {
    title: "Basic plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$1.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: true,
        text: "",
        value: "Fast SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
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
    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Relluxe plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$6.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast SSD",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "database",
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

    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Expert plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "With an annual term (60% savings)",
      isSpan: true,
    },
    price: {
      currency: "$3.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast",
        value: "SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
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

    ctaBtn: { text: "next setup", variant: "primary" },
  },
]);
const dataannually = ref<IPriceCard[]>([
  {
    title: "Basic plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: true,
        text: "",
        value: "Fast SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
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
    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Relluxe plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$85.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast SSD",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "database",
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

    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Expert plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$42.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast",
        value: "SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
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

    ctaBtn: { text: "next setup", variant: "primary" },
  },
]);
const activeItems = ref<IPriceCard[]>(dataMonthly.value);
</script>

<style></style>
