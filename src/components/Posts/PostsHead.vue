<template>
  <div class="post__head">
    <span style="display:inline; white-space:nowarp">
        <a 
          :href="'https://www.reddit.com/r/' + post.subreddit"
          target="_blank"
        >
          <!-- here will be the subreddit icon if possible -->
          <span class="subreddit-logo"><img :src="subredditLogo" /></span>
          
          <span class="subreddit-name">
            <strong>r/{{ post.subreddit }}</strong>
          </span>
        </a>
    </span>
        <div class="post__details" style="display:inline; white-space:nowarp">
          <p>
            . Posted by
            <a
              :href="'https://www.reddit.com/user/' + post.author"
              
              target="_blank"
            >u/{{ post.author}} </a>
            <span class="posted-time">{{ time }}
               <!-- <span class="date-hover">{{new Date(post.created)}}</span> -->
            </span> <a style="color:green" :href="`${post.url}`" target="_blank" rel="noopener noreferrer">{{ post.domain }} &nbsp; </a> 
        
          </p>
          
        </div>
        <div><Awards v-for="(award , index) in post.all_awardings" :key="index" :award="award"/></div>
        
      </div>   
</template>
<script>
import Awards from './Awards'
    export default{
      components:{Awards},
      props: ['post','subredditLogo','time'],
      mounted(){
        
      }

    }
</script>
<style>
  .post__head{
    font-size: 0.8em;
  }
</style>