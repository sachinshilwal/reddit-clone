<script setup lang="ts">
  import HeaderLogo from "./HeaderLogo.vue"
  import SubredditSelector from "./SubredditSelector.vue"
</script>

<template>
  <header class="app-header border-b border-b-slate-500">
    <div
      class="container py-2 px-4 md:px-0 mx-auto flex justify-between items-center gap-4 text-slate-200">
      <header-logo />
      <subreddit-selector />
      <div class="app-search"></div>
      <div class="header-nav"></div>
      <button class="coin-button"></button>
      <div class="user"></div>
    </div>
  </header>
</template>

<style scoped lang="postcss"></style>
