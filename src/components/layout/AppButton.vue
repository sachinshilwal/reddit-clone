<script setup lang="ts">
  interface Props {
    type?: "button" | "submit"
    disabled?: boolean
  }
  withDefaults(defineProps<Props>(), {
    type: "button",
    disabled: false
  })
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="default-border rounded-3xl inline-flex justify-center items-center gap-2 px-4 py-1 hover:bg-gray-dark default-transition">
    <slot />
  </button>
</template>

<style scoped lang="postcss"></style>
