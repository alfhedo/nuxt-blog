<template lang="pug">
.page
  SideNav

  section-header(
    :title="$t('home.title')"
    :subtitle="$t('home.subtitle')"
  )
  post-list
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HomePage',
})
</script>