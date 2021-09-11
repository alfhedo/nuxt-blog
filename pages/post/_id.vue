<template lang="pug">
.page
  SideNav
  section-header(
    :title="post.title"
  )
  link-to-home

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
    post(): Post | undefined {
      let posts = this.$store.state.posts.posts;
      let route = Number(this.$route.params.id); 
      return posts[route - 1] || {};
    },
  },
})
</script>
