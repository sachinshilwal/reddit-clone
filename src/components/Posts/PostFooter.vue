<template>
    <div class="post__item">
          <i class="fas fa-comment-alt"></i>
          <span>{{ post.num_comments }} comments</span>
        </div>
        <div class="post__item">
          <i class="fas fa-gift"></i>
          <span>Give Award</span>
        </div>
        <div class="post__item">
          <i class="fas fa-share"></i>
          <span>Share</span>
        </div>
        <div class="post__item">
          <i class="fas fa-bookmark"></i>
          <span>Save</span>
        </div>
        <div class="post__item">
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div class="upvote-ratio">
          <span>{{ post.upvote_ratio * 100 }}% upvoted</span>
        </div>
</template>
<script>
    export default {
        props: ['post'],
    }
</script>