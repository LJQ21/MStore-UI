<template lang="pug">
  div
    div(class="head")
      //-顶部栏
      mt-header(fixed title="贵民-网薪商城" class="header")
    //-轮播图
    mt-swipe(:auto="4000" class="my-swipe")
      mt-swipe-item(class="slide1")
        img(src="@/assets/homePage/1553246961521161.jpg")
      mt-swipe-item(class="slide2")
        img(src="@/assets/homePage/1553246961521162.png")
      mt-swipe-item(class="slide3")
        img(src="@/assets/homePage/1556606725838001.png")
    //-主体商品列表
    div(class="main")
      GoodsList
</template>

<script>
    import GoodsList from './Goods/GoodsList'
    export default {
        name: "TheStore",
        components: {
          GoodsList
        }
    }
</script>

<style scoped lang="less">
  .head{
    background-color: #6699ff;
  }
  .my-swipe {
    padding-top: 40px;
    height: 200px;

    .slide1,.slide2,.slide3{
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
