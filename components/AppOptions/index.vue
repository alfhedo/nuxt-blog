<template lang="pug">
section.section
  .content
    .app-options
      switcher-color-mode
      switcher-lang
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppOptions',
})
</script>

<style lang="scss" scoped>
.app-options {
  display: flex;
  //margin-top: 24px;  
}
</style>
