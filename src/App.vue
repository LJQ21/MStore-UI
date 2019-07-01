<template lang="pug">
  div(id="app")
    router-view
    FooterGuide
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
