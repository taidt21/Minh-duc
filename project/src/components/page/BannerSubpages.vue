<template>
  <section class="section-1">
    <div class="container">
        <div class="section-1_col-1">
            <div class="section-1_banner">
                <img :src="banner" alt="Minh Đức thuế">
            </div>
            <div class="section-1_bar-bottom"></div>
        </div>
        <div class="section-1_col-2">
            <div class="section-1_name-pages">
                <span class="name-page-1">Trang chủ</span>
                <span class="name-page-2">{{namePage}}</span>
            </div>
            <Title tag="h1" :pageTitle="title"></Title>
        </div>
    </div>
  </section>
</template>

<script  >
import Title from './Title.vue'
export default {
  components: { Title },
    props:{
        namePage:{
            type:String,
        },
        banner:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        }
    }
    }

</script>

<style scoped>
.section-1{
    padding-top:  6.5625vw;
    background-color: 
    #FDF6ED;
}
.section-1_banner{
    width: 49.0625vw;
    height: 28.249999999999996vw;

}
    .section-1_banner img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .section-1_bar-bottom{
        height: 3.4375000000000004vw;
        width: 41.75vw;
        background-color: var(--color-orange);
    }
    .section-1_col-2{
        padding-bottom: 6.3125vw;
        width: 39.625vw;
    }
    .container{
        display: flex;
        gap:5vw;
        align-items: end;
    }
    
    .section-1_name-pages{
        display: flex;
        font-size: 1vw;
        color: var(--color-orange);
        gap:2vw;
        margin-bottom: 1.5vw;
    }
    .name-page-2{
        font-weight: 700;
    }
    .name-page-1{
        display: flex;
        align-items: center;
        
    }
    .name-page-1::after{
        content: "";
        display: block;
        width: 0.375vw;
        background-image: url(../../assets/img/arrow-right.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 0.75vw;
        position: relative;
        right: -0.9vw;
    }
</style>