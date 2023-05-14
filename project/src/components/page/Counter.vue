<template>
  <div class="counter" ref="positionCounter">{{ Math.round(count) }}</div>
</template>

<script >
import {ref,onMounted} from 'vue';
export default {
    props:{
      max:{
        type:String,
        required:true,
      }
    },
    setup(props){
        let count = ref(0);
        const positionCounter = ref(null); 

        onMounted(() =>{
            let getTop = positionCounter.value.offsetTop;
            
            
        window.addEventListener('scroll',function(){
            if(window.scrollY > (getTop - innerHeight) ){
           const timeId =  setInterval(()=>{
                if(count.value < props.max){
                    count.value++
                }
                else{
                    clearInterval(timeId)
                }
            
            },Math.ceil(7000 / props.max ));
        }
        })
    })
        return{
            count,
            positionCounter

        }

    }
}
</script>

<style scoped>
.counter {
    font-weight: 800;
    font-size: 4.1875vw;
    color: var(--color-main);
    position: relative;
    line-height: 2.25vw;
    width: fit-content;
}
.counter::after{
    content:"+";
    font-size: 2.5625vw;
    position: absolute;
    right:-2.0625vw;
    top:50%;
    transform: translateY(-50%);

}
</style>