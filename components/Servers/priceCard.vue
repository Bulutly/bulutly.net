<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" :min="10" :max="1000" :step="1" :marks="marks" />
  </div>
  <div class="row justify-content-start mt-18">
    <div
      v-for="(cardItem, cardIndex) in items"
      :key="cardIndex"
      class="col-lg-3 col-md-6 px-0 col-12">
      <div :class="cardIndex == 2 ? 'active' : ''" class="plans-slider-box">
        <div class="coodiv-text-10 mb-3">{{ cardItem.title }}</div>
        <div class="plans-slider-price-tag second-pricing-table-price monthly">
          <div class="thumb">
            <span class="coodiv-text-4 font-weight-bold"
              ><span>$</span
              ><span class="price-server-1">{{
                cal_price(cardItem.price.currency)
              }}</span
              ><span>.99</span></span
            ><small>{{ cardItem.price.type }}</small>
          </div>
          <!-- <div class="yearly thumb">
            <span class="coodiv-text-4 font-weight-bold"
              ><span>$</span><span class="price-server-1y">84</span
              ><span>.99</span></span
            ><small>/Yearly</small>
          </div> -->
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
import { ref, reactive } from "vue";
import { PropType } from "vue";
import { IcecastPriceCard } from "~~/.nuxt/components";
interface Mark {
  label: string;
}
type Marks = Record<number, Mark | string>;

const marks = reactive<Marks>({
  10: "10",
  500: "500",
  250: "250",
  750: "750",
  1000: "1000",
});

const value = ref(100);
defineProps({
  items: {
    type: Array as PropType<IPriceCard[]>,
  },
});

const cal_price = computed(() => {
  return (price: any) =>
    Number(Number(price) * Number((Number(value.value) / 100).toFixed(0)));
});

// const changeValue = (peyload: number) => {
//   items.price.currency++;
// };
</script>

<style scoped>
.el-slider {
  --el-slider-height: 9px;
  /* --el-slider-main-bg-color: "#33343c"; */
  --el-slider-main-bg-color: #33343c;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 50px;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>
