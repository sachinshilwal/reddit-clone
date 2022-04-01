<script setup lang="ts">
  import IconAppLogo from "@/components/icons/IconAppLogo.vue"
  const goHome = () => {
    console.log("Refresh the page")
  }
</script>

<template>
  <div class="flex justify-start items-center gap-2" @click="goHome">
    <icon-app-logo />
    <span class="text-2xl">reddit</span>
  </div>
</template>

<style scoped lang="postcss">
  .app-logo {
    width: 32px;
  }
</style>
