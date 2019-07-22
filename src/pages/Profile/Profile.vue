<template lang="pug">
  div(class="profile")
    div(class="head")
      //- 头像
      div(class="head-portrait")
        img( :src="this.$store.state.user.yb_userhead")
      div(class="head-info")
        h2 {{ this.$store.state.user.yb_username }}
        p 网薪:{{ this.$store.state.user.yb_money }}
        p 经验:{{ this.$store.state.user.yb_exp }}
        p 学校:{{ this.$store.state.user.yb_schoolname }}
    div(class="body")
      mt-cell(title="兑换方法" is-link=true class="body-cell" @click.native="tip=!tip")
      mt-cell(title="订单疑问" is-link=true class="body-cell" @click.native="question=!question")
      mt-cell(title="问题反馈" is-link=true class="body-cell" @click.native="feedback")
      mt-cell(title="建议意见" is-link=true class="body-cell" @click.native="suggestions")
      mt-cell(title="bug反馈" is-link=true class="body-cell" @click.native="bugFeedback")
      mt-cell(title="联系我们" is-link=true class="body-cell" @click.native="connectUs=!connectUs")
      mt-popup(v-model="tip" position="right" class="convertTip" closeOnClickModal="false")
        div(class="tipBody" style="width:100%")
          img(src="../../assets/profile/mmexport1563593791650.jpg" class="tipImage")
        mt-button(type="primary" size="large" @click="tip = !tip") 我了解了
      mt-popup(v-model="question" popup-transition="popup-fade" class="tips")
        h1 Q:购买成功后未收到兑换码？
        p 请凭订单号到学生活动中心二楼2001室找易班工作人员，也可联系我们
        h1 Q:购买成功后收到兑换码但是未找到订单？
        p 请直接联系我们
      mt-popup(v-model="connectUs" popup-transition="popup-fade" class="tips")
        p 开发小白能力有限，体验不佳请谅解，提点指导小白反馈问题的，欢迎联系
        h1 开发小白QQ号
        p 小鑫：
          a 2568824264
        p 小强：
          a 2652214165
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name: "ThePerson",
    data() {
      return {
        question: false,
        connectUs: false,
        tip: false
      }
    },
    methods: {
      feedback() {
        Toast('开发小白技术有限,如您对商城的体验不佳，尽请谅解，反馈问题，请点击联系我们,找到小白')
      },
      suggestions() {
        Toast('如您有好的建议与意见，请联系易班工作人员')
      },
      bugFeedback(){
        Toast('如您找到了该网站的bug，请点击联系我们找到开发小白，谢谢')
      },
      close(){
        this.tip = false
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
        height: 110px;
        width: 110px;
        border-radius: 50%;
      }
    }
    .head-info{
      height: 100px;
      width: 140px;
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
    .convertTip{
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    .tips{
      width: 200px;
      height: 200px;
      border-radius: 5%;
      h1{
        margin: 6%;
      }
      p{
        font-size: 14px;
        color: #1a2a3a;
        margin: 8%;
      }
    }
    .tipBody{
      display: inline-block;
      width: 100%;
      height: 90%;
      .tipImage{
        //height="1135" width="610"
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
