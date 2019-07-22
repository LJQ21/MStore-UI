<template lang="pug">
  div(id="app")
    div(class="body")
      router-view
    div(class="foot")
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

<style lang="less">
#app{
  .body{
    height: 100%;
    margin-bottom: 40px;
  }
}
</style>
