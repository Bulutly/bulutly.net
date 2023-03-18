<template>
  <section class="py-25 bg-default-2 position-relative">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 text-center">
          <p style="color: #ee9823" class="eyebrow content-text-author_eyebrow">
            Super fast development
          </p>
          <h3 class="coodiv-text-4 font-weight-bold">
            Simplified Radio Pricing
          </h3>
          <p class="content_text_author_description_p">
            All of our radio hosting plans include unlimited listeners and
            bandwidth, allowing you to grow your station without worrying about
            listener caps, extra fees, or low-quality streaming
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div id="monthly-yearly-chenge" class="mr-tp-20 custom-change">
          <a
            @click="activeItems = dataMonthly"
            :class="activeItems == dataMonthly ? 'active' : ''"
            class="monthly-price f-size12">
            <span class="change-box-text">monthly</span>
            <span class="change-box"></span
          ></a>
          <a
            @click="activeItems = dataAnnually"
            :class="activeItems == dataAnnually ? 'active' : ''"
            class="yearli-price f-size12">
            <span class="change-box-text">annually</span></a
          >
        </div>
      </div>
      <IcecastPriceCard :items="activeItems" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const dataMonthly = ref<IPriceCard[]>([
  {
    title: "64 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$0.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "64 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: " Low Audio Quality",
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
    title: "192 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$2.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "192 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: " Avrage Audio Quality",
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
    title: "256 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$4.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: " 256 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Best Audio Quality",
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
    title: "64 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
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
        text: "",
        value: "64 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: " Low Audio Quality",
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
    title: "192 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$12.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: "192 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: " Avrage Audio Quality",
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
    title: "256 KBPS",
    subtitle: "Stream high quality audio at 64 Kbps",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$15.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "",
        value: " 256 KBPS Plan",
      },
      {
        isUnavailable: false,
        text: "",
        value: "Best Audio Quality",
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
