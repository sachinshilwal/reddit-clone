<template>
   <div>
        <div class="profile__details" >
        <img :src="infos.icon_img" height="31.2" width="31.2" alt="">
        <div class="user__profile">
          <label>{{infos.name}}  </label>
          <span class="karma__details" >
            <i class="fas fa-cog"></i>
          <div>{{prettyKarma}} karma</div>

          </span>
        </div>
      </div>
   </div>
</template>

<script>

    export default{
      data(){
        return{
          prettyKarma: ''
        }
      },
        computed:{
          infos(){
            return this.$store.state.user
          }
        },
        watch:{
          infos(){
            if(this.infos.total_karma > 10000 && this.infos.total_karma < 100000){
              this.prettyKarma = (this.infos.total_karma / 1000).toFixed(1) + 'k'
            }
            else if(this.infos.total_karma > 100000){
              this.prettyKarma = (this.infos.total_karma / 1000000).toFixed(1) + 'M'
            }
            
            else{
              this.prettyKarma = this.infos.total_karma
            }
            }
          }
        }

    
</script>
<style>

  .karma__details{
    display: flex !important;
    flex-direction: column !important;
    
    
  }
</style>