<template>
  <banner-subpages tag="h1" banner="../../../src/assets/img/bannerrrrr.jpg"
   title="Minh đức luôn có những nhân sự tài năng và rất nhiệt huyết."
   namePage="Đội ngũ"
   ></banner-subpages>
   <section class="section-2">
        <div class="container">
            <div class="section-2_col-1">
                <div class="section-2_col-1_row-1">
                    <before-title title="Người lãnh đạo tài đức"></before-title>
                    <Title pageTitle="Giám đốc điều hành"></Title>
                    <p class="quote"><b>GẮN KẾT</b> phát triển xã hội trong kinh doanh, <b>kết hợp hài hòa</b> giữa lợi ích của các doanh nghiệp</p>
                    <ul class="infor">
                        <li class="infor-item">Ms. hà Nhâm</li>
                        <li class="infor-item">CEO Minh Đức Tax</li>
                    </ul>
                </div>
                <div class="section-2_col-1_row-2">
                    <h3 class="section-2_col-1_row-2_title">Thành tựu và giải thưởng</h3>
                    <div class="section-2_col-1_row-2_boxs">
                        <div class="box-item">
                            <div class="box-icon">
                                <img src="../../../assets/img/Sea.png" alt="">
                            </div>
                            <p class="box-text">
                                Hơn 15 <b>NĂM KINH NGHIỆM</b> trong lĩnh vực kiểm toán thuế
                            </p>
                        </div>
                        <div class="box-item">
                            <div class="box-icon">
                                <img src="../../../assets/img/setting.png" alt="">
                            </div>
                            <p class="box-text">
                                Hiện tại bà là <b>CEO</b> công ty TNHH dịch vụ kế toán thuế <b>MINH ĐỨC</b>
                            </p>
                        </div>
                        <div class="box-item">
                            <div class="box-icon">
                                <img src="../../../assets/img/Graduation.png" alt="">
                            </div>
                            <p class="box-text">
                                <b>THẠC SĨ</b> chuyên<br> nghành kế toán
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2_col-2">
                <div class="section-2_col-2_image">
                    <img src="../../../assets/img/ha-nham.png" alt="">
                </div>
            </div>
        </div>
   </section>
   <section class="section-3">
    <div class="container">
        <BeforeTitle title="Người điều hành tâm tin"></BeforeTitle>
        <Title pageTitle="Ban Lãnh Đạo"></Title>
        <div class="container-members">
            <div class="member-item" :class="{'active' : member.isActive}" v-for="member in members" :key="member.id" @click="selectedMember(member)">
                <div class="member-image">
                    <img :src="member.image" alt="member">
                </div>
                <div class="member-text">
                    <div class="name">{{member.name}}</div>
                    <div class="position">{{member.position}}</div>
                    <p class="description">{{member.description}}</p>
                </div>
            </div>
        </div>
        <div class="poppup" :class="{'active' : showPopup}">
            <div class="poppup-image">
                <img :src="currentMember.image" alt="image">
            </div>
            <div class="poppup-text">
                <div class="poppup-name">{{currentMember.name}}</div>
                <div class="poppup-position">{{currentMember.position}}</div>
                <p class="poppup-description">{{currentMember.description}}</p>
            </div>
            <div class="close" @click="close()"></div>
        </div>
    </div>
    <div class="overlay" :class="{'active': showPopup}" @click="close()"></div>
   </section>
   <section class="section-4">
    <div class="container">
        <Title pageTitle="Sơ đồ tổ chức"></Title>
        <div class="Organizational-chart"> 
            <img src="../../../assets/img/charttt.png" alt="Organizational chart">
        </div>
    </div>
   </section>
   <section class="section-5">
    <div class="container">
        <div class="section-5_col-1">
            <div class="section-5_col-1_row-1">
                <img src="../../../assets/img/imggg1.jpg" alt="">
            </div>
            <div class="section-5_col-1_row-2">
                <img src="../../../assets/img/imgg2.jpg" alt="">
            </div>
        </div>
        <div class="section-5_col-2">
            <div class="section-5_col-2_row-1">
                <img src="../../../assets/img/imgg3.jpg" alt="">
            </div>
            <div class="section-5_col-2_row-2">
                <div class="section-5_col-2_row-2_col-1">
                    <img src="../../../assets/img/imgg4.jpg" alt="">
                </div>
                <div class="section-5_col-2_row-2_col-2">
                    <img src="../../../assets/img/imgg5.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="section-5_col-3">
            <div class="section-5_col-3_row-1">
                <img src="../../../assets/img/imgg6.jpg" alt="">
            </div>
            <div class="section-5_col-3_row-2">
                <img src="../../../assets/img/imgg7.jpg" alt="">
            </div>
        </div>
    </div>
   </section>
   <section-contact></section-contact>
