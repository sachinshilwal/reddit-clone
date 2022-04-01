<script setup lang="ts">
  import { RouterView } from "vue-router"
  import AppHeader from "@/components/layout/header/AppHeader.vue"
</script>

<template>
  <app-header />
  <RouterView />
</template>

<style>
  @import "@/assets/base.css";
</style>
