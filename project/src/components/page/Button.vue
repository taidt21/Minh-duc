<template>
  <component :is="tag" :to="to" class="button">{{ textBtn }}
  <span class="icon-btn">
    <img src="../../assets/img/arrowBtn.png" alt="icon" />
  </span>
  </component>
</template>

<script scoped>
export default {
    name:"Button",
    props:{
        textBtn:{
            type:String,
            required:true,
        },
        tag:{
            type:String,
            default:'router-link',
        },
        to:{
            type:String,
             
        },
       

    }
}
</script>

<style scoped>
.button{
    height: 3.25vw;
    min-width: 10.25vw;
    width: fit-content;
    box-shadow: 0px 0px 35px 0px #D3A14A4D;
    color: #fff;
    border-radius: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1vw;
    background: var(--color-linear);
    transition:.5s ;
    cursor: pointer;
    padding: 0 1.4375vw;
}
.button:hover{
    transform: scale(1.1);
}
.button .icon-btn{
    position: relative;
    top:0.3vw;
    left:0.3vw;
    transition: left .5s ;
    display: block;
    
}
.button img {
    width:1.5vw;
    height: 1.5vw;
    object-fit: contain;
}
.button:hover .icon-btn{
    left:1vw;
}


</style>