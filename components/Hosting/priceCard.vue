<template>
  <div
    class="row justify-content-start second-pricing-table-container dedicated-version collage-plans mr-tp-30">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-md-4 col-12 pr-md-0">
      <div
        :class="cardIndex == 1 ? '  style-2 active mt-n8 ' : ''"
        class="second-pricing-table">
        <h5 class="second-pricing-table-title">
          {{ cardItem.title }} <span>{{ cardItem.subtitle }}</span>
        </h5>
        <span class="second-pricing-table-price">
          <i
            :class="cardItem.price.type == '/mo' ? 'monthly' : 'yearly'"
            class=""
            >{{ cardItem.price.currency
            }}<small>{{ cardItem.price.type }}</small></i
          >
        </span>

        <ul class="second-pricing-table-body">
          <li v-for="item in cardItem.serviceList">
            <strong>{{ item.text }}</strong> {{ item.value }}
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

        <a class="second-pricing-table-button" href="#">{{
          cardItem.ctaBtn.text
        }}</a>
      </div>
    </div>
    <!-- 
    <div class="col-md-4 col-12 px-md-0">
      <div class="second-pricing-table style-2 active mt-n8">
        <h5 class="second-pricing-table-title">
          Relluxe plan <span>mostly for personal using</span>
        </h5>
        <span class="second-pricing-table-price monthly">
          <i class="monthly">$6.99<small>/mo</small></i>
          <i class="yearly">$85.99<small>/year</small></i>
        </span>

        <ul class="second-pricing-table-body">
          <li><strong>2 TB</strong> of space</li>
          <li><strong>unlimited</strong> bandwidth</li>
          <li><strong>full backup</strong> systems</li>
          <li><strong>free</strong> domain</li>
          <li><strong>Unlimited</strong> Database</li>
          <li><strong>Fast SSD</strong> Storage</li>
          <li><strong>unlimited</strong> database</li>
          <li><strong>free</strong> domain</li>
          <li><strong>Unlimited</strong> Database</li>
        </ul>

        <ul class="second-pricing-table-body-features">
          <li>
            <span
              ><strong>Dedicated project</strong>big companis,we chose to works
              with it</span
            >
          </li>
          <li>
            <span
              ><strong>Easy feedback sharing</strong>Choose your edition, Try it
              free for 14 days</span
            >
          </li>
        </ul>

        <a class="second-pricing-table-button" href="#">next setup</a>
      </div>
    </div>

    <div class="col-md-4 col-12 pl-md-0">
      <div class="second-pricing-table">
        <h5 class="second-pricing-table-title">
          Expert plan <span>mostly for personal using</span>
        </h5>
        <span class="second-pricing-table-price monthly">
          <i class="monthly">$3.99<small>/mo</small></i>
          <i class="yearly">$42.99<small>/year</small></i>
        </span>

        <ul class="second-pricing-table-body">
          <li><strong>2 TB</strong> of space</li>
          <li><strong>unlimited</strong> bandwidth</li>
          <li><strong>full backup</strong> systems</li>
          <li><strong>free</strong> domain</li>
          <li><strong>Unlimited</strong> Database</li>
          <li><strong>Fast</strong> SSD Storage</li>
          <li class="not-chacked">unlimited database</li>
        </ul>

        <ul class="second-pricing-table-body-features">
          <li>
            <span
              ><strong>Dedicated project</strong>big companis,we chose to works
              with it</span
            >
          </li>
          <li>
            <span
              ><strong>Easy feedback sharing</strong>Choose your edition, Try it
              free for 14 days</span
            >
          </li>
        </ul>

        <a class="second-pricing-table-button" href="#">next setup</a>
      </div>
    </div> -->
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
