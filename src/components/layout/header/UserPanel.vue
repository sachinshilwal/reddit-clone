<script setup lang="ts">
  import AppButton from "@/components/layout/AppButton.vue"
  import IconMdi from "@/components/icons/IconMdi.vue"
  import { mdiAccount, mdiChevronDown } from "@mdi/js"
  import { useMainStore } from "@/stores/main"
  const mainStore = useMainStore()

  const onClickHandler = () => {
    console.log("click")
  }
  const onProfileClick = () => {
    console.log("open nav")
    mainStore.setMenuOpen(!mainStore.isMenuOpen)
  }
</script>

<template>
  <div class="flex justify-end items-center gap-2 relative">
    <div class="flex justify-center items-center gap-2">
      <app-button @click="onClickHandler">Log In</app-button>
      <app-button @click="onClickHandler">Sign Up</app-button>
    </div>
    <div
      class="flex justify-between items-center gap-2 border-on-hover cursor-pointer default-padding default-transition"
      @click="onProfileClick">
      <div class="w-10 flex justify-center items-center">
        <icon-mdi :icon="mdiAccount" :size="25" />
      </div>
      <icon-mdi :icon="mdiChevronDown" />
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
