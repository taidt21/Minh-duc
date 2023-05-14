<template>
  <component :is="tag" vbind="$attrs" class="title">
    {{ pageTitle }}<span class="children-title">{{ hightlightText }}</span>
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'h2'
    },
    hightlightText:{
        type:String,
        default:""
    }
    
  }
}
</script>

<style scoped>
    .title {
        font-family: 'gilmer',sans-serif;
        font-size:3.375vw;
        color: var(--color-main);
        font-weight: 800;
    }
    h1.title span {
        color:var(--color-orange);
      
    }
    .section-3_row-1 .children-title {
      display: block;
  }
</style>