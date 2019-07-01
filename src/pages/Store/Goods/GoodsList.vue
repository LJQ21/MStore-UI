<template lang="pug">
  div(class="goods_show" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0.1" infinite-scroll-immediate-check="false")
    GoodsItem(v-for="(goods_item,index) in goods" :goods_item="goods_item" :key="index" class=" animated flipInX ")
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios'
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
                axios.get('http://127.0.0.1:8080/products',{
                  params: {
                    num: this.num,
                    size: this.size
                  }
                }).then(response => {
                  let result = response.data;
                  let data = result.dataList;
                  if(data.length<5){
                    this.end=true;
                  }
                  this.goods = this.goods.concat(data);
                }).catch(error => {
                  alert("出错了");
                });
                this.loading = false;
                Indicator.close();
              }, 2500);
            }
          }
        },
      mounted(){
        axios.get('http://127.0.0.1:8080/products',{
          params: {
            num: 1,
            size: 5
          }
        }).then(response => {
          let result = response.data;
          this.goods = result.dataList;
        }).catch(error => {
          alert("出错了");
        })
      }
    }
</script>

<style scoped lang="less">
</style>
