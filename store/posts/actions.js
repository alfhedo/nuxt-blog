export default {
  index({ commit }) {
    this.$axios.$get('/posts').then(rsp => {
      commit('addPosts', rsp);
    }).catch(error => {
      console.log(error);
    });
  }
}
