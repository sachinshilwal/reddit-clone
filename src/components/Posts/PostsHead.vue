<template>
  <div class="post__head">
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
        <div class="post__details">
          <p>
            . Posted by
            <a
              :href="'https://www.reddit.com/user/' + post.author"
              
              target="_blank"
            >u/{{ post.author}} </a>
            <span class="posted-time">{{ time }}
               <!-- <span class="date-hover">{{new Date(post.created)}}</span> -->
            </span> {{ post.domain }}
          </p>
        </div>
      </div>   
</template>
<script>
    export default{
        props: ['post','subredditLogo','time'],
    }
</script>