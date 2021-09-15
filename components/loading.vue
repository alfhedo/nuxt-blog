<template lang="pug">
  div(v-if="loading" class="splash-screen")
    div(class="spinner-wrapper")
      //- div(id="outer-circle")
      //-   div(id="inner-circle")
      div(class="lds-hourglass")
        div(class="inner-lds-hourglass")
      //- b-spinner(type="grow")
</template>

<script>
  export default {
    data: () => ({
      loading: true
    }),
    mounted(){
      this.loading = false
    }
  }
</script>

<style scoped lang="scss">
.splash-screen {
  background-color: $background-color;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;    
}

.spinner-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

 #outer-circle {
   background: #385a94;
   border-radius: 50%;
   height: 500px;
   width: 500px;
   position: relative;
   /* 
    Child elements with absolute positioning will be 
    positioned relative to this div 
   */
 }
 #inner-circle {
   position: absolute;
   background: $background-color;
   border-radius: 50%;
   height: 300px;
   width: 300px;
   /*
    Put top edge and left edge in the center
   */
   top: 50%;
   left: 50%;
   margin: -150px 0px 0px -150px;
   /* 
    Offset the position correctly with
    minus half of the width and minus half of the height 
   */
 }

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #D8232F transparent #57585A transparent;
  animation: lds-hourglass 1.2s infinite;
}
.inner-lds-hourglass {  
  display: inline-block;
  position: absolute;
  width: 40px;
  height: 40px;
}
.inner-lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 0px;
  box-sizing: border-box;
  border: 32px solid $background-color;
  border-color: $background-color;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>
