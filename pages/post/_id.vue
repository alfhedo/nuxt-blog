<template lang="pug">
.page
  link-to-home

  section-header(
    :title="post.title"
  )

  post-full(
    :post="post"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'

export default Vue.extend({
  data() {
    return { post: {} };
  },

  created() {
    this.$axios.$get(`/posts/${this.currentId}`).then(rsp => {
      this.post = rsp;
    });
  },

  computed: {
    currentId(): number {
      return Number(this.$route.params.id)
    },
  },
})
</script>
