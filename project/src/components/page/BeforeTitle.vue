<template>
  <div class="before-title">{{title}}</div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
.before-title{
    margin-bottom: 0.9375vw;
    font-size:1.125vw;
    color: var(--color-orange);
    font-weight: 700;
}
</style>