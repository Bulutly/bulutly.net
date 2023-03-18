<template>
  <div id="plans-section" class="row justify-content-center">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-md-3 col-12">
      <div :class="cardIndex == 2 ? 'active' : ''" class="wordpress-plans-box">
        <span v-if="cardIndex == 2" class="recommended-plan">Recommended</span>
        <h5 class="coodiv-text-8">{{ cardItem.title }}</h5>
        <p class="coodiv-text-12">
          {{ cardItem.subtitle }}
        </p>

        <div class="second-pricing-table-price">
          <div
            :class="cardItem.price.type == '/month' ? 'monthly' : 'yearly'"
            class="plan-price monthly">
            <div class="main-price">{{ cardItem.price.currency }}</div>
            <div class="price-extentions">
              <span>.99</span><span>{{ cardItem.price.type }}</span>
            </div>
          </div>
        </div>
        <span class="plan-discount">Save 15% when billed annualy</span>

        <ul>
          <li><i class="fas fa-check-circle"></i><b>Up to 999</b> User</li>
          <li><i class="fas fa-check-circle"></i><b>2GB</b> Storage</li>
          <li>
            <i class="fas fa-check-circle"></i
            ><b>Google Analytics</b> integration
          </li>
          <li>
            <i class="fas fa-check-circle"></i>Free <b>sub-domain</b> name
          </li>
          <li><i class="fas fa-check-circle"></i>Collect <b>payments</b></li>
          <li class="not-checked">
            <i class="fas fa-times-circle"></i><b>WordPress</b> plugins
          </li>
          <li class="not-checked">
            <i class="fas fa-times-circle"></i><b>Premium</b> Support
          </li>
          <li class="not-checked">
            <i class="fas fa-times-circle"></i><b>Premium</b> themes
          </li>
          <li class="not-checked">
            <i class="fas fa-times-circle"></i>Sell with <b>WooCommerce</b>
          </li>
        </ul>
        <a
          class="btn btn-outline-dark coodiv-text-12 d-block w-100 font-weight-light"
          href="#"
          >choose plan</a
        >
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
