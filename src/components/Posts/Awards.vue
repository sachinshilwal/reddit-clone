<template>
<span><img :src="awardIcon" > {{award.count}} </span>
  
</template>

<script>
export default {
    props:['award'],
    mounted(){
        console.log(this.award)
        
    },
    data(){
        return{
            awardIcon: this.award.icon_url
        }
    }

}
</script>

<style scoped>
img{
    width: 16px;
    height: 16px;
}
</style>