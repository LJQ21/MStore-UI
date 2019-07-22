<template lang="pug">
  div(class="order  animated bounceInUp")
    div(class="order-head")
      span 订单号:{{order.id}}
      span(class="order-state") {{order.status?"已兑换":"未兑换"}}
    div(class="order-body")
      div(class="order-picture")
        img(:src="order.img" height="100px" width="100px")
      div(class="order-info")
        span {{order.describe}}
      div(class="order-price")
        div ￥ {{order.price}}
        mt-button(type="primary" size="small" class="primary_btn" class="btn" v-on:click="exchange(order.id)" ) {{order.status?"详情":"兑换"}}
</template>

<script>
    import { MessageBox, Toast } from 'mint-ui'
    export default {
        name: "OrderItem",
        props: {
          order: Object,
        },
        methods: {
          exchange(id) {
            if(this.order.status === 0){
              MessageBox.prompt('请输入商品兑换码和管理员账号').then(({value,active}) => {
                this.$api.orders.tradeOrder(id,value).then(response => {
                  Toast({
                    message: '兑换成功',
                    iconClass: 'iconfont icon-success',
                  });
                  this.$emit("checkExchange",1);
                })/*.catch(error => {
                  Toast({
                    message: '兑换失败'+error
                  })
                })*/
              });
            }else {
              this.$emit("checkPopup",this.order)
            }
          }
        }
    }
</script>

<style scoped lang="less">
.order{
  background: #fff;
  border-radius: 3%;
  margin: 10px;
  .order-head{
    display: flex;
    justify-content: space-between;
    span{
      display: block;
      margin: 3%;
    }
    .order-state{
      color: red;
    }
  }
  .order-body{
    display: flex;
    justify-content: flex-start;
    color: #1a2a3a;
    .order-picture{
      margin: 2%;
    }
    .order-info{
      overflow:hidden;
      height: 100px;
      width: 40%;
      margin: 2%;
    }
    .order-price{
      margin: 2%;
      .btn{
        margin-top: 70%;
      }
    }
  }
}
</style>
