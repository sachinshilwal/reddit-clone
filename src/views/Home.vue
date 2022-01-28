<template>
  <div id="app">
    <Header @gotohome="page = 'Home'" />
    <div v-if="page == 'Home'" class="home__body">
      <div class="body__left">
        <CreatePost @change="page = 'Submit'" />
        <FilterTags :tags="tags" />
        <Posts v-for="(postData,index) in postsData" :key="index" :post= "postData"></Posts>
      </div>
      <div class="body__right">
        <TopGrowingCard />
        <Ads />
      </div>
    </div>
    <div v-else-if="page == 'Submit'">
      <SubmitPost />
    </div>
  </div>
</template>

<script>
import states from "../assets/data.json";
import Header from "../components/header";
import CreatePost from "../components/postCard";
import FilterTags from "../components/filterTags";
import Posts from "../components/posts.vue";
import TopGrowingCard from "../components/topGrowing.vue";
import Ads from "../components/ad.vue";
import SubmitPost from "../components/submitPost/submitPost.vue";
import axios from 'axios'

export default {
  name: "App",
  mounted(){
    axios.get('https://www.reddit.com/top.json?t=day')
    .then(response => {
      this.postsData = response.data.data.children.map(data => data.data)
      console.log(this.postsData)
    })
    .catch(err => console.log(err))
  },
  data() {
    return {
      page: "Home",
      postsData: '',
    };
  },
  computed: {
    tags() {
      return states.tags.map(item => {
        return item;
      });
    }
  },
  components: {
    Header,
    CreatePost,
    FilterTags,
    Posts,
    TopGrowingCard,
    Ads,
    SubmitPost
  }
};
</script>

<style>
.home__body {
    margin-top: 10vh;
    display: grid;
    height: auto;
    justify-content: center;
    grid-template-columns: 620px 320px;
    gap: 25px;
    background-color: black;
}

.home__body .body__left {
    height: auto;
}

.home__body .body__right {
    height: auto;
}

@media screen and (max-width:1000px) {
    .home__body {
        grid-template-columns: repeat(auto-fit, minmax(620px, 0.7fr));
    }
}

@media screen and (max-width: 650px) {
    .home__body {
        grid-template-columns: repeat(auto-fit, minmax(400px, 0.7fr));
    }
}

@media screen and (max-width: 450px) {
    .home__body {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
#app {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}
</style>
