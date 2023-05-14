<template>
  <div class="description" v-html="htmlContent"></div>
</template>

<script>
export default {
    name:"Description",
    props:{
        htmlContent:{
            type:String,
            required:true,
        },

    }
}
</script>

<style scoped>
.description{
    font-size:1vw;
    color:var(--color-main);
}
.description .bold {
    font-weight: 700;
}
</style>