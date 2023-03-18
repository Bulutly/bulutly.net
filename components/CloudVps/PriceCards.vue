<template>
  <div
    class="row justify-content-start second-pricing-table-container mr-tp-30">
    <div
      class="col-md-4 px-0"
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex">
      <div
        :class="cardIndex == 2 ? 'active style-2' : ''"
        class="second-pricing-table">
        <h5 class="second-pricing-table-title">
          {{ cardItem.title }} <span>{{ cardItem.subtitle }}</span>
        </h5>
        <span v-if="cardItem.alertMsg.isSpan" class="plan-discount">{{
          cardItem.alertMsg.text
        }}</span>
        <span class="second-pricing-table-price monthly">
          <i class="monthly"
            >{{ cardItem.price.currency
            }}<small>{{ cardItem.price.type }}</small></i
          >
          <i class="yearly">$9.99<small>/year</small></i>
        </span>

        <ul class="second-pricing-table-body">
          <li
            :class="item.isUnavailable ? 'not-chacked ' : ''"
            v-for="item in cardItem.serviceList">
            <strong>{{ item.text }}</strong>
            {{ item.value }}
          </li>
        </ul>

        <ul class="second-pricing-table-body-features">
          <li class="not-chacked" v-for="item in cardItem.extraInfo">
            <span
              ><strong>{{ item.title }}</strong
              >{{ item.text }}</span
            >
          </li>
        </ul>

        <a class="second-pricing-table-button" href="#">{{
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
