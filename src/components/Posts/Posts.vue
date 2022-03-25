<template>
<div class="post-comment" @click="postClicked">
  <div class="post" >
    <div class="left__vote__icons">
      <i :class="`fas fa-arrow-alt-up ${upVoted ? 'red' : ''}`" @click="increaseVoteCount()"></i>

      <span :class="`vote__count ${upVoted ? 'red' : downVoted ? 'blue' : ''}`">{{ upVote }}</span>

      <i :class="`fas fa-arrow-alt-down ${downVoted ? 'blue' : ''}`" @click="decreaseVoteCount()"></i>
    </div>
    <div class="post__content">
     <PostsHead :post="post" :subredditLogo="subredditLogo" :time="time"/>
      <div class="post__body" ref="ok">
        <div class="post__title">
          <strong>
            {{ post.title }}
            <span
              class="badge"
              :class="{ 'nothing': !post.link_flair_text }"
              :style="{ 'background-color': post.link_flair_background_color }"
              id="badge"
            >{{ post.link_flair_text }}</span>
          </strong>
        </div>
        <a :href="post.url" target="_blank">
        <div class="post__image"  ref="media">
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
        </a>
      </div>
      <div class="post__footer">
        <PostFooter :post="post" @getCommentTree="getComment" />
      </div>

    </div>
    
  </div>
  <div v-if="showComment">
    <Comments  v-for="(comment, index) in comments" :key="index" :comment="comment"  />
  </div>
  </div>
</template>

<script>
export const VOTE_COUNT = 15;
import 'video.js/dist/video-js.css'

import dayjs from 'dayjs'
import PostsHead from './PostsHead.vue'
import PostFooter from './PostFooter.vue'
import Comments from './Comments.vue'
import axiosrequest from '../../Services/AxiosRequest.js'

export default {
  components:{PostsHead, PostFooter,Comments},
  props: ['post'],
  async mounted() {
    console.log(this.post)
    this.roundUpVote()
    this.getAwards()
    this.mountMedia()
    this.formatTime(this.post.created)
    this.subredditIcon()

  },
  data() {
    return {
      VOTE_COUNT,
      voteCount: "",
      upVoted: false,
      downVoted: false,
      color: "green",
      subredditLogo: '',
      upVote: "",
      time: "",
      showComment: false,
      comments:[],

    };
  },
  methods: {
    postClicked(){
      console.log("clicked")
    },
    getComment(){
      this.showComment = !this.showComment
                axiosrequest.oauth(`https://oauth.reddit.com${this.post.permalink}`)
                .then(res => {
                    this.comments = res.data[1].data.children
                    console.log(this.comments)               
                    
                })
            },
    increaseVoteCount() {
      if (this.upVoted) {
        this.voteCount = "";
        return;
      }
      this.voteCount = VOTE_COUNT + 1;
    },
    decreaseVoteCount() {
      if (this.downVoted) {
        this.voteCount = "";
        return;
      }
      this.voteCount = VOTE_COUNT - 1;
    },
    roundUpVote() {
      if (this.post.ups > 10000) {
        let upVote = Math.round(this.post.ups / 1000)
        this.upVote = upVote + "k"
      }
      else {
        this.upVote = this.post.ups
      }
    },
    getAwards() {

    },
    formatTime(unixTime) {                                      //plugin to display time in "ago format"
      let relativeTime = require('dayjs/plugin/relativeTime')
      dayjs.extend(relativeTime)
      let now = dayjs.unix(unixTime)
      let fromNow = dayjs(now).fromNow()
      this.time = fromNow
    },
    subredditIcon() {

      axiosrequest.getdata(`https://www.reddit.com/r/${this.post.subreddit}/about.json`)
        .then(res => {
          if (res.data.data.icon_img !== null || res.data.data.icon_img !== "") {
            this.subredditLogo = res.data.data.icon_img
          }

          else {
            this.subredditLogo = res.data.data.header_img
          }

        })
        .catch(err => console.log(err))
    },
    mountMedia() {
      if (this.post.media != null) {
        if (this.post.media.reddit_video) {
          let video = document.createElement("VIDEO")
          // let audioSource = this.post.media.reddit_video.fallback_url
          // audioSource = audioSource.replace(/([_])\w+/, '_audio')                    //regex . fucking hard man ngl
          
          // let audioVideo = new Audio(audioSource)
          
          video.setAttribute("controls", '')
          
          video.setAttribute("src", this.post.media.reddit_video.fallback_url)
          video.setAttribute("preload", "auto")
          video.setAttribute("width", "400px")

          video.setAttribute("height", "400px")
          this.$refs.media.appendChild(video)
          
          // this.$refs.ok.addEventListener('click', function () {
          //   console.log('clicked')
          //   audioVideo.play()})
          //let videoTag = document.getElementById('audioVideo')
          
        }
        else {
          let img = document.createElement("IMG")
          img.setAttribute("src", this.post.media.oembed.thumbnail_url)
          this.$refs.media.appendChild(img)
        }

      }
      else if ( this.post.post_hint === "image") {
        let img = document.createElement("IMG")
        img.setAttribute("src", this.post.url)
        img.setAttribute("width", "350");
        img.setAttribute("height", "auto");
        this.$refs.media.appendChild(img)
      }
      else if(this.post.post_hint === "link"){
        let a = document.createElement("A")
        a.setAttribute("href", this.post.url)
        a.setAttribute("target", "_blank")
        a.innerText = "Link(external URL)"
        this.$refs.media.appendChild(a)
      }
    },
    resetMedia() {
      this.$refs.media.innerHTML = ""
    },
    closeComment(){
      this.showComment = false
    }
  },
  watch: {
    voteCount() {
      if (this.voteCount == this.VOTE_COUNT - 1) {
        this.upVoted = false;
        this.downVoted = true;
      } else if (this.voteCount == this.VOTE_COUNT + 1) {
        this.downVoted = false;
        this.upVoted = true;
      } else {
        this.downVoted = this.upVoted = false;
      }
    },
    async post() {
      this.resetMedia()
      this.roundUpVote()
      this.mountMedia()
      this.formatTime(this.post.created)
    }

  }
};
</script>

