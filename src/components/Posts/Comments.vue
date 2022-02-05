<template>
<div class="comments">
    <div class="comment-header">
        <a :href="'https://reddit.com/user/'+comment.data.author" target="_blank"><span>{{comment.data.author}}</span></a>
        . {{time}}
    </div>
    <p ref="comment" id="comments">  
    </p>
    <div class="comment-buttom">{{upVote}} vote</div>
</div>
</template>
<script>
import dayjs from 'dayjs'
    export default {
        props: ['comment'],
        data(){
            return{time: "",
                  upVote:'',}
            
        },
        mounted() {
            this.$refs.comment.innerHTML = this.comment.data.body
            this.formatTime(this.comment.data.created)
            this.roundUpVote()
            
        },
        methods:{
             formatTime(unixTime) {                                      //plugin to display time in "ago format"
                let relativeTime = require('dayjs/plugin/relativeTime')
                dayjs.extend(relativeTime)
                let now = dayjs.unix(unixTime)
                let fromNow = dayjs(now).fromNow()
                this.time = fromNow
                },
            roundUpVote() {
                    if (this.comment.data.ups > 10000) {
                        let upVote = Math.round(this.comment.data.ups / 1000)
                        this.upVote = upVote + "k"
                    }
                    else {
                        this.upVote = this.comment.data.ups
      }
    },
        }
    }
</script>
<style scoped>
.comments{
    padding: 8px;
    border-bottom: 1px solid #e6e6e6;
}
    div ,p{
        
        color: white;
        text-align: left;
        
    }
    .comment-header{
        font-size: 0.7em;
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
