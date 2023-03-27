<template>
  <div
    class="row justify-content-center first-pricing-table-container mr-tp-30">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-md-4">
      <div
        :class="cardIndex == 1 ? 'best-plan' : ''"
        class="first-pricing-table version-two">
        <i class="fad fa-podcast first-pricing-table-icon"></i>
        <h5 class="first-pricing-table-title">
          {{ cardItem.title }}<span>{{ cardItem.subtitle }}</span>
        </h5>
        <span class="plan-price second-pricing-table-price">
          <i
            :class="cardItem.price.type == '/mo' ? 'monthly' : 'yearly'"
            class=""
            >{{ cardItem.price.currency }}
            <span> {{ cardItem.price.type }}</span></i
          >
        </span>
        <span class="main-features-box"
          ><i class="fad fa-podcast"></i> 64 KBPS Plan</span
        >
        <span class="main-features-box mb-6"
          ><i class="fad fa-microphone"></i> Low Audio Quality</span
        >
        <ul class="first-pricing-table-body">
          <li><i class="fal fa-broadcast-tower"></i> Unlimited listeners</li>
          <li><i class="fal fa-play"></i> Unlimited bandwidth</li>
          <li><i class="fal fa-headphones"></i> Free Auto DJ</li>
          <li><i class="fal fa-lock"></i> SSL Streaming</li>
        </ul>
        <a href="#" class="btn btn-dark coodiv-text-11 mt-10 d-block">{{
          cardItem.ctaBtn.text
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
defineProps({
  items: {
    type: Array as PropType<IPriceCard[]>,
  },
});
</script>

<style scoped></style>
