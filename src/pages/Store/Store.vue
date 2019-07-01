<template lang="pug">
  div
    div(class="head")
      //-顶部栏
      mt-header(fixed title="网薪商城" class="header")
    //-轮播图
    mt-swipe(:auto="4000" class="my-swipe")
      mt-swipe-item(class="slide1")
        img(src="https://img.alicdn.com/simba/img/TB16fk2cEGF3KVjSZFmSuvqPXXa.jpg")
      mt-swipe-item(class="slide2")
        img(src="https://img.alicdn.com/simba/img/TB1Yq8rcGWs3KVjSZFxSuuWUXXa.jpg")
      mt-swipe-item(class="slide3")
        img(src="//img.alicdn.com/tfs/TB1SpSpcq1s3KVjSZFAXXX_ZXXa-520-280.jpg_q90_.webp")
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
