<template lang="pug">
b-card.pc(:title="post.title", :img-src="post.image",
      :img-alt="`post-image-${post.id}`", img-top, tag="div",
       class="mb-2")
  b-card-text {{post.description}}
  nuxt-link(:to="pageUrl")
    b-button(variant="primary") Go somewhere
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'

export default Vue.extend({
  name: 'PostCard',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  computed: {
    pageUrl(): string {
      return (this as any).localePath(`/post/${this.post.id}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.pc {
  color: $text-primary;
  border: $line-default;
  border-radius: $border-radius-primary;
  background-color: $background-color;
  
  padding: 20px;
  display: block;
  @media (max-width: $mobile) {
    &:not(:nth-last-child(1)) {
      margin-bottom: 16px;
    }
  }
  @media (min-width: $tablet) {
    padding: 32px;
  }
  &:hover {    
    border: $line-default;
    // text-decoration: underline $text-primary;  
  }
  &__img {
    max-width: 100%;
    display: block;
  }
  &__title {
    margin: 16px 0 12px;
  }
  &__subtitle {
    color: $text-secondary;
    @media (min-width: $tablet) {
      margin-top: 16px;
    }
  }
}
</style>
