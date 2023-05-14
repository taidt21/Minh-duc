<template>
  <banner-subpages
  banner="../../../src/assets/img/bannerrrrr.jpg"
  title="Liên hệ với chúng tôi 
  để giải đáp thắc mắc của bạn"
  namePage="Liên hệ"
  ></banner-subpages>
  <section class="section-2">
    <div class="container">
      <div class="section-2_col-1">
        <Title pageTitle="Thông tin liên hệ"></Title>
        <p class="description">Khách hàng vui lòng điền đầy đủ thông tin ở form bên dưới để được Minh Đức hỗ trợ và giải đáp thắc mắc nhanh nhất.</p>
        <form @submit="prevent.getValue()">
          <div class="form-name">
            <label for="name">Họ và tên<span>*</span></label>
            <input type="text"  id="name" placeholder="Đinh Tuấn Tài" v-model="name">
          </div>
          <div class="form-phone">
            <label for="phone">Số điện thoại<span>*</span></label>
            <input type="tel" v-model="phone"  id="phone" placeholder="0911290476">
          </div>
          <div class="form-email">
            <label for="emailClient">Email</label>
            <input type="tel" v-model="email"  id="emailClient" placeholder="dinhtuantaiok@gmail.com">
          </div>
          <div class="form-location">
            <label for="location">Địa chỉ<span>*</span></label>
            <input v-model="location" type="text"  id="location" placeholder="Xuân Phương, Từ Liêm, Hà Nội ">
          </div>
          <div class="form-content">
            <label for="content">Nội dung</label>
            <div>
              <textarea v-model="content" ref="myTextarea" id="content" placeholder="Nội dung" @input="autoResizeTextarea()"></textarea>
            </div>
          </div>
          <Button @click="getValue()" textBtn="Gửi tư vấn" to="#" tag="a"></Button>
        </form>
      </div>
      <div class="section-2_col-2">
        <div class="image">
          <img src="../../../assets/img/imggg.jpg" alt="">
        </div>
        <ul class="list-contact">
          <li class="contact-item" v-for="contact in contacts" :key="contact.id">
            <span class="contact-icon">
              <img :src="contact.icon" alt="icon">
            </span>
            <span class="contact-text">
              <span class="contact-name">{{contact.name}}</span>
              <span class="contact-des">{{contact.description}}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup scoped>
import BannerSubpages from '../BannerSubpages.vue'
import Button from '../Button.vue';
import Title from '../Title.vue';
import { ref } from 'vue';
const contacts = [
  {
    name:'Hotline:',
    description:'090.222.6656',
    icon:'../../../src/assets/img/call-calling.png'
  },
  {
    name:'Email:',
    description:'info@ketoanthueminhduc.vn',
    icon:'../../../src/assets/img/sms.png'
  },
  {
    name:'Văn phòng làm việc:',
    description:'Số 7, Ngõ 97 Phố Đại Linh, P. Trung Văn, Q. Nam Từ Liêm,TP. Hà Nội',
    icon:'../../../src/assets/img/location.png'
  },
  {
    name:'Chi nhánh Thái Bình:',
    description:'Lô 46, Đường Số 6, Khu Đô Thị Kỳ Bá, P. Kỳ Bá, TP. Thái Bình',
    icon:'../../../src/assets/img/location.png'
  },
  {
    name:'Chi nhánh Bắc Giang:',
    description:'Số 6, ngõ 24 Đồng Cửa, phường Lê Lợi, TP. Bắc Giang',
    icon:'../../../src/assets/img/location.png'
  },
  {
    name:'Chi nhánh Mê Linh:',
    description:'Thôn Nam Cường, xã Tam Đồng, huyện Mê Linh, TP. Hà Nội',
    icon:'../../../src/assets/img/location.png'
  },
  
];
const  myTextarea = ref(null);
const name = ref(null);
const email = ref(null);
const location = ref(null);
const phone = ref(null);
const content = ref(null);
const autoResizeTextarea = () => {
    if(myTextarea.value){
        myTextarea.value.style.height = '1.6vw';
        myTextarea.value.style.height = myTextarea.value.scrollHeight + 'px';
    }
};
const getValue = ()=>{
  console.log('Họ tên:' + name.value)
  console.log('Email:' + email.value)
  console.log('Phone:' + phone.value)
  console.log('Nội dung:' + content.value)
};
</script>

<style scoped>
.section-2{
  padding: 6.812500000000001vw 6.25vw;
}
.section-2 .container{
  display: flex;
  gap: 3.75vw;
}

.section-2 .list-contact{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1vw;
  margin-top: 2.5vw;
}
.list-contact img{
  width: 1vw;
  

}
.contact-name{
  color: var(--color-main);
  font-weight: 500;
  margin-right: 5px;
}


.contact-text{
  font-size: 1vw;
}
.contact-icon{
  min-width: 1vw;
  max-width: 1vw;
}
.contact-des{
  color: #656263;
}
.contact-item{
  display: flex;
  gap:1vw;
  width: 100%;
}
.section-2_col-2{
  width: 41.5vw;
}
.description{
  font-size: 1vw;
  margin-top: 1.5vw;
  color: #656263;
}
form{
  display: grid;
  grid-template-areas: 'a a'
                       'b c'
                       'd d'
                       'e e'
                       'g g';
  column-gap: 1.875vw;
  row-gap: 1.875vw;
  margin-top: 1.875vw;
}
.form-name{
  grid-area: a;
}
.form-phone{
  grid-area: b;
}
.form-email{
  grid-area: c;
}
.form-location{
  grid-area: d;
}
.form-content{
  grid-area: e;
}
.form-content > div {
  height: 7.6875vw;
  display: flex;
  align-items: end;
 
}
.button{
  grid-area: g;
  margin-top: 1.25vw;
}
label{
  display: block;
  font-size: 1vw;
  color: var(--color-main);
  margin-bottom: 0.8125vw;
}
.section-2 input,textarea{
  display: block;
  border: none;
  width: 100%;
  border-bottom: 1px solid #B1B1B1;
  font-size: 1vw;
  color:#656263;
  padding-bottom: 0.3125vw;
  
}
textarea {
 flex: 1;
  resize: none;
  max-height: 7.6875vw;
  
}
textarea::-webkit-scrollbar {
  width: 0;

}
label span {
  color:#EC3434;
  position: relative;
  left: 3px;
}
</style>