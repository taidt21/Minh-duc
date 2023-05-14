<template>
  <div class="box">
    <div class="box-icon">
        <img :src="src" alt="box">
    </div>
    <div class="box-icon-title">{{title}}</div>
    <div class="box-icon-description">{{Description}}</div>
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        title:{
            type:String,

        },
        Description:{
            type:String,
        }

    },

}
</script>

<style scoped>
.box-icon img{
    width: 5vw;
    height: 5vw;
    object-fit: contain;
}
.box-icon-title {
    font-size: 1.125vw;
    font-weight: 800;
    color: var(--color-main);
    margin-top: 0.6875vw;
    margin-bottom: 0.6875vw;
}
.box-icon-description{
    font-size: 1vw;
    font-weight: 500;
    color: var(--color-main);
}
.box{
   width: 14.499999999999998vw;
    text-align: center;
    
}
</style>