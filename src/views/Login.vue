<template>
<div>you will be redirected shortly, if not please close this tab manually</div>
    
</template>

<script>
    export default {
        created(){
            this.getInfo()
            
        },
        methods:{
         async   getInfo(){
                if (this.$route.query.code && this.$route.query.state) {
                let axios = require('axios');
                 let qs = require('qs');
                 let data = qs.stringify({
                    'grant_type': 'authorization_code',
                    'code': `${this.$route.query.code}`,
                    'redirect_uri': 'http://localhost:8080'
                });
                let  config = {
                    method: 'post',
                    url: 'https://www.reddit.com/api/v1/access_token',
                    headers: {
                        'Authorization': 'Basic djI4NlU4VkVRQ3RpTG9FREhheG5HUTpWYVM2b3hIU20xa1JuQUliMGRBWDVuZC1hYlJlNnc=',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': 'csv=2; edgebucket=s1NxhNpboePdOeyY0J; loid=0000000000cbippo4k.2.1621917136574.Z0FBQUFBQmg5akRDZEVnb3BEWEp2RThIQ0k5OFcydGI0QVdJRlZBWlR3ZGdsODc2U0I3QlhYdDVKd3dXWkVGWUUtUnZjdmt2elVkbjVUcDQ0Z2RUaDhVSlA2Vk9abms4aHVFYkJoTUp0WERKMVFUS1pKT2VtZ1RYcDZlMk1hd081MzBOWC0tdEZjeEE; token_v2=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDMyODk0OTcsInN1YiI6Ii1GTk1iUWdKVXE0ZDNWSmM4REM3Z2l3Q1RWRkF4ZWciLCJsb2dnZWRJbiI6ZmFsc2UsInNjb3BlcyI6WyIqIiwiZW1haWwiLCJwaWkiXX0.k3seK7WzeR5BTPieZFoIODMFd6EqxvO2LVrY4jR9_bQ'
                    },
                    data: data
                };

               await axios(config)
                    .then( (response) => {
                        console.log(response.data)
                        this.$store.dispatch('login', response.data)
                        this.$store.commit('REFRESH')
                        
                        
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
            }
        }
        
    }
</script>

<style scoped>
 div{
     color: green;
 }
</style>