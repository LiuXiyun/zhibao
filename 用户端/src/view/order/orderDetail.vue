<template>
  <div>
    <div class="c-title">
      订单信息填写
      <div class="return">
        <span class="arr-l"></span>
        <span class="return-txt" @click="$router.go(-1)">返回</span>
      </div>
    </div>

    <div class="detail">
      <img src="../../static/img/yanbao.png"/>
      <div>
        <p class="p1">联系人：张女士 188888888</p>
        <p class="p2">地址：北京村</p>
        <p class="p3">上门时间：明天12：00</p>
      </div>
    </div>

    <div class="detail2">
      <img src="../../static/img/yanbao.png"/>
      <div>
        <p class="p1">服务名称</p>
        <p class="p2">服务内容</p>
        <p class="p3">45元</p>
      </div>
    </div>

    <div class="prise2">
      <p>服务费： <span>¥45</span></p>
    </div>

    <div class="bot"></div>
    <div class="bot-final">
      <div class="bf-item or">合计金额：<span>45</span></div>
      <div class="bf-item gree" @click="zhifu">支付</div>
    </div>

  </div>


</template>

<script>

  export default {
    name: "orderDetail",
    data(){
      return{
        id:this.$route.params.orderId,
      }
    },
    mounted() {
      console.log(this.id)
    },
    methods: {
      zhifu(){
        var _this = this;
        _this.$axios({
          url:_this.global.globalUrl+'/i/order/wechatpay',
          method: 'post',
          data: {
            "orderId": this.$route.params.orderId,
          },
          headers:{
            'Content-Type':'application/json',
            'user':window.localStorage.getItem('userId')
          }
        }).then(res=>{
          console.log(res.data)
          if(res.data.success == false){
            return false
          }
         window.open(res.data.data);
        })
          .catch(function(err){
            console.log(err)
          });
      }
    }
  }
</script>

<style scoped>

  .c-title{
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    font-size: 34px;
    position: relative;
    background-color: #42a00a;
    font-weight: 400;
  }
  .return{
    position: absolute;
    top: 0;
    left: 45px;
    z-index: 9;
  }
  .arr-l{
    float: left;
    height: 88px;
    width: 20px;
    margin-right: 30px;
    background-image: url(static/img/arr-l.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .return-txt{
    line-height: 88px;
    float: left;
  }
  .share-img{
    position: absolute;
    height: 30px;
    top: 30px;
    right: 43px;
  }

  .bot{
    margin-bottom: 130px;
  }
  .bot-final{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .bf-item{
    float: left;
    width: 70%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 32px;
  }
  .bf-item span{
    color: #ef8014;
  }
  .or{
    text-align: left;
    background-color: #fff;
    text-indent: 50px;
  }
  .gree{
    width: 30%;
    background-color: #42a00a;
    color: #fff;
  }
  .detail,.detail2{
    background: #fff;
    display: flex;
    padding: 20px;
    margin-top: 20px;
  }
  .detail img{
    width: 50pt;
    height: 50pt;
    margin-right: 20px;
  }
  .detail2 img{
    width: 200px;
    height: 200px;
    margin-right: 40px;
  }
  .prise2{
    margin-top: 20px;
    background: #fff;
    text-align: right;
    font-size: 32px;
    padding: 20px;
  }
  .p1{
    font-size:32px;
    margin-bottom: 10px;
  }
  .p2{
    font-size: 28px;
    margin-bottom: 10px;
  }
  .p3{
    font-size: 28px;
    color: #ef8014;
  }
</style>
