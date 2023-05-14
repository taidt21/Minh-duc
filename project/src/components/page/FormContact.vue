<template>
    <form @submit.prevent="submitForm"

    >
        <div class="form-item">
            <label for="name">Họ và tên<span>*</span></label>
            <input id="name" v-model="FormName" type="text" placeholder="Đinh Tuấn Tài" />
        </div>
        <div class="form-item">
            <label for="phone">Số điện thoại <span>*</span></label>
            <input id="phone" v-model="FormPhone" type="tel" placeholder="0911290476" pattern="^0\d{9}$"  />
        </div>
        <div class="form-item">
            <label for="email">Email </label>
            <input id="email" v-model="FormEmail" type="email" placeholder="Dinhtuantaiok@gmail.com" />
        </div>
        <div class="form-item">
            <label for="content">Nội dung  </label>
            <div>
                <textarea id="content" v-model="FormContent"  ref="myTextarea" placeholder="Nội dung cần tư vấn" @input="autoResizeTextarea"></textarea>
            </div>
        </div>
        <div class="form-item">

            <Button @click="submitForm" tag="a" textBtn="Đăng ký ngay" to="#"></Button>
        </div>
        
        
    </form>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import Button from './Button.vue';


const FormName = ref(null);
const FormEmail = ref(null);
const FormPhone = ref(null);
const FormContent= ref(null);
const myTextarea = ref(null);

const autoResizeTextarea = () => {
    if(myTextarea.value){
        myTextarea.value.style.height = '1.6vw';
        myTextarea.value.style.height = myTextarea.value.scrollHeight + 'px';
    }
};
const submitForm = (()=>{
    console.log('Tên :' + FormName.value)
    console.log('Email :' + FormEmail.value)
    console.log('Số điện thoại :' + FormPhone.value)
    console.log('Nội dung cần tư vấn :' + FormContent.value)
})

onMounted(()=>{
    autoResizeTextarea()
});
</script>

<style scoped>
form{
    display: grid;
    grid-template-areas: 'i1 i1'
                         'i2 i3'
                         'i4 i4'
                         'i5 i5';
    grid-template-columns: repeat(2,1fr);
    gap: 1.875vw;
}
.form-item:nth-child(1){
    grid-area: i1;
   
}
.form-item:nth-child(2){
    grid-area: i2;
}
.form-item:nth-child(3){
    grid-area: i3;
}
.form-item:nth-child(4){
    grid-area: i4;
}
.form-item:nth-child(5){
    grid-area: i5;
}
.form-item label{
    display: block;
    margin-bottom: 1vw;
    font-size: 1vw;
    color: #555;
}
.form-item input{
    display: block;
    width: 100%;
    font-size: 1vw;
    color: #b1b1b1;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid #B1B1B1;
    padding-bottom: 0.1875vw;
}
.form-item div {
    height: 7.6875vw;
    display: flex;
    align-items: end;
}
.form-item textarea{
    font-size: 1vw;
    color: #b1b1b1;
    font-weight: 500;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #B1B1B1;
    padding-bottom: 0.1875vw;
    max-height: 7.6875vw;
    resize: none;
   flex: 1;
  
   
    
}
textarea::-webkit-scrollbar {
    width: 0;

  }
label span {
    color: 
    #EC3434;
}
.button{
    margin-top: 1.25vw;
}
</style>