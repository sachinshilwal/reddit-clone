<template>
    <div class="post__item">
      <div @click="$emit('getCommentTree',)">
          <i class="fas fa-comment-alt"></i>
          <span>{{ post.num_comments }} comments </span>
      </div>
    
         
    </div>
    <div @click="copyToClipboard" title="copy to clipboard"> <i class="fas fa-share"></i>
          <span>  Share</span>
          </div>
         
      
        <div><i class="fas fa-bookmark"></i>
          <span>  Save</span></div>
          
        
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
        methods:{
          copyToClipboard(){
            navigator.clipboard.writeText(`https://www.reddit.com${this.post.permalink}`)
          },
        }
    }
</script>

<style lang="scss">

</style>