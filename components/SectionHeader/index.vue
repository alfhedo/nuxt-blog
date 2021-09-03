<template lang="pug">
div
  b-navbar(toggleable="lg", type="dark", variant="info")        
    b-icon(icon="list", v-b-toggle.sidebar-1, font-scale="2")
    b-navbar-brand(href="#") {{ title }}      
    b-navbar-toggle(target="nav-collapse")
    b-collapse(id="nav-collapse", is-nav)
      b-navbar-nav(href="#") {{ subtitle }}
      b-navbar-nav(text="Lang", right)
        switcher-lang
      b-navbar-nav(text="Theme", right)
        switcher-color-mode        

//- section.section
//-   .content
//-     h1.sh__title(class="h1") {{ title }}

//-     p.sh__subtitle(v-if="subtitle" class="body2 regular") {{ subtitle }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.sh {
  &__title {
    margin: 0;
  }
  &__subtitle {
    color: $text-secondary;
    margin-top: 16px;
  }
}
</style>
