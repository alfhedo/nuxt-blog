<template lang="pug">
  div(v-if="loading" class="splash-screen")
    div(class="spinner-wrapper")
      logo(class="rotate1")
      //- b-spinner(type="grow")
      br
      img(class="px150 rotate1" src="~/assets/images/petsa (1)-min.png")
</template>

<script>
  export default {
    data: () => ({
      loading: true
    }),
    mounted(){
      this.loading = true
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
  // position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;  
  transform: translate(-50%, -50%);
}
.rotate1{
  width: 150px;
  height: 150px;  
  // -webkit-animation: spin 1s linear infinite;
  // -moz-animation: spin 1s;
  animation: lds-hourglass 1.5s infinite;
}

.px150{
  width: 150px;
  height: 150px;  
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

@-webkit-keyframes spin{
  100%{-webkit-transform: rotate(360deg);}
}
@-moz-keyframes spin{
  100%{-webkit-transform: rotate(360deg);}
}
@keyframes spin {
  100%{-webkit-transform: rotate(360deg);}
}
</style>