</template>

<script setup scoped>
import {ref} from 'vue'
import BannerSubpages from '../BannerSubpages.vue'
import BeforeTitle from '../BeforeTitle.vue'
import Title from '../Title.vue'

import SectionContact from './SectionContact.vue';

const members = [
    {
        image:'../../../src/assets/img/memberrr.png',
        name:'Đinh Tuấn Tài',
        position:'Giám đốc',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .",
    },
    {
        image:'../../../src/assets/img/memberrr.png',
        name:'Nguyễn Dũng',
        position:'CEO',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
        image:'../../../src/assets/img/memberrr.png',
        name:'Vũ Tiến Việt',
        position:'Founder',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
        image:'../../../src/assets/img/memberrr.png',
        name:'Hoàng Đình Tuyển',
        position:'Nhân viên',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem .",
    }
];
let showPopup = ref(false);
let currentMember = ref(members);

const selectedMember = (member)=>{
    currentMember.value = member
    members.forEach(b => {
    b.isActive = (b === member);

    showPopup.value = true;

   
  });
};
let close = ()=>{
        showPopup.value = false
    };


</script>

<style scoped>
/*section-2*/
.section-2 .container{
    display: flex;
    

}
.section-2_col-2_image{
   height: 42.25vw;
    width: 35.125vw;
    
}
.section-2_col-2_image img {
    object-fit: cover;
    height: 100%;
}
.section-2_col-2{
    background-image: url('../../../src/assets/img/bannernham.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 38.8125vw;
    height: 52.37500000000001vw;
    display: flex;
    align-items: end;
}
.section-2 .quote{
    color: var(--color-main);
    font-weight: 400;
    font-size: 1.875vw;
    position: relative;
    margin-top: 3.4375000000000004vw;
    width: 44.1875vw;
}
.section-2 .quote::before{
    content:"";
    background-image: url('../../../src/assets/img/nhayprev.png');
    position: absolute;
    top: -1.4375vw;
    left:-2.0625vw;
    width: 5.9375vw;
    height: 4.625vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.section-2 .quote > b{
    font-weight: 500;
    text-transform: uppercase;
}
.section-2 .infor-item{
    color: var(--color-orange);
}
.section-2 .infor{
    width: 12vw;
    margin-left: auto;
    margin-top: 2vw;
}
.section-2 .infor-item:nth-child(1){
    font-size: 1.875vw;
    font-weight: 700;
}
.section-2 .infor-item:nth-child(2){
    font-size: 1.25vw;
}
.section-2 .title{
    line-height: 4.125vw;
}
.section-2_col-1_row-2_boxs{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5.875vw;
    

}
.section-2_col-1_row-1{
    padding-left:  6.25vw;
    padding-right: 9.6875vw;
    padding-top: 4.5vw;
    padding-bottom: 2.4375vw;
}
.section-2_col-1_row-2{
    padding-top: 3.9375vw;
    padding-bottom: 3.6249999999999996vw;
    background: #FDF6ED;
    padding-left: 9.6875vw;
}
.section-2_col-1_row-2_title{
    font-size: 2vw;
    font-weight: 700;
    color: var(--color-main);
}
.section-2_col-1_row-2_boxs{
    margin-top: 3.2125vw;
}
.section-2_col-1_row-2 .box-icon img {
    height: 3.8125vw;
    width: 3.8125vw;
    margin: auto;
    object-fit: cover;
    display: block;
}
.section-2_col-1_row-2 .box-text{
    margin-top: 0.8125vw;
    text-align: center;
    font-size: 1vw;
    line-height: 1.5vw;
    color: var(--color-main);
}
/*SECTION 3 */
.section-3{
    padding: 9.375vw 6.25vw;
    
}
.section-3 .title,
.before-title{
    text-align: center;
}
.container-members{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 4.125vw;
    row-gap: 3.125vw;
}
.member-image{
    position: relative;
    text-align: center;
}
.member-image img {
    position: relative;
    z-index: 2;
    margin-bottom: -2.8125vw;
    height: 34.8125vw;
}
.description{
    display: none;
}
.member-image::before{
    content:"";
    position: absolute;
    background: #FDF6ED;
border-radius: 500px 500px 0px 0px;
    z-index: 0;
    height: 28.4375vw;
    bottom: -2.8125vw;
    left:50%;
    transform: translateX(-50%);
    width: 25.4375vw;
}
.member-text{
    height: 5.9375vw;
    background-color: var(--color-main);
    position: relative;
    z-index: 3;
    text-align: center;
    padding-top:0.8125vw ;
    padding-bottom:0.8125vw ;
}
.member-text .name{
    font-size: 1.5vw;
    color: #fff;
    font-weight: 700;
    
}
.member-text  .position{
    color: var(--color-orange);
    font-weight: 500;
    
    font-size: 1.25vw;

}
.member-item{
    cursor: pointer;
}
.poppup{
    width: 54.0625vw;
    display: flex;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    padding-left: 2.25vw;
    justify-content: space-between;
    padding-right: 3.4375000000000004vw;
    background-color: #fff;
    opacity: 0;
    pointer-events: none;
    transition:.4s;
}
.poppup.active{
    opacity: 1;
    pointer-events: all;
}
.poppup-name{
    font-size: 1.875vw;
    font-weight: 800;
    color:var(--color-main)
}
.poppup-position{
    font-size: 1.125vw;
    color: var(--color-orange);
}
.poppup-image img {
    width: 100%;
    display: block;
    margin-top: auto;
    position: relative;
    z-index: 1;
}
.poppup-image{
    width: 15.75vw;
    display: flex;
    position: relative;
}
.poppup-image::before{
    content: "";
    position: absolute;
    left:0;
    display: block;
    width: 14.625vw;
    bottom: 0;
    height: 16.375vw;
    z-index: 0;
    background: #FDF6ED;
border-radius: 500px 500px 0px 0px;
}
.poppup-text{
    width: 30.125vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.poppup-description{
    font-size: 1.125vw;
    color: #2b2b2b;
}
.close {
    position: absolute;
    right: 1.5vw;
    top: 1.5vw;
    width: 1.5vw;
    height: 1.5vw;
    opacity: 0.3;
    cursor: pointer;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: ' ';
    height: 1.5vw;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
.overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 3;
    left: 0;
    top:0;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
}
.overlay.active{
    opacity: 1;
    pointer-events: all;

}
/*SECTION 4*/
.section-4{
    padding: 3.6875vw 7.5vw;
    padding-bottom: 6.812500000000001vw;
    background: #FDF6ED;

}
.section-4 .title{
    text-align: center;
}
.Organizational-chart{
    margin-top: 3.5000000000000004vw;
}
.Organizational-chart img {
    width: 100%;
}
/*SECTION 5 */
.section-5 .container{
    display: flex;
    column-gap: 2.25vw;
}
.section-5_col-1{
    margin-top: 17.8125vw;
}
.section-5_col-2{
    margin-top: 9.375vw;
}
.section-5_col-3{
    margin-top: 13.3125vw;
}

.section-5 img {
    width: 100%;
   
    object-fit: cover;
    display: block;
}
.section-5_col-1_row-1{
    width: 15.5vw;
    margin-left: auto;
}
.section-5_col-1_row-2{
    width: 24.25vw;
    margin-top: 2vw;
}
.section-5_col-2_row-1{
    width: 51.9375vw;
}
.section-5_col-2_row-2{
    display: flex;
    justify-content: space-between;
    margin-top: 2.5vw;
}
.section-5_col-2_row-2_col-1{
    width: 18.3125vw;
}
.section-5_col-2_row-2_col-2{
    width: 31vw;
  
}
.section-5_col-3_row-1{
    width: 19.375vw;
}
.section-5_col-3_row-2{
    width: 14.625vw;
    margin-top: 2vw;
}

</style>