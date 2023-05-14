<template>
  <div class="questions">
      <div
        v-for="(accordionItem, index) in accordionItems"
        :key="index"
        class="accordion-item"
        :class="{ active: isActive(index) }"
      >
        <div class="accordion-header" @click="toggleAccordion(index)">
          <p>{{ accordionItem.header }}</p>
          <button class="plus_icon"></button>
        </div>
        <div class="accordion-content" >
          <p>{{ accordionItem.content }}</p>
          <router-link to="#">
            <span class="btn-text">Đọc thêm </span>
            <span class="btn-icon">
              <img src="../../../assets/img/Arrow-6.png" alt="">
            </span>
          </router-link>
      </div>
  </div>
  </div>
</template>

<script setup scoped>

import { ref ,onMounted} from 'vue';

const activeIndex = ref(null);


const accordionItems=ref( [
        {
          header: 'Những trường hợp nào không được tính khấu trừ thuế GTGT',
          content: 'Theo các quy định hiện hành về kê khai thông tin giao dịch liên kết, các bên có quan hệ liên kết được xác định theo Khoản 2, Điều 5, Nghị định 20/2017/NĐ-CP ngày 24 tháng 02 năm 2017 của Chính phủ...',
        },
        {
          header: 'Những trường hợp nào không được tính khấu trừ thuế GTGT',
          content: 'Theo các quy định hiện hành về kê khai thông tin giao dịch liên kết, các bên có quan hệ liên kết được xác định theo Khoản 2, Điều 5, Nghị định 20/2017/NĐ-CP ngày 24 tháng 02 năm 2017 của Chính phủ...',
        },
        {
          header: 'Những trường hợp nào không được tính khấu trừ thuế GTGT',
          content: 'Theo các quy định hiện hành về kê khai thông tin giao dịch liên kết, các bên có quan hệ liên kết được xác định theo Khoản 2, Điều 5, Nghị định 20/2017/NĐ-CP ngày 24 tháng 02 năm 2017 của Chính phủ...',
        },
        {
          header: 'Những trường hợp nào không được tính khấu trừ thuế GTGT',
          content: 'Theo các quy định hiện hành về kê khai thông tin giao dịch liên kết, các bên có quan hệ liên kết được xác định theo Khoản 2, Điều 5, Nghị định 20/2017/NĐ-CP ngày 24 tháng 02 năm 2017 của Chính phủ...',
        },
        
        // Thêm các item accordion khác tại đây
      ]);

  
  
    function  toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
  
    }
    function isActive(index) {
     
      return this.activeIndex === index;
    }
   
   


</script>

<style scoped>
.questions{
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  margin-top: 2.5vw;
}
.accordion-item{
  border: 1px solid #BABABA;
  border-radius: 16px;
  padding-top: 1vw;
  padding-left: 1.3125vw;
  padding-bottom: 1vw;
  transition: .4s;
  overflow: auto;

  
}

.accordion-header{
  
  font-weight: 500;
  font-size: 1vw;
  position: relative;
  cursor: pointer;
  transition: .4s;
  color: #414141;
  line-height: 2.125vw;
}
.accordion-content{
 max-height: 0vw;
 overflow: hidden;
 transition:2s;
 color: #414141;
 opacity: 0.7;
 font-size: 1vw;
}
.accordion-content a{
  margin-top: 0.75vw;
  display: block;
}
.accordion-item.active .accordion-content{
  max-height: 100vw;
  transition: 4s;
}

.accordion-item.active{
  padding-bottom: 1.375vw;
  

}
.accordion-item.active .accordion-header{
  margin-bottom: 0.625vw;
}
.btn-text{
  color: var(--color-main);
  font-weight: 500;
  font-size: 1vw;
}

.plus_icon {
  position:absolute;
right:1.375vw;
top:50%;
transform: translateY(-50%);
 height: 1.25vw;
  width:1.25vw;
  border: none;
background: transparent;

}

.plus_icon:before {
  content:"";
  position:absolute;
  width: 100%;
  height:2px;
left:0;
top:50%;
transform: translateY(-50%);
  background: #695c54;
  display:inline-block;
}

.plus_icon::after {
  content:"";
  position:absolute;
  top:0;
  height: 100%;
  width:2px;
  left: 50%;
  transform: translateX(-50%);
  background: #695c54;
  display:inline-block;
  
}

.accordion-item.active .plus_icon::after{
  transform: translateX(-50%) rotate(90deg);
 
}

.plus_icon:before,
.plus_icon:after {
 -webkit-transition: all 0.3s ease; 
 -moz-transition: all 0.3s ease; 
 -ms-transition: all 0.3s ease; 
 -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;  
}
</style>