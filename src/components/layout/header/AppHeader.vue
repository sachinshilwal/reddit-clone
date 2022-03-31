<script setup lang="ts">
  import HeaderMenu from "@/components/layout/header-menu/HeaderMenu.vue"
  import HeaderLogo from "./HeaderLogo.vue"
  import SubredditSelector from "./SubredditSelector.vue"
  import UserPanel from "./UserPanel.vue"
</script>

<template>
  <header class="app-header border-b border-b-gray-dark bg-medium relative">
    <div
      class="py-1 px-6 flex justify-between items-center gap-4 text-gray-light">
      <header-logo />
      <subreddit-selector />
      <div class="app-search"></div>
      <div class="header-nav"></div>
      <button class="coin-button"></button>
      <user-panel />
    </div>
    <header-menu />
  </header>
</template>

<style scoped lang="postcss"></style>
