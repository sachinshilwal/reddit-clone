<template>
    <a
        href="https://www.reddit.com/api/v1/authorize?client_id=v286U8VEQCtiLoEDHaxnGQ&response_type=code&state=VaS6oxHSm1kRnAIb0dAX5nd-abRe6w&redirect_uri=http://localhost:8080/login&duration=permanent&scope=identity+edit+flair+history+modconfig+modflair+modlog+modposts+modwiki+mysubreddits+privatemessages+read+report+save+submit+subscribe+vote+wikiedit+wikiread"
        target="_blank" 
    >Sign In</a>
</template>
<script>

export default {
    data(){
        return{
            gotBearerToken: false,
            bearerToken: '',
        }
    },
    mounted() {
        
    },
    methods: {
       
        }
    }



</script>