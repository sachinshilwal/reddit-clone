<template>
    <div>
       <Posts v-for="(post, index) in morePosts" :key="index" :post="post" />
        <h4 @click="loadMore">More posts</h4> </div>
</template>
<script>
import axiosrequest from '../../Services/AxiosRequest.js'
import Posts from './Posts.vue'

export default{
    props:['post'],
    components:{Posts},
    data(){
        return{
         morePosts: ''
        }
    },
    methods:{
       async loadMore(){
            console.log(this.$route.fullPath)
            if(this.morePosts === ''){
                await axiosrequest.getdata('https://www.reddit.com/'+this.$route.fullPath+'&after='+this.post[this.post.length-1].name)
                .then(response => {
                    this.morePosts = response.data.data.children.map(data => data.data)
                })
            .catch(err => console.log(err))}
            else{
                await axiosrequest.getdata('https://www.reddit.com/'+this.$route.fullPath+'&after='+this.morePosts[this.morePosts.length-1].name)
                .then(response => {
                    this.morePosts = this.morePosts.concat(response.data.data.children.map(data => data.data))
                })
            }
        }
    },
    watch:{
        '$store.state.filterChanged': function(val){
            console.log(val)
            this.morePosts = ''
        }
    }
}
</script>