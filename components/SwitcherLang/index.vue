<template lang="pug">
select(
  v-model="selected"
  class="body3 medium"
  @change="changeLocale"
)
  option(
    v-for="locale in $i18n.locales"
    :key="locale.code"
    :value="locale.code"
  ) {{ locale.name }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SwitcherLang',
  data: () => ({
    selected: '' as 'es' | 'en',
  }),
  created() {
    this.selected = (this as any).$i18n.locale
  },
  methods: {
    changeLocale() {
      const switchPath = (this as any).switchLocalePath(this.selected)
      this.$router.push(switchPath)
    },
  },
})
</script>

<style lang="scss" scoped>
select {
  transition: $transition-default;
  color: $text-primary;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 10px;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;
  background-color: $background-color;
  appearance: none;
  &:hover,
  &:focus,
  &:active {
    filter: brightness(90%);
  }
}
</style>
