<script setup lang="ts">
  import { computed, ref } from "vue"
  import { useMainStore } from "@/stores/main"
  import { onClickOutside } from "@vueuse/core"
  const mainStore = useMainStore()
  const menu = ref()

  const headerMenuClasses = computed(() => {
    const classes = ["header-menu", "default-border", "default-padding"]
    if (mainStore.isMenuOpen) classes.push("open")
    return classes.join(" ").trim()
  })
  onClickOutside(menu, () => mainStore.setMenuOpen(false))
</script>

<template>
  <div :class="headerMenuClasses" ref="menu">some menu here</div>
</template>

<style scoped lang="postcss">
  .header-menu {
    @apply absolute top-full right-0;
    @apply -translate-y-5 opacity-0;
    @apply transition-all duration-200 ease-in-out;
    @apply pointer-events-none;
    @apply z-10;
    @apply bg-medium;

    &.open {
      @apply pointer-events-auto;
      @apply translate-y-1 opacity-100;
    }
  }
</style>
