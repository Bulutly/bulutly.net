<template>
  <div class="">
    <section class="tag-box py-4 relative mx-auto">
      <ul
        class="my-1 flex flex-row content-container space-x-4 text-sm font-semibold text-gray-600 dark:text-gray-300 scroll-smooth overflow-x-scroll lg:overflow-x-hidden"
        ref="tagBox"
      >
        <button
          v-if="showBackButton"
          @click="moveBack"
          class="absolute md:block hidden z-10 top-3 rounded p-2 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:bg-slate-200"
          :class="isRTL ? '-right-1' : '-left-1'"
        >
          <Icon
            :name="isRTL ? 'mdi:chevron-right' : 'mdi:chevron-left'"
            size="20px"
          />
        </button>

        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="px-3 py-1 min-w-fit rounded my-auto bg-white text-gray-600 cursor-pointer dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform"
        >
          {{ tag.title }}
        </li>
        <button
          v-if="showNextButton"
          @click="moveNext"
          :class="isRTL ? '-left-6' : '-right-1'"
          class="absolute md:block hidden z-10 top-3 rounded p-2 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:bg-slate-200"
        >
          <Icon
            :name="isRTL ? 'mdi:chevron-left' : 'mdi:chevron-right'"
            size="20px"
          />
        </button>
      </ul>
    </section>
    <!-- <section
      class="bg-white dark:bg-gray-800 lg:h-60 h-96 rounded mt-2 mb-5 flex flex-col md:flex-row p-2 gap-2"
    >
      <div class="md:basis-2/3 h-1/2 md:h-full w-full">
        <nuxt-img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          fit="cover"
          class="rounded object-cover object-center h-full w-full"
          alt="TODO:later"
        />
      </div>

      <div
        class="max-w-sm md:basis-1/3 bg-white rounded dark:bg-gray-800 h-full w-full max-h-48"
      >
        <a href="#">
          <nuxt-img
            class="mx-auto rounded-t-lg h-1/2 object-cover object-center"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            fit="cover"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-sm my-2 font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <span class="text-xl mx-2 font-bold text-gray-900 dark:text-white"
              >$599</span
            >
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </section> -->
    <section class="">
      <div class="py-1 mx-auto">
        <div>
          <!-- search from base-layers -->
          <div
            v-if="search"
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <template v-for="(tag, index) in 12" :key="index">
              <SharedCardSkeleton />
            </template>
          </div>
          <div
            v-else
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <template v-for="(tag, index) in 4" :key="index">
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const tags = ref([]);

const { data, error } = await useApi("/v1/categories");
// const { data, error } = await useFetch(`${baseUrl}/v1/categories`);
tags.value = data.results;

const tagBox = ref<Ref | null>(null);

const { locale } = useI18n();
const rtlLangList = [
  "ar",
  "he",
  "fa",
  "ur",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
  "ur",
];
const isRTL = rtlLangList.includes(locale.value);

const showBackButton = ref(false);
const showNextButton = ref(true);
const moveBack = () => {
  if (isRTL ? tagBox.value.scrollLeft < 0 : tagBox.value.scrollLeft > 0) {
    if (isRTL) {
      tagBox.value.scrollLeft += 200;
    } else {
      tagBox.value.scrollLeft -= 200;
    }

    if (!showNextButton.value) {
      showNextButton.value = true;
    }
  } else {
    showBackButton.value = false;
  }
};
const moveNext = () => {
  if (
    tagBox.value.scrollLeft <
    tagBox.value.scrollWidth - tagBox.value.clientWidth
  ) {
    if (isRTL) {
      tagBox.value.scrollLeft -= 200;
    } else {
      tagBox.value.scrollLeft += 200;
    }

    if (!showBackButton.value) {
      showBackButton.value = true;
    }
  } else {
    showNextButton.value = false;
  }
};
</script>
