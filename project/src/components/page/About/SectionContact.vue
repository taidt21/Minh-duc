<template>
    <section class="section-8">
        <div class="container">
            <div class="section-8_col-1">
                <Title pageTitle="Bạn muốn đồng hành cùng  Minh Đức"></Title>
                <Button textBtn="Chi tiết tuyển dụng" to="/recruitment"></Button>
            </div>
            <div class="section-8_col-2">
                <div class="section-8_wrapper-image">
                    <img src="../../../assets/img/Home.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Title from '../Title.vue';
import Button from '../Button.vue';
</script>

<style scoped>
/*SECTION 8 */
.section-8{
    padding: 0 6.25vw;
    margin-top: 17.3125vw;
    margin-bottom: 9.4375vw;
}
.section-8 .container{
    display: flex;
    background-image: url('../../../assets/img/about66.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    justify-content: end;
    
}
.section-8_col-1{
    padding-top: 9.5vw;
    padding-bottom: 8.125vw;
    position: relative;
    right: -0.9875vw;
}
.section-8 .title{
    color: #fff;
    width: 37.25vw;
    text-align: center;
}
.section-8_col-2{
    position: relative;
    width: 46.1875vw;
}
.section-8_wrapper-image{
    position: absolute;
    right:-0.9875vw;
    bottom: 0;
    width: 46.1875vw;
    width: 47.125vw;
    display: flex;
}
.section-8_wrapper-image img {
    position: relative;
    z-index: 3;
}
.section-8_wrapper-image::before{
    content:"";
    height: 39.5625vw;
    background: var(--color-main);
    width: 30vw;
    position: absolute;
    bottom: 0;
    border-radius: 500px 500px 0px 0px;
    left: 10vw;
}
.section-8 .button {
    margin: auto;
    margin-top: 3.125vw;
}

</style>