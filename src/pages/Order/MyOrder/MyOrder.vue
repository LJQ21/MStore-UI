<template lang="pug">
  div(class="my-order")
    OrderItem(v-for="(order,index) in orders" :order="order" :key="index" v-on:checkExchange="checkExchange" v-on:checkPopup="checkPopup")
    mt-popup(v-model="orderTip" popup-transition="popup-fade" class="tips")
      div(class="orderTipImg")
        img(:src="showOrder.img")
      div(class="orderTipInfo")
        h1 订单号：
          span {{ showOrder.id }}
        p 商品名称：
          span {{ showOrder.name }}
        p(class="des") {{ showOrder.describe }}
        p 购买时间：
          span {{ showOrder.create_time }}
        p 兑换时间：
         span {{ showOrder.modify_time }}
</template>

<script>
  import OrderItem from './OrderItem'
  export default {
      name: "MyOrder",
      props: {
        exchange: Number,
        orders: Object
      },
      data() {
        return {
          orderTip: false,
          showOrder: {}
        }
      },
      components: {
        OrderItem
      },
      methods: {
        checkExchange(success){
          this.$emit("toExchange",success);
        },
        checkPopup(order){
          this.orderTip = true;
          this.showOrder = order;
        }
      }
  }
</script>

<style lang="less" scoped>
.my-order{
  .tips{
    border-radius: 3%;
    .orderTipImg{
      width: 300px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .orderTipInfo{
      padding: 5%;
      span{
        color: #e74c3c;
      }
      p{
        margin: 4px;
      }
      .des{
        color: #4a5a6a;
      }
    }
  }
}
</style>
