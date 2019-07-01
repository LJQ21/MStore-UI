<template lang="pug">
  div
    OrderItem(v-for="(order,index) in orders" :order="order" :key="index" v-on:checkExchange="checkExchange")
</template>

<script>

    import OrderItem from './OrderItem'
    export default {
        name: "MyOrder",
        props: {
          exchange: Number,
          orders: Object
        },
        data(){
          return{
            a: 0
          }
        },
        components: {
          OrderItem
        },
        methods: {
          checkExchange(success){
            this.$emit("toExchange",success);
          }
        }
    }
</script>

<style scoped>

</style>
