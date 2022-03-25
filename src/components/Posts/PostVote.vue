<template>
  <i :class="`fas fa-arrow-alt-up ${upVoted ? 'red' : ''}`" @click="increaseVoteCount()"></i>

      <span :class="`vote__count ${upVoted ? 'red' : downVoted ? 'blue' : ''}`">{{ upVote }}</span>

      <i :class="`fas fa-arrow-alt-down ${downVoted ? 'blue' : ''}`" @click="decreaseVoteCount()"></i>
</template>

<script>
export const VOTE_COUNT = 15;
export default {
  props: ["upVote"],
  data() {
    return {
      VOTE_COUNT,
      upVoted: false,
      downVoted: false,
      voteCount: "",
      isLoggedIn: this.$store.state.isLoggedIn,
    };
  },
  methods: {
    increaseVoteCount() {
      console.log(this.$store.state.isLoggedIn);
      if (this.isLoggedIn) {
        if (this.upVoted) {
          this.voteCount = "";
          return;
        }
        this.voteCount = VOTE_COUNT + 1;
      }
    },
    decreaseVoteCount() {
      if (this.isLoggedIn) {
        if (this.downVoted) {
          this.voteCount = "";
          return;
        }
        this.voteCount = VOTE_COUNT - 1;
      }
    },
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