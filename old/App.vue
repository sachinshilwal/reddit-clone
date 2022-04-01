<template>
  <router-view />
  
</template>

<script>

import axiosrequest from './Services/AxiosRequest'


export default {
  data(){
    return{
      userinfo:'',
      local: ''
    }
  },
   async beforeCreate() {

    const userinfo = JSON.parse(localStorage.getItem('userinfo'))
    if (userinfo !== null && userinfo.access_token) {
      this.$store.dispatch('login', userinfo)
      this.$store.state.isLoggedIn = true

      if (this.$store.state.isLoggedIn) {
       await axiosrequest.oauth(`https://oauth.reddit.com/api/v1/me?raw_json=1`)
          .then(response => {
            console.log(response.data)
            this.userinfo = response.data
            this.$store.state.user = response.data
          })
          .catch(err => {

            // if (err.response) {
            //   // Request made and server responded
            //   console.log(err.response.data);
            //   console.log(err.response.status);
            //   console.log(err.response.headers);
            // } else if (err.request) {
            //   // The request was made but no response was received
            //   console.log(err.request);
            // } else {
            //   // Something happened in setting up the request that triggered an Error
            //   console.log('Error', err.message);
            // }
            if(err.response){
            if (err.response.status === 401 && this.$store.state.userinfo.refresh_token) {
              let axios = require('axios');
              let qs = require('qs');
              let data = qs.stringify({
                'grant_type': 'refresh_token',
                'refresh_token': '965446154084-L-YnCVQMHtWhilVFZInm4Gp9rmdysQ',
                'duration': 'permanent'
              });
              let config = {
                method: 'post',
                url: 'https://www.reddit.com/api/v1/access_token',
                headers: {
                  'Authorization': 'Basic djI4NlU4VkVRQ3RpTG9FREhheG5HUTpWYVM2b3hIU20xa1JuQUliMGRBWDVuZC1hYlJlNnc=',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Cookie': 'csv=2; edgebucket=s1NxhNpboePdOeyY0J; loid=0000000000cbippo4k.2.1621917136574.Z0FBQUFBQmg5akRDZEVnb3BEWEp2RThIQ0k5OFcydGI0QVdJRlZBWlR3ZGdsODc2U0I3QlhYdDVKd3dXWkVGWUUtUnZjdmt2elVkbjVUcDQ0Z2RUaDhVSlA2Vk9abms4aHVFYkJoTUp0WERKMVFUS1pKT2VtZ1RYcDZlMk1hd081MzBOWC0tdEZjeEE; session_tracker=7KJSDhxPExuPPbHa2T.0.1643733067967.Z0FBQUFBQmgtV0JMS3RSS0RtbHh3Zk9CMTJJUjlaemt4X1luR0xnZmtMTzQtZTZtWHJoMHRYdmZhME44UnBibTMxTlExaFBXZzR3bF81Z0RKSXA2MzBfUlFiR2hnYzFQVUdWVVI1SEF3eHB6bHJSc0VFaGpBU1Q2N1Z4OWE2ckpzbGpfdGNRaU53ZkE; token_v2=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDM3MzAzMzUsInN1YiI6Ii1VVWZyVmZNOVgxWUJxOTBqU0dHbDFVVDNvN0tXSXciLCJsb2dnZWRJbiI6ZmFsc2UsInNjb3BlcyI6WyIqIiwiZW1haWwiLCJwaWkiXX0.ul_rlNLUIRDt7EVcGDXKcyfb-iKpkCv38qJJoWqAc_M'
                },
                data: data
              };

              axios(config)
                .then( (response) =>{
                  console.log(response.data);
                  this.$store.dispatch('login', response.data)

                })
                .catch(function (error) {
                  console.log(error);
                });

            }
            }
            else{
              console.log(err)
            }


          })


      }
    }

  },
 
 

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
