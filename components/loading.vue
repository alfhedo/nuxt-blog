<template lang="pug">
  div(v-if="loading" class="splash-screen")
    div(class="spinner-wrapper")
      img(class="px150" src="~/assets/images/petsa (1)-min.png")
      #divtorotate
        svg(viewBox='0 0 500 200' preserveAspectRatio='xMinYMin meet')
          path(d='M0,150 C160,-40 260,240 500,45 L660,190 L0,350 Z'
          class="svgStroke")
        span#span1
      //- b-spinner(type="grow")
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
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s;
}
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
  height:52px;
  width:52px;
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
.svgStroke{
  stroke: $background-color;
  stroke-width: 14;
  fill:#56595A;  
}
.px150{
  width: 150px;
  height: 150px;  
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
