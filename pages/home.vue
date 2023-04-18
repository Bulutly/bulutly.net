<template>
  <div class="">
    <section class="tag-box">
      <ul
        class="my-4 flex flex-row overflow-x-scroll content-container space-x-4"
      >
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="px-3 py-1 rounded-xl my-auto bg-white text-gray-600 cursor-pointer"
        >
          {{ tag }}
        </li>
      </ul>
    </section>

    <section class="">
      <div class="py-8 mx-auto max-w-screen-xl">
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
                class="mx-8 bg-white w-11 h-11 flex flex-row justify-center rounded-2xl absolute -bottom-1"
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
              <p class="text-gray-400 text-xs">22M views . 3 years ago</p>
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
  "google cloud",
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
  "jenkins",
  "travis",
  "circleci",
  "heroku",
  "netlify",
  "vercel",
  "digital ocean",
  "vultr",
  "linode",
  "cloudflare",
  "nginx",
]);
</script>
<style>
.tag-box {
  max-width: calc(75vw);
}
</style>
