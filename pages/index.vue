<template lang="pug">
.page
  SideNav
  section-header(
    :title="$t('home.title')"
    :subtitle="$t('home.subtitle')"
  )
  post-list

  button(v-on:click="alertDisplay", class="btn-petsa") Click Me!
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  methods: {
      alertDisplay() {
        this.$swal({
          title: 'Are you sure?',
          text: 'You can\'t revert your actión',
          type: 'info',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Deleted', 'You successfully deleted this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
      }
    }
})
</script>

<style scoped>

</style>
