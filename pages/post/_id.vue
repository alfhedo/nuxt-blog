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
  created() {
    this.$store.dispatch('posts/index');
  },

  computed: {
    post() {
      let posts = this.$store.state.posts.posts;
      let route = this.$route.params.id;
      return posts[route] || {};
    },
  },
})
</script>
