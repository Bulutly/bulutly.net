<template>
  <div class="row justify-content-start mt-18">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-lg-3 col-md-6 px-0 col-12">
      <div :class="cardIndex == 2 ? 'active' : ''" class="plans-slider-box">
        <div class="coodiv-text-10 mb-3">{{ cardItem.title }}</div>
        <div class="plans-slider-price-tag second-pricing-table-price monthly">
          <div class="monthly thumb">
            <span class="coodiv-text-4 font-weight-bold"
              ><span>$</span><span class="price-server-1">7</span
              ><span>.99</span></span
            ><small>{{ cardItem.price.type }}</small>
          </div>
          <div class="yearly thumb">
            <span class="coodiv-text-4 font-weight-bold"
              ><span>$</span><span class="price-server-1y">84</span
              ><span>.99</span></span
            ><small>/Yearly</small>
          </div>
        </div>

        <div class="coodiv-text-12 color-opacity-5">
          {{ cardItem.subtitle }}
        </div>
        <ul>
          <li v-for="item in cardItem.serviceList">
            <i class="fas fa-check-circle"></i> <b>{{ item.text }}</b>
            {{ item.value }}
          </li>
        </ul>

        <div class="d-flex justify-content-center plans-slider-order">
          <a href="#">{{ cardItem.ctaBtn.text }}</a>
        </div>
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
