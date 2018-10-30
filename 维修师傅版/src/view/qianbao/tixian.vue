<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      提现
    </p>

    <div class="info-item mt20">
      <span>为保障您的资金安全，仅提现到 <span>本人</span>银行卡</span>
    </div>

    <div class="info-item mt20">
      <span class="fl">账户姓名</span>
      <div class="name">张三</div>
    </div>

    <div class="info-item mt20">
      <p class="arr arr1" @click="$router.push('/xiugaikaihuhang')">请选择</p>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">开户行:</span>
      <p @click="$router.push('/xiugaikaihuhang')">招商银行</p>
    </div>

    <div class="info-item mt20">
      <span class="fl">银行账号</span>
      <div class="zhanghao">
        <p>12312313</p>
        <div></div>
      </div>
    </div>

    <div class="yue">
      <p>当前余额 <span>1200.0</span>元</p>
      <p>当前余额 <span>1200.0</span>元 <span>手续费0.1%</span></p>
    </div>
    <div class="info-item mt20">
      <span class="fl">提现金额</span>
      <input type="text" class="jine">
      <span>手续费 <span>1.00</span>元</span>
    </div>
    <div class="info-item mt20">
      <span class="fl">验证码</span>
      <input type="text">
      <button>获取验证码</button>
    </div>
    <button class="go" @click="$router.push('/tixian2')">下一步</button>
  </div>
</template>

<script>
  import footComponent from "../../components/footer";	// footer

  export default {
    name: "my",
    components:{
      footComponent
    },
    methods:{
      getCode(){
        this.$axios({
          method:"POST",
          url:'/api/i/worker/getlist',
          data:{
            pageIndex:1
          }
        }).then(function(res){
          console.log(res)
        })
          .catch(function(err){
            console.log(err)
          });
      },
      goList(){
        console.log(1)
        this.$router.push({
          path: '/xiaoshoudingdan',
        });
      }
    }
  }
</script>

<style scoped>

  .title{
    height: 88px;
    background: #ef8013;
    text-align: center;
    font-size: 40px;
    line-height: 88px;
    color: #fff;
    margin: 0;
  }


  .return{
    position: absolute;
    left: 25px;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
  }
  .arr-l{
    float: left;
    height: 40px;
    /*width: 30px;*/
    margin-right: 30px;
  }
  .myContent{
    font-size: 32px;
  }
  .info-item{
    background-color: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    line-height: 90px;
    font-size: 32px;
    color: #595757;
  }
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 22px;
  }
  .nor-img{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 30px;
    margin-top: 24px;
  }
  .mt21>span{
    width: 200px;
  }
  .mt21>span>span{
    background: #ef8013;
  }
  .labelList span{
    display: inline-block;
    font-size: 30px;
    margin-top: 10px;
    margin-right: 20px;
  }
  .info-item button{
    width: 45%;
    font-size: 30px;
    border:none;
    color: #fff;
    padding: 10px 20px;
  }
  .margin{
    margin-bottom: 50px;
  }
  .mt20{
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .mt20 button{
    height: 100%;
    widows: 200px;
    background: #595757;
    color: #fff;
    font-size: 35px;
  }
  .go{
    width: 650px;
    border: none;
    height: 100px;
    line-height: 100px;
    font-size: 35px;
    margin: 0 auto;
    background: #ef8013;
    margin-top: 80px;
    color: #fff;
    display: block;
  }
  .mt20 div.name{
    width: 400px;
    font-size: 30px;
    background: #eee;
    color: #595757;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .fl{
    width: 200px;
  }
  .mt20 input{
    display: block;
    width: 300px;
    font-size: 30px;
    background: #eee;
    color: #595757;
    text-align: center;
    height: 50px;
    line-height: 50px;
    text-align: right;
    margin-right: 20px;
  }
  .arr1{
    right: 100px;
    width: auto;
  }
  .jine{
    width: 200px;
  }
  .zhanghao{
    border:1px solid #000;
    padding: 0 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0;
  }
  .zhanghao div{
    background: #ef8013;
    width: 89px;
    height: 88px;
  }
  .yue{
    padding: 40px 30px;
  }
  .yue p:first-child{
    margin-bottom: 20px;
  }
  .yue p span{
    color: #ef8013;
    font-size: 35px;
  }
</style>
