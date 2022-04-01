<script setup lang="ts">
  import { RouterView } from "vue-router"
  import AppHeader from "@/components/layout/header/AppHeader.vue"
</script>

<template>
  <div class="min-h-screen grid app-container">
    <app-header />
    <RouterView />
  </div>
</template>

<style>
  @import "@/assets/base.css";

  .app-container {
    grid-template-rows: auto 1fr;
  }
</style>
