<template lang="pug">
section.section
  .content
    p.pl__count(class="body2 regular")
      b-icon(icon="list-ul", font-scale="2")
      | {{ $t('home.postCount') + posts.length }}

    .pl__items
      post-card(
        v-for="post in posts"
        :key="post.id"
        :post="post"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'

export default Vue.extend({
  name: 'PostList',

  created() {
    this.$store.dispatch('posts/index');
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts || [];
    },
  },
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
