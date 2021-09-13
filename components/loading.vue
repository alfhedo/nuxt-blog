<template lang="pug">
  div(v-if="loading" class="splash-screen")
    div(class="spinner-wrapper")
      b-spinner(type="grow")
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
</style>
