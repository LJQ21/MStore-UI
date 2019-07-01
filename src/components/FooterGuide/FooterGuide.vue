<template lang="pug">
  div(class="footer_guide")
    //- 底部栏
    mt-tabbar(v-model="selected" id="tabs" fixed="true")
      mt-tab-item(id="tab1")
        router-link(to="/")
          span(class="iconfont icon-store")
      mt-tab-item(id="tab2")
        router-link(to="/order")
          span(class="iconfont icon-order")
      mt-tab-item(id="tab3")
        router-link(to="/person")
          span(class="iconfont icon-person")
</template>

<script>
    export default {
        name: "FooterGuide"
    }
</script>

<style scoped>

</style>
