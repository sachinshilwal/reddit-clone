<script setup lang="ts">
  import { onMounted, ref } from "vue"
  import axios from "axios"
  import PostsFeedItem from "./PostsFeedItem.vue"

  const posts = ref([])

  const fetchPosts = async () => {
    const baseUri = "https://www.reddit.com/top.json?t=day"
    const data = await axios.get(baseUri, {
      params: {}
    })
    console.log(data)

    return []
  }

  onMounted(() => {
    fetchPosts()
  })
</script>

<template>
  <div class="grid gap-4">
    <posts-feed-item v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<style scoped lang="postcss"></style>
