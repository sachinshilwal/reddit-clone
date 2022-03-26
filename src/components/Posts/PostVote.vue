<template>
  <i :class="`fas fa-arrow-alt-up ${upVoted ? 'red' : ''}`" @click="increaseVoteCount()"></i>

      <span :class="`vote__count ${upVoted ? 'red' : downVoted ? 'blue' : ''}`">{{ upVote }}</span>

      <i :class="`fas fa-arrow-alt-down ${downVoted ? 'blue' : ''}`" @click="decreaseVoteCount()"></i>
</template>

<script>
import Axios from "../../Services/AxiosRequest.js";

export default {
  props: ["upVote", "post"],
  mounted() {
    this.voteStatus();
  },
 
  data() {
    return {
      upVoted: false,
      downVoted: false,

      voteCount: "",
      isLoggedIn: this.$store.state.isLoggedIn,
    };
  },
  methods: {
    voteStatus() {
      if (this.post.likes === true) {
        this.upVoted = true;
        this.downVoted = false;
      } else if (this.post.likes === false) {
        this.downVoted = true;
        this.upVoted = false;
      }
      else{
        this.upVoted = false
        this.downVoted = false
      }
    },
    increaseVoteCount() {
      
      if (this.isLoggedIn) {
        if(this.upVoted === false) {
          console.log(this.upVoted)
          this.upVoted = true;
          console.log(this.upVoted);
          this.downVoted = false;
          console.log('upvoted')
          Axios.Vote(
            `https://oauth.reddit.com/api/vote?raw_json=1&id=${this.post.name}&dir=1`
          ).then((res) => {
            console.log(res);
          });
          return;
        } else if (this.upVoted) {

          this.upVoted = false;
          console.log('unvoted')
          this.unVote();
          
          return;

        }
      }
    },
    decreaseVoteCount() {
      if (this.isLoggedIn) {
        if (!this.downVoted) {
          this.downVoted = true;
          this.upVoted = false;
          Axios.Vote(
            `https://oauth.reddit.com/api/vote?raw_json=1&id=${this.post.name}&dir=-1`
          ).then((res) => {
            console.log(res);
          });
          return;
        } else if (this.downVoted) {
          this.downVoted = false;
          this.unVote();
          return;
        }
      }
    },
    unVote() {
      if (this.isLoggedIn) {
        Axios.Vote(
          `https://oauth.reddit.com/api/vote?raw_json=1&id=${this.post.name}&dir=0`
        ).then((res) => {
          console.log(res);
        });
        return;
      }
    },
  },
  watch: {
    "$store.state.filterChanged": function (val) {
      console.log(val);

      this.upVoted = false;
      this.downVoted = false;
    },
  },
};
</script>

<style>
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
</style>