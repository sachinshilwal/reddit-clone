<template>
<span><img :src="awardIcon" > <span style="margin-top: -12px;">{{award.count}}</span> </span>
  
</template>

<script>
export default {
    props:['award'],
    mounted(){
        
        
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