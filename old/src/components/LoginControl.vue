<template>
    <a
        :href="'https://www.reddit.com/api/v1/authorize?client_id='+env.VUE_APP_client_id+'&response_type=code&state='+env.VUE_APP_state+'&redirect_uri='+env.VUE_APP_redirecturi+'&duration=permanent&scope=identity+edit+flair+history+modconfig+modflair+modlog+modposts+modwiki+mysubreddits+privatemessages+read+report+save+submit+subscribe+vote+wikiedit+wikiread'"
        target="_blank" 
    >Sign In</a>
</template>
<script>
import 'dotenv/config'
export default {
    
    data(){
        return{
            gotBearerToken: false,
            bearerToken: '',
            env: process.env
        }
    },
    mounted() {
        console.log(this.env)
    },
    methods: {
       
        }
    }



</script>