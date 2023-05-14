<template>
  <banner-subpages banner="../../../src/assets/img/bannerrrrr.jpg" namePage="Tin tức & sự kiện" tag="h1" title="Khám phá 
  kiến thức mới 
  cùng Minh Đức Tax"></banner-subpages>
  <section class="section-2">
    <div class="container">
        <div class="section-2_col-1">
            <h1>{{post.title}}</h1>
        </div>
        <div class="section-2_col-2"></div>
    </div>
  </section>
</template>

<script setup>
import BannerSubpages from '../BannerSubpages.vue';
import { ref,onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; 


const post = ref({}); 

const route = useRoute();
const getPostData = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos/${route.params.id}`);
    post.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
onMounted(() =>{
    getPostData()
})
    
</script>

<style>

</style>