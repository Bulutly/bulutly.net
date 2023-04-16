<template>
    <button :disabled="isDisabled"
        class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-400 disabled:cursor-not-allowed">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    isDisabled: {
        type: Boolean
    }
})
</script>