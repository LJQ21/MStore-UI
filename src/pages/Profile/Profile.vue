<template lang="pug">
  div(class="profile")
    div(class="head")
      //-头像
      div(class="head-portrait")
        img(src="http://img02.fs.yiban.cn/11762600/avatar/user/200")
      div(class="head-info")
        h2 李建强
        p ￥369
    div(class="body")
      mt-cell(title="兑换方法" is-link=true class="body-cell")
      mt-cell(title="问题反馈" is-link=true class="body-cell")
      mt-cell(title="建议意见" is-link=true class="body-cell")
      mt-cell(title="订单疑问" is-link=true class="body-cell")
      mt-cell(title="bug反馈" is-link=true class="body-cell")

</template>

<script>
    import Toast from 'mint-ui'
    export default {
        name: "ThePerson",
        methods: {
          tips(num) {
            alert('a');
            if(num===1){
              Toast('请到XXX处找活动人员进行兑换');
            }
          }
        }
    }
</script>

<style scoped lang="less">
.profile{
  .head{
    height: 200px;
    background: #34495E;
    border-radius: 0 0 5% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    .head-portrait{
      img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
    }
    .head-info{
      height: 100px;
      width: 130px;
      margin-left: 3%;
      h2{
        margin-top: 10%;
        color: #ECF0F1;
        font-size: 18px;
      }
      p{
        margin-top: 5%;
        color: #BDC3C7;
        font-size: 16px;
      }
    }
  }
  .body{
    padding: 2%;
    .body-cell{
      height: 60px;
    }
  }
}
</style>