<style lang="scss">
.post {
  margin-top: 20px;
  height: auto;
  background-color: rgb(8, 7, 7);
  display: flex;
  align-items: left !important;
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #3b3b3b;
  color: white;
  &:hover {
    border: 1px solid #d3d1d1;
  }
}
.post-comment{
  &:hover {
    
  }
}

.left__vote__icons {
  width: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(8, 7, 7);
  padding: 10px;
}

.left__vote__icons i {
  font-size: 15px;
  opacity: 0.6;
  font-weight: bolder;
}

.left__vote__icons span {
  margin: 5px 0;
  font-size: 12px;
  font-weight: bold;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.post__content {
  padding: 5px 10px;
  display: flex, block;
  flex-direction: column;
  width: inherit;
  margin-bottom: 10px;
}

.post__head {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  a{
    color:white;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
  
}

.post__head  {
  margin-top: 0px !important;
  opacity: 1;
}
.subreddit-name{
  strong{
  margin: 0px !important;
  padding: 0px !important;
  opacity: 1;
  }
}

.post__head .post__details {
  opacity: 0.7;
  margin-top: 4px;
  a{
    color:white;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  .posted-time{
    .date-hover{
      display: none;
    }
    &::before{
      content: " ";
    }
    &:hover{
      .date-hover{
        display: block;
      }
    
    }
  }
}

.post__content .post__head img {
  height: 20px;
  border-radius: 10px;
  object-fit: contain;
}

.post__body .post__title .badge {
  padding: 3px 10px;
  background-color: red;
  font-size: 10px;
  color: black;
  border-radius: 30px;
}

.post__body .post__title {
  display: flex;
  align-items: left;
}

.post__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.post__footer {
  display: flex !important;
  color: #7e8081;
  background-color: rgb(8, 7, 7) !important;
  font-size: 12px;
  flex-direction: row !important;
  margin-top: 0px !important;
  height: auto !important;
  &:hover{
    cursor: pointer;
  }
}

.post__item {
  margin: 0 5px;
  display: flex;
  justify-content: space-evenly !important;
  align-items: center;
  font-weight: bold;
}
.post__item i {
  margin-right: 5px;
}

.nothing {
  display: none;
}
.fa-arrow-alt-up,
.fa-arrow-alt-down {
  cursor: pointer;
  font-weight: bold;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
}
</style>
