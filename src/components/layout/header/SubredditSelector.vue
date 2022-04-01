<script setup lang="ts">
  import IconMdi from "@/components/icons/IconMdi.vue"
  import { mdiHome, mdiChevronDown } from "@mdi/js"
</script>

<template>
  <div
    class="subreddit-selector p-2 flex justify-between items-center w-60 border-on-hover cursor-pointer default-transition">
    <div class="flex justify-start items-center gap-2">
      <icon-mdi :icon="mdiHome" :size="24" />
      <span class="text-sm">Home</span>
    </div>
    <icon-mdi :icon="mdiChevronDown" :size="24" stroke="transparent" />
  </div>
</template>

<style scoped lang="postcss"></style>
