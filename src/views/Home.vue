<template>
  <div id="app">
    <Header @gotohome="page = 'Home'" />
    <div v-if="page == 'Home'" class="home__body">
      <div class="body__left">
        <CreatePost @change="page = 'Submit'" />
        <FilterTags :tags="tags" @selected="changeFilter" />
        <Posts v-for="(postData, index) in postsData" :key="index" :post="postData"></Posts>
        <MorePosts :post="postsData" ></MorePosts>
      </div>
      <div class="body__right">
        <!-- <TopGrowingCard />
        <Ads /> -->
      </div>
    </div>
    <div v-else-if="page == 'Submit'">
      <SubmitPost />
    </div>
  </div>
</template>

<script>
import states from "../assets/data.json";
import Header from "../components/Header";
import CreatePost from "../components/PostCard";
import FilterTags from "../components/FilterTags";
import Posts from "../components/Posts/Posts";
import MorePosts from "../components/Posts/MorePosts";
// import TopGrowingCard from "../components/topGrowing.vue";
// import Ads from "../components/ad.vue";
import SubmitPost from "../components/submitPost/SubmitPost";
import axiosrequest from '../Services/AxiosRequest.js'
import { mapGetters } from 'vuex'


export default {
  name: "App",
  async mounted() {
     this.$router.replace('/top.json?t=day', { silent: true })
    await axiosrequest.getdata('https://www.reddit.com/top.json?t=day')
      .then(response => {
        this.postsData = response.data.data.children.map(data => data.data)
        console.log(this.postsData)
        
      })
      .catch(err => console.log(err))
     this.checkRoute()
  },
  data() {
    return {
      page: "Home",
      postsData: '',
      filter: '',
    };
  },
  methods: {
    changeFilter(val) {
      this.filter = val
    },
    checkRoute(){
      if(this.$route.params.filter == 'top'){
        this.filter = 'top'
      }
      else if(this.$route.params.filter == 'new'){
        this.filter = 'new'
      }
      },
    },
  computed: {
    tags() {
      return states.tags.map(item => {
        return item;
      });
    },
    ...mapGetters({
        myState: 'getMyState'
    })
    
  },
  watch: {
    myState(){                                //refresh window after getting the login details 
      console.log('refresh')
       location.reload()
      },
    filter(val) {
      this.$store.commit('FILTER_CHANGED')
      if (val == 'Top') {
        this.$router.replace('/top.json?t=day', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/top.json?t=day')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
          
          })
          .catch(err => console.log(err))
      }
      else if (val == 'New') {
        this.$router.replace('/new', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/new.json')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
            console.log(this.postsData)
            
          })
          .catch(err => console.log(err))
      }
      else if (val == 'Hot') {
        this.$router.replace('/hot', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/hot.json')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
          
          })
          .catch(err => console.log(err))
      }
      else if (val == 'Best') {
        this.$router.replace('/best', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/best.json')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
           
          })
          .catch(err => console.log(err))
      }
      else if (val == 'Controversial') {
        this.$router.replace('/controversial', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/controversial.json')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
           
          })
          .catch(err => console.log(err))
      }
      else if (val == 'Rising') {
        this.$router.replace('/rising', { silent: true })
        axiosrequest.getdata('https://www.reddit.com/rising.json')
          .then(response => {
            this.postsData = response.data.data.children.map(data => data.data)
            
          })
          .catch(err => console.log(err))
      }
    }
  },
  components: {
    Header,
    CreatePost,
    FilterTags,
    Posts,
    MorePosts,
    // TopGrowingCard,
    // Ads,
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
  grid-template-columns: 720px 260px;
  gap: 25px;
  background-color: black;
}

.home__body .body__left {
  height: auto;
}

.home__body .body__right {
  height: auto;
}

@media screen and (max-width: 1000px) {
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
