<template lang="pug">
  div(class="footer_guide")
    //- 底部栏
    mt-tabbar(v-model="selected" id="tabs" fixed)
      mt-tab-item(id="tab1" @click.native="goTo(`/`)" )
        // router-link(to="/")
        span(class="iconfont icon-store")
      mt-tab-item(id="tab2" @click.native="goTo(`/order`)" )
        // router-link(to="/order")
        span(class="iconfont icon-order")
      mt-tab-item(id="tab3" @click.native="goTo(`/person`)" )
        // router-link(to="/person")
        span(class="iconfont icon-person")
</template>

<script>
    export default {
        name: "FooterGuide",
        methods: {
          goTo(path){
            this.$router.replace(path)
          }
        },
        computed: {
          selected() {
            if("/"===this.$route.path){
              return "tab1"
            }else if("/order"===this.$route.path){
              return "tab2"
            }else if("/person"===this.$route.path){
              return "tab3"
            }
          }
        }
    }
</script>

<style scoped>

</style>
