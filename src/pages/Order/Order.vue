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
import MyOrder from "./MyOrder/MyOrder"
export default {
    name: "TheOrder",
    components: {
      MyOrder
      },
      data() {
        return {
          exchange: 0,
          orderList: [],
          page: '',
          size: ''
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
        },
        orders() {
          let orders = this.orderList;
          let result = [];
          for (let i = 0; i < orders.length; i++) {
            if (orders[i].status === this.exchange) {
              let order={};
              order.id=orders[i].id;
              order.status=orders[i].status;
              order.name=orders[i].product.name;
              order.create_time=orders[i].create_time;
              order.modify_time=orders[i].modify_time;
              order.img=orders[i].product.img;
              order.describe=orders[i].product.describe;
              order.price=orders[i].product.price;
              result.push(order);
            }
          }
          return result
        }
      },
  mounted(){
      this.$api.orders.getOrders().then(response => {
      let result = response.data;
      this.orderList=result.data;
    })/*.catch(error => {
      alert("error:"+error);
    })*/
  },
  methods: {
    change(exchange) {
      this.exchange = exchange;
    },
    toExchange(change){
      this.exchange=change;
      this.change(change);
      this.$api.orders.getOrders().then(response => {
        let result = response.data;
        this.orderList=result.data;
      })/*.catch(error => {
        alert("error:"+error);
      })*/
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
