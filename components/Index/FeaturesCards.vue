<template>
  <div
    v-for="(cardItem, cardIndex) in data"
    :key="cardIndex"
    class="row justify-content-start mt-15">
    <div
      class="col-md-6 col-12 d-flex align-items-center"
      :class="cardIndex == 1 ? 'order-2' : 'order-1'">
      <div class="content-text-author mb-md-0 mb-14 mt-md-0 mt-14">
        <p
          :style="`color: ${cardItem.subtitle.color}`"
          class="eyebrow content-text-author_eyebrow">
          {{ cardItem.subtitle.text }}
        </p>
        <h3 class="coodiv-text-4 font-weight-bold">
          {{ cardItem.title }}
        </h3>
        <p class="content_text_author_description_p">
          {{ cardItem.description }}
        </p>

        <NuxtLink
          v-if="cardItem.button?.exist == true"
          :to="cardItem.button?.path"
          class="btn btn-dark coodiv-text-11 mt-10">
          {{ cardItem.button?.text }}
        </NuxtLink>
      </div>
    </div>
    <div
      class="col-md-6 col-12"
      :class="cardIndex == 1 ? 'order-1' : 'order-2'">
      <div
        :style="`background-color: ${cardItem.image.backgroundColor}`"
        class="section_text_graphic_image">
        <img :src="cardItem.image.path" alt="image" title="" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
defineProps({
  data: {
    type: Array as PropType<IFeatureCard[]>,
  },
});
</script>

<style scoped></style>
