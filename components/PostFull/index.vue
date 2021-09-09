<template lang="pug">
section.section
  .content
    img.pf__image(
      :src="post.image"
      :alt="`post-image-${post.id}`"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'

export default Vue.extend({
  name: 'PostFull',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.pf {
  &__image {
    width: 100%;
    max-width: 650px;
    margin: 24px auto;
    display: block;
    @media (min-width: $tablet) {
      margin: 64px auto 36px;
    }
  }
  ::v-deep &__md {
    font-family: $font-family-regular;
    p {
      margin: 24px 0;
    }
  }
}
</style>
