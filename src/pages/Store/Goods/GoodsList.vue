<template lang="pug">
  div(class="goods_show" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false")
    GoodsItem(v-for="(goods_item,index) in goods" :goods_item="goods_item" :key="index" class=" animated flipInX ")
</template>

<script>
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import GoodsItem from './GoodsItem'
    export default {
        name: "TheGoodsList",
        data(){
          return {
            goods: "",
            loading: "",
            num: 1,
            size: 5,
            end: false
          }
        },
        components: {
          GoodsItem
        },
        methods: {
          loadMore() {
            if(this.end){
              Toast({
                message: '没用更多数据',
                position: 'bottom',
                duration: 5000
              });
            }else {
              Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
              this.loading = true;
              this.num = this.num + 1;
              setTimeout(() => {
                  this.$api.goods.goodsList(this.num,this.size).then(response => {
                  let result = response.data;
                  let data = result.data;
                  if(data.length<5){
                    this.end=true;
                  }
                  this.goods = this.goods.concat(data);
                })/*.catch(error => {
                  alert("error:"+error);
                });*/
                this.loading = false;
                Indicator.close();
              }, 10);
            }
          }
        },
      mounted(){
        this.$api.goods.goodsList().then(response => {
          let result = response.data;
          this.goods = result.data;
        })/*.catch(error => {
          alert("出错:"+error);
        })*/
      }
    }
</script>

<style scoped lang="less">
</style>
