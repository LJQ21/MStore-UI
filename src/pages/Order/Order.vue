<template lang="pug">
    div(class="order")
      div(class="head")
        //-顶部栏
        mt-header(fixed title="我的订单" class="header")
        //-选项栏
        div(class="tab")
          div(class="tab-item")
            a( :style="{ color: activeColor1, fontSize: fontSize1 + 'px' }" @click="change(0)") 未兑换
          div(class="tab-item")
            a( :style="{ color: activeColor2, fontSize: fontSize2 + 'px' }" @click="change(1)") 已兑换
      div(class="main")
        //订单列表
        MyOrder(:exchange="exchange" :orders="orders" v-on:toExchange="toExchange")
</template>

<script>
    import axios from 'axios'
    import MyOrder from "./MyOrder/MyOrder"
    export default {
        name: "TheOrder",
        components: {
          MyOrder
          },
          data() {
            return {
              exchange: 0,
              orders: []
            }
          },
          computed: {
            activeColor1() {
              return this.exchange?'rgb(77, 85, 93)':'#02a774'
            },
            fontSize1() {
              return this.exchange?'14':'18'
            },
            activeColor2() {
              return this.exchange?'#02a774':'rgb(77, 85, 93)'
            },
            fontSize2() {
              return this.exchange?'18':'14'
            }
          },
      mounted(){
          this.$api.orders.getOrders(2019).then(response => {
          let result = response.data;
          let orders=result.data;
          for(let i=0;i<orders.length;i++){
            if(orders[i].status===this.exchange){
              let order={};
              order.id=orders[i].id;
              order.status=orders[i].status;
              order.img=orders[i].product.img;
              order.describe=orders[i].product.describe;
              order.price=orders[i].product.price;
              this.orders.push(order);
            }
          }
        }).catch(error => {
          alert("error:"+error);
        })
      },
      methods: {
        change(exchange) {
          this.exchange = exchange;
          this.$api.orders.getOrders(2019).then(response => {
            let result = response.data;
            let orders = result.data;
            this.orders=[];
            for (let i = 0; i < orders.length; i++) {
              if (orders[i].status === exchange) {
                let order={};
                order.id=orders[i].id;
                order.status=orders[i].status;
                order.img=orders[i].product.img;
                order.describe=orders[i].product.describe;
                order.price=orders[i].product.price;
                this.orders.push(order);
              }
            }
          }).catch(error => {
            alert("error:"+error);
          })
        },
        toExchange(change){
          this.exchange=change;
          this.change(change);
        }
      }
    }
</script>

<style scoped lang="less">
.order{
  .tab{
    padding-top: 40px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    //background: #dddddd;
    //bottom-border: 1px rgba(7, 17, 27, 0.1);
    .tab-item{
      float: left;
      width: 33.33333%;
      text-align: center;
      font-size: 14px;
      //color: rgb(77, 85, 93);
      a{
        display: block;
        position: relative;
        /*&.router-link-active{
            color: #02a774;
          &::after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 1px;
            width: 35px;
            height: 2px;
            transform: translateX(-50%);
            background: #02a774;
          }
        }*/
      }
    }
  }
}
</style>
