<template>
    <input
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com" required :value="modelValue" @input="onInput($event)">
    <!-- <p class="mt-2 text-sm text-green-600 dark:text-green-500">
        <span class="font-medium">Alright!</span> Username available!
    </p> -->
</template>

<script setup lang="ts">
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event | any) => {
    emit('update:modelValue', event.target.value)
}
</script>