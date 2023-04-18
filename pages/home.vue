<template>
  <div class="">
    <section class="tag-box mx-4 py-4 relative">
      <ul
        class="my-1 flex flex-row content-container space-x-4 text-sm font-semibold text-gray-600 dark:text-gray-300 scroll-smooth overflow-x-scroll lg:overflow-x-hidden"
        ref="tagBox"
      >
        <button
          v-if="showBackButton"
          @click="moveBack"
          class="absolute md:block hidden z-10 -left-4 top-3 rounded-xl py-2 px-3 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <Icon name="mdi:arrow-left-thick" size="20px" c />
        </button>

        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="px-3 py-1 rounded-xl my-auto bg-white text-gray-600 cursor-pointer dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          {{ tag }}
        </li>
        <button
          v-if="showNextButton"
          @click="moveNext"
          class="absolute md:block hidden z-10 -right-4 top-3 rounded-xl py-2 px-3 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <Icon name="mdi:arrow-right-thick" />
        </button>
      </ul>
    </section>

    <section class="">
      <div class="py-1 mx-auto max-w-screen-xl">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="(tag, index) in 12"
            :key="index"
            class="bg-white rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <a href="#" class="relative">
              <img
                class="p-4 w-full rounded-3xl h-44 object-cover"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos"
              />
              <div
                class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded-2xl absolute -bottom-1"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  class="w-10 h-10 rounded-2xl my-auto"
                  alt=""
                />
              </div>
            </a>
            <div class="px-5 pb-0 my-2">
              <span class="text-xs font-bold dark:text-gray-100"
                >Get started with the range component to receive ...
              </span>
              <p class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light">
                Jese drives the technical strategy of ...
              </p>
              <p class="text-gray-400 text-xs pb-2">22M views . 3 years ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const tags = ref([
  "All",
  "vue",
  "react",
  "angular",
  "node",
  "javascript",
  "typescript",
  "css",
  "html",
  "java",
  "python",
  "c#",
  "c++",
  "c",
  "php",
  "ruby",
  "go",
  "swift",
  "kotlin",
  "rust",
  "scala",
  "dart",
  "flutter",
  "android",
  "ios",
  "windows",
  "linux",
  "macos",
  "ubuntu",
  "debian",
  "centos",
  "fedora",
  "arch",
  "docker",
  "kubernetes",
  "aws",
  "azure",
  "firebase",
  "mongodb",
  "mysql",
  "postgresql",
  "redis",
  "graphql",
  "rest",
  "git",
  "github",
  "gitlab",
  "bitbucket",

]);

const tagBox = ref<Ref | null>(null);
const showBackButton = ref(false);
const showNextButton = ref(true);

const moveBack = () => {
  if (tagBox.value.scrollLeft > 0) {
    tagBox.value.scrollLeft -= 200;
    tagBox.value.scrollBeh;
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
    tagBox.value.scrollLeft += 200;
    if (!showBackButton.value) {
      showBackButton.value = true;
    }
  } else {
    showNextButton.value = false;
  }
};
</script>
<style>
.tag-box {
  max-width: calc(70vw);
}
</style>
