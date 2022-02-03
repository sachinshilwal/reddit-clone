<template>
  <div class="post">
    
    <div class="left__vote__icons">
      <i :class="`fas fa-arrow-alt-up ${upVoted ? 'red' : ''}`" @click="increaseVoteCount()"></i>

      <span :class="`vote__count ${upVoted ? 'red' : downVoted ? 'blue' : ''}`">{{ upVote }}</span>

      <i :class="`fas fa-arrow-alt-down ${downVoted ? 'blue' : ''}`" @click="decreaseVoteCount()"></i>
    </div>
    <div class="post__content">
     <PostsHead :post="post" :subredditLogo="subredditLogo" :time="time"/>
      <div class="post__body">
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
        <div class="post__image" id="media" ref="media">
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
      <div class="post__footer">
        <PostFooter :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export const VOTE_COUNT = 15;

import dayjs from 'dayjs'
import PostsHead from './PostsHead.vue'
import PostFooter from './PostFooter.vue'
import axiosrequest from '../../Services/AxiosRequest.js'

export default {
  components:{PostsHead, PostFooter},
  props: ['post'],
  async mounted() {

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

    };
  },
  methods: {
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
          video.setAttribute("controls", '')
          video.setAttribute("src", this.post.media.reddit_video.fallback_url)
          video.setAttribute("preload", "auto")
          video.setAttribute("width", "500px")
          video.setAttribute("height", "500px")
          this.$refs.media.appendChild(video)
        }
        else {
          let img = document.createElement("IMG")
          img.setAttribute("src", this.post.media.oembed.thumbnail_url)
          this.$refs.media.appendChild(img)
        }

      }
      else if (this.post.media == null) {
        let img = document.createElement("IMG")
        img.setAttribute("src", this.post.url)
        img.setAttribute("width", "500");
        img.setAttribute("height", "auto");
        this.$refs.media.appendChild(img)
      }
    },
    resetMedia() {
      this.$refs.media.innerHTML = ""
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
  background-color: rgb(37, 36, 36);
  display: flex;
  align-items: left !important;
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  overflow-y: scroll;
  border: 1px solid #3b3b3b;
  color: white;
  &:hover {
    border: 1px solid #d3d1d1;
  }
}

.post:hover {
  border: 1px solid rgb(153, 152, 152);
}

.left__vote__icons {
  width: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 36, 36);
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
  display: flex;
  color: #7e8081;
  background-color: rgb(37, 36, 36) !important;
  font-size: 12px;
  justify-content: flex-start;
  flex-direction: row !important;
  margin-top: 0px !important;
  height: auto !important;
}

.post__item {
  margin: 0 5px;
  display: flex;
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
