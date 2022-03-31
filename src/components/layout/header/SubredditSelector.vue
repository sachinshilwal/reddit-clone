<script setup lang="ts">
  import IconMdi from "@/components/icons/IconMdi.vue"
  import { mdiHome, mdiChevronDown } from "@mdi/js"
</script>

<template>
  <div
    class="subreddit-selector p-2 flex justify-between items-center w-60 border border-transparent hover:border-slate-500 rounded cursor-pointer">
    <div class="flex justify-start items-center gap-2">
      <icon-mdi :icon="mdiHome" :size="24" />
      <span class="text-lg">Home</span>
    </div>
    <icon-mdi :icon="mdiChevronDown" :size="24" stroke="transparent" />
  </div>
</template>

<style scoped lang="postcss">
  /* .subreddit-selector .input__section__left span {
    margin: 0 5px;
  }

  .subreddit-selector,
  .search__bar input {
    margin-right: 10px;
    border: none;
    width: 250px;
    height: 5vh;
  }

  .subreddit-selector {
    padding: 10px;
    display: flex;
    font-size: 13px;
    align-items: center;
    flex-shrink: 1;
    justify-content: space-between;
  } */
</style>
