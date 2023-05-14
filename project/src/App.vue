<script setup>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
document.title = 'Minh Đức';
</script>

<template>
 
    <Header></Header>
    
    <router-view></router-view>

    <Footer></Footer>
</template>

<style scoped>

</style>
