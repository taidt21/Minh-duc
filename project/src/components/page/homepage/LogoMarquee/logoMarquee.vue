<template>
    <div ref="marquees" class="marquee-container">
      
     <div ref="marquee" class="logo-list-marquee">
        <ul class="logo-list">
          <li v-for="logo in logos" :key="logo.id" class="logo-item">
            <img :src="logo.src" :alt="logo.alt"  class="logo-img" />
          </li>
        </ul>
      </div>
      <div ref="marquee" class="logo-list-marquee">
        <ul class="logo-list">
          <li v-for="logo in logos" :key="logo.id" class="logo-item">
            <img :src="logo.src" :alt="logo.alt"  class="logo-img" />
          </li>
        </ul>
      </div>
  

    </div>
    
  
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    setup(){
        const logos = [
        { id: 1, src: '../../../../src/assets/img/angia.png', alt: 'Logo 1' },
        { id: 2, src: '../../../../src/assets/img/angia.png', alt: 'Logo 2' },
        { id: 3, src: '../../../../src/assets/img/angia.png', alt: 'Logo 1' },
        { id: 4, src: '../../../../src/assets/img/angia.png', alt: 'Logo 2' },
        { id: 5, src: '../../../../src/assets/img/angia.png', alt: 'Logo 1' },
        { id: 6, src: '../../../../src/assets/img/angia.png', alt: 'Logo 2' },
      
      ];
      
   
    
      return{
        logos
      }
    }
}
</script>

<style scoped>
.logo-list-marquee {

    display: flex;
   
  }
  .marquee-container{
    position: relative;
   
    display: flex;
    transform: translateX(0);
    gap:7.5625vw;
    animation: marquee 10s linear infinite running; 
    width: max-content;
    height: 11vw;
    align-items: center;
    margin-top: 10vw;
    background: #F8F8FA;

  }
.marquee-container:hover{

    animation-play-state: paused;
}
  
  .logo-list {
    display: flex;
    
    gap:7.5625vw;
    white-space: nowrap;
  }
  
 

  .logo-img {
    width: 11vw;
    height: 6vw;
    max-width:unset;
    object-fit: contain;
    filter: grayscale(100%);
    /* CSS của logo */

  }
  .logo-item:hover .logo-img{
    filter: none;
  }
  
  @keyframes marquee {
    0%{
      transform: translateX(0);
    }
    100% {
     transform: translateX(calc(-50% - 3.78125vw));
    }
  }

</style>