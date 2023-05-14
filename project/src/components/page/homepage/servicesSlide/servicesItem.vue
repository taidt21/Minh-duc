<template>
  <div class="slide-item-wrapper" :style="{ 'background-image': 'url(' + image + ')' }">
    <div class="wrapper">
        <h3 class="name-service">
            {{ name }}
        </h3>
        <div class="hide">
            <p class="description-service">{{description}}</p>
            <router-link :to="url"  class="button-read-more">
                <span class="icon">
                    <img src="../../../../assets/img/arrowBtn.png" alt="arrow">
                </span>
                <span class="button-text">Xem chi tiết</span>
            </router-link>
        </div>
    </div>

  </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,

        },
        image:{
            type:String,
        },
        description:{
            type:String
        },
        url:{
            type:String
        }
    },
    
}
</script>

<style scoped>
.slide-item-wrapper{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 31.25vw;
    display: flex;
    align-items: end;
    padding-bottom: 1.6875vw;
    padding-left: 2.3125vw;
    padding-right: 5.4375vw;
    overflow: hidden;
    
}
.slide-item-wrapper::after{
    content:"";
    background: linear-gradient(180deg, rgba(255, 168, 0, 0.54) 0%, #004B88 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    pointer-events: none;
    z-index: 0;
}
.slide-item-wrapper .hide{
    max-height: 0;
    overflow: hidden;
    transition:4s;
}

.slide-item-wrapper:hover .hide {
    max-height: 1000px;
}
.wrapper {
    position: relative;
    z-index: 3;
}
.name-service {
    font-weight: 700;
    font-size: 1.5vw;
    color: #fff;
    text-transform: uppercase;
    width: 12.5vw;
}
.description-service {
    font-size:1vw;
    color:#fff;
    margin-top: 1vw;
}
.button-read-more{
    display: flex;
    font-size: 1vw;
    gap:0.625vw;
    color: #fff;
    margin-top: 2.6875vw;
    align-items: center;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25vw;
    height: 2.25vw;
    border-radius: 50%;
    background: var(--color-linear);
}
.icon img {
    width: 1.25vw;
    height: 1.25vw;
    object-fit: contain;
}
</style>