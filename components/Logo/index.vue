<template lang="pug">
#divtorotate
  svg(viewBox='0 0 500 200')
    path(d='M0,150 C160,-40 350,240 500,55 L660,190 L0,350 Z'
    class="svg-stroke")
  span#span1
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'logo',
  data() {
    return {
      textColor: "blue"
    };
  },
  props: {
    sizeLogo: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    cssProps() {
      return {
        // '--hover-font-size': (this.baseFontSize * 2) + "em",
        // '--bg-hover-color': this.bgHoverColor,
        // '--hover-content': JSON.stringify(this.hoverContent)
        '--size-logo': this.sizeLogo  + "px",
      }
    }
  }
})
</script>

<style lang="scss" scoped>
#divtorotate {
  width:150px;
  height:150px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  border-radius:50%;
  overflow:hidden;
  transform:rotate(-15deg)
}
#divtorotate:before{    
  content:'';
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display:absolute;
  width:150px;
  height:150px;
  background:linear-gradient(to bottom,#DB272F 60%,#56595A 40%);
  border-radius:50%;    
}

#span1{	  
  display:block;  
  height:50px;
  width:50px;
  border-radius:50%;
  background:$background-color;
  position:absolute;
  top:50%;
  left:50%;
	transform:translate(-50%,-50%);    
  z-index:10;
}
svg {  
  position: absolute;
  top: 48px;
  left: 0;
}
.svg-stroke{
  stroke: $background-color;
  stroke-width: 14;
  fill:#56595A !important;
}
</style>
