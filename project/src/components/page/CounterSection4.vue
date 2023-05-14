<template>
    <div class="counter-item">
  <counter :max="maxCount"></counter>
  <p class="description">{{des}}</p>
</div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: { Counter },
props:{
    maxCount:{
        type:String,
        required:true,
    },
    des:{
        type:String,

    },
}
}
</script>

<style scoped>
.description{
    font-size: 1vw;
    font-weight: 500;
    color: var(--color-main);
    margin-top: 1.375vw;
    max-width: 13.0625vw;
}
</style>