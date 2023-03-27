<template>
  <div
    class="row justify-content-start second-pricing-table-container dedicated-version mr-tp-30">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-md-4">
      <div
        :class="cardIndex == 1 ? 'style-2 active' : ''"
        class="second-pricing-table">
        <h5 class="second-pricing-table-title">
          {{ cardItem.title }} <span>{{ cardItem.subtitle }}</span>
        </h5>
        <span class="second-pricing-table-price monthly">
          <i class="monthly"
            >{{ cardItem.price.currency
            }}<small>{{ cardItem.price.type }}</small></i
          >
        </span>

        <ul class="second-pricing-table-body">
          <li
            v-for="item in cardItem.serviceList"
            :class="item.isUnavailable ? 'not-chacked ' : ''">
            <strong>{{ item.text }} </strong> {{ item.value }}
          </li>
        </ul>

        <ul class="second-pricing-table-body-features">
          <li v-for="item in cardItem.extraInfo">
            <span
              ><strong>{{ item.title }}</strong
              >{{ item.text }}</span
            >
          </li>
        </ul>

        <a class="second-pricing-table-button" href="#">next setup</a>
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
