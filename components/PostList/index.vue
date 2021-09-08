<template lang="pug">
section.section
  .content
    p.pl__count(class="body2 regular")
      b-icon(icon="list-ul", font-scale="2")
      | {{ $t('home.postCount') + records.length }}

    .pl__items
      post-card(
        v-for="m in records"
        :key="m.slug"
        :mountain="m"
      )
  //- div
  //-   h1 Mountains
  //-   ul(v-for="m in records" :key="m.slug")
  //-     li {{m.title}}
</template>

<script lang="ts">
import Vue from 'vue'
// import axios from 'axios'
export default Vue.extend({
  name: 'PostList',
  data() {
    return {
      records: [],
    }
  },
  created(){
    this.$axios.$get('https://api.nuxtjs.dev/mountains').then(response =>{
      this.records = response;      
    });
  },
  // async asyncData({ $axios }) {
  //   let response = await $axios.$get("https://api.nuxtjs.dev/mountains");
  //   console.log(response);
  //   return response;
  // },  
})
</script>

<style lang="scss" scoped>
section.section {
  margin-top: 32px;
  @media (min-width: $tablet) {
    margin-top: 64px;
  }
}
.pl {
  &__count {
    display: inline-flex;
    align-items: center;
    margin-bottom: 12px;
    color: $text-secondary;
    @media (min-width: $tablet) {
      margin-bottom: 24px;
    }
    &-icon {
      margin-right: 12px;
    }
  }
  &__items {
    margin-top: 12px;
    @media (min-width: $tablet) {
      margin-top: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;
    }
  }
}
</style>
