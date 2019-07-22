<template lang="pug">
  div(class="goods" :style="{ background : activeColor }")
      div(class="goods-picture")
        img(:src="goods_item.img")
      div(class="goods-info")
        div(class="infos")
          h2 {{goods_item.name}}
          div(class="describe") {{goods_item.describe}}
          h6 网薪:
            span(class="price") {{goods_item.price}}
          div(class="infos-footer")
            span 剩余：{{goods_item.number}}
            mt-button(type="primary" size="small" class="primary_btn" @click="buy()") 购买
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
export default {
    name: "GoodsItem",
    props: {
      goods_item: Object
    },
    methods: {
      buy() {
        if (this.goods_item.number === 0) {
          Toast({
            message: '已售罄，正在补货',
            duration: 500
          })
        } else {
          MessageBox({
            $type:'prompt',
            title:'输入您的电话号码',
            message:'请填写您接受兑换码的电话号码',
            closeOnClickModal:true,   //点击model背景层关闭MessageBox
            showCancelButton:true,   //显示取消按钮
            inputPattern:/^1[3456789]\d{9}$/,    //正则条件
            inputErrorMessage:'请输入正确的电话号码',
            showInput:true
          }).then(({ value, action }) => {
            /* value 为填写的值，进行下一步操作*/
            this.$api.goods.buyGoods(value,this.goods_item.id, this.goods_item.price).then(response => {
              Toast({
                message: '购买成功',
                iconClass: 'iconfont icon-success'
              })
            })/*.catch(err => {
              Toast({
                message: '购买失败:'+err,
              })
            })*/
          });
        }
      }
    },
    computed: {
      activeColor() {
        return this.goods_item.number===0 ? "#ecf0f1" : 'white'
      }
    }
}
</script>

<style scoped lang="less">
.goods{
  animate-iteration-count: 10;
  // background-color: white;
  display: flex;
  .goods-picture{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 150px;
    width: 150px;
    img{
      display: block;
      flex-grow: 1;
      margin-left: 10%;
      border-radius: 5%;
      width: 130px;
      height: 130px;
    }
  }
  .goods-info{
    width: 200px;
    height: 150px;
    flex-grow: 1;
    .infos{
      color: #1a2a3a;
      margin-left: 15px;
      margin-top: 15px;
      width: 170px;
      height: 130px;
      .describe{
        //white-space:nowrap;
        margin-top: 2%;
        width:80%;
        height: 25%;
        overflow:hidden;
        text-overflow: clip;
        color: #4a5a6a;
      }
      h2{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      h6{
        color: red;
        margin-top: 10px;
        .price{
          font-size: 21px;
        }
      }
      .infos-footer{
        display: flex;
        justify-content: center;
        .primary_btn{
          display: block;
          margin-left: 30%;
        }
        span{
          margin-top: 10%;
          font-size: 15px;
          color: #4a5a6a;
        }
      }
    }
  }
}
</style>
