<template>
    <div class="wrapper">
        <p class="content">{{ content }}</p>
        <div class="wrapper-profile">
            <div class="profile-image">
                <img :src="avatar" alt="feedback">
            </div>
            <div class="profile-text">
                <div class="name">{{name}}</div>
                <div class="position">{{position}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        content:{
            type:String,
            default:"“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà OKHUB chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”",
        },
        avatar:{
            type:String,
            
        },
        name:{
            type:String,
        },
        position:{
            type:String,
        }
    }
}
</script>

<style scoped>
.profile-image img {
    width:6.25vw;
    height: 6.25vw;
    border-radius: 50%;
    object-fit: cover;
}
.content{
    font-size: 2.25vw;
    font-weight: 500;
    color:var(--color-main);
    width: 48.8125vw;
    transition:.5s;
    position: relative;
}
.wrapper-profile{
    display: flex;
    align-items: center;
    column-gap: 1.9375vw;
    margin-top: 2.3125vw;
}
.name{
    font-size: 1.5vw;
    color:var(--color-main);
    font-weight: 700;
}
.position{
    font-size: 1vw;
    color:var(--color-main)
}
.content::before{
    content:"";
    background-image: url(../../../../assets/img/nhay.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top:-2vw;
    left: -6vw;
    width:6.4375vw;
    height: 4.4375vw;
    display: block;
    opacity: 10%;
    filter: brightness(0) saturate(100%) invert(14%) sepia(85%) saturate(3112%) hue-rotate(192deg) brightness(96%) contrast(102%);

}
.swiper-slide-active + .swiper-slide .content::before{
    display: none;
}
</style>