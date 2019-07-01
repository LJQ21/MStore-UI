<template lang="pug">
  div(class="goods")
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
            mt-button(type="primary" size="small" class="primary_btn" @click="buy") 购买
</template>

<script>
    import qs from 'qs'
    import axios from 'axios'
    import { MessageBox, Toast } from 'mint-ui'
    export default {
        name: "GoodsItem",
        props: {
          goods_item: Object
        },
        methods: {
          buy() {
            MessageBox.confirm('确定执行此操作?').then(action => {
              axios.post("http://127.0.0.1:8080/order",qs.stringify({
                product_id: 4,
                yb_userid: 2019,
                yb_username: "李建强",
                yb_usernick: "小雨",
                yb_sex: "男",
                yb_money: "98",
                create_user: "李建强",
                modify_user: "李建强"
              })).then(response => {
                    Toast({
                      message: '购买成功',
                      iconClass: 'iconfont icon-success'
                    })
              }).catch(error => {
                  Toast({
                    message: '购买失败'
                  })
                })
            });
          }
        }
    }
</script>

<style scoped lang="less">
.goods{
  animate-iteration-count: 10;
  background-color: white;
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
      width: 160px;
      height: 130px;
      .describe{
        //white-space:nowrap;
        margin-top: 2%;
        width:80%;
        height: 25%;
        overflow:hidden;
        text-overflow: clip;
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
        }
      }
    }
  }
}
</style>
