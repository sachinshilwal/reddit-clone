<template>

  <div v-if="showReply !== undefined" class= "replies">
      <div class="comment-header">
        <a :href="'https://reddit.com/user/'+reply.data.author" target="_blank"><span>{{reply.data.author}}</span></a>
        . {{time}}
        </div>
      <div style="padding-left:20px; margin-top:5px;">{{reply.data.body}}</div>
      </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props:['reply'],
  created(){
     
     console.log(this.showReply)
     this.formatTime(this.reply.data.created)
  },
  data()
  {
         return{time: "",
         upVote:'',
         showReply: this.reply.data.author
         
         }
            
        },
     methods:{
             formatTime(unixTime) {                                      //plugin to display time in "ago format"
                let relativeTime = require('dayjs/plugin/relativeTime')
                dayjs.extend(relativeTime)
                let now = dayjs.unix(unixTime)
                let fromNow = dayjs(now).fromNow()
                this.time = fromNow
                },
            }
 
}
</script>

<style scoped>
    .replies{
        padding-left: 30px;
        padding-bottom: 20px ;
        font-family: Noto Sans,Arial,sans-serif;
        font-size: 0.8em;
        color: white;
        padding-bottom: 20px;
    }
    .comments{
    padding: 8px;
    border-bottom: 1px solid #e6e6e6;
}
    div ,p{
        
        color: white;
        text-align: left;
        
    }
    .comment-header{
        font-size: 1em;
    }
    #comments{
        font-family: Noto Sans,Arial,sans-serif;
        font-size: 0.8em;
        color: white;
    }
    a{
        text-decoration: none;
    }
    .comment-buttom{
        font-size: 0.7em;
        color: #e6e6e6;
        text-align: left;
    }
    
</style>