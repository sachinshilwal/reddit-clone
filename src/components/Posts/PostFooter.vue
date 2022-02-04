<template>
    <div class="post__item">
      <div @click="$emit('getCommentTree',)">
          <i class="fas fa-comment-alt"></i>
          <span>{{ post.num_comments }} comments </span>
      </div>
    
          <i class="fas fa-gift"></i>
          <span>Give Award</span>
    </div>
          <i class="fas fa-share"></i>
          <span>Share</span>
      
        
          <i class="fas fa-bookmark"></i>
          <span>Save</span>
        
        <div class="post__item">
          <i class="fas fa-ellipsis-h"></i>
        
        <div class="upvote-ratio">
          <span>{{ post.upvote_ratio * 100 }}% upvoted</span>
        </div>
    </div>
        
</template>
<script>
    export default {
        props: ['post'],
        emits: ['getCommentTree'],
       
        data(){
          return{
            comments: [],
            showComment: false,
          }
        },
    }
</script>

<style lang="scss">
span::after{
  content: " " !important;
}
</style>