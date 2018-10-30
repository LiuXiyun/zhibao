<template>
  <div class="login">
    <img class="login-icon" src="../../static/img/login-icon.png" alt=""/>
    <img src="../../static/img/login-con.png" alt="" class="login-con"/>
    <div class="input-con clearfix">
      <img src="../../static/img/login-person.png" alt="" class="ipt-icon person"/>
      <img src="../../static/img/login-delete.png" alt="" class="delete"/>
      <input type="text" class="login-ipt" placeholder="请输入手机号" />
    </div>
    <div class="input-con">
      <img src="../../static/img/login-lock.png" alt="" class="ipt-icon"/>
      <span class="get-code">获取验证码</span>
      <input type="text" class="login-ipt" placeholder="请输入手机号" />
    </div>
    <div class="login-btn" onClick={this.login}>
      确定
    </div>
    <div class="bot-txt">
      <span class="normal">点击确定，即表示已阅读并同意</span>
      <a href="#/login" class="agreement">《注册服务条款》</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'regist',
    data() {
      return {
        name: '',
        pwd: '',
        code: '',
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    methods: {
      login(){
        console.log(this.props.history)
        this.props.history.push('./home')
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;}
  .login-icon{
    margin: 110px auto 0 auto;
    display: block;
    width: 300px;
  }
  .login-con{
    margin: 30px auto 0 auto;
    width: 400px;
    display: block;
  }
  .input-con{
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #b5b5b6;
    margin: 40px 75px 0 75px;
    font-size: 28px;
  }
  .input-con:first-of-type{
    margin-top: 20px;
  }
  .ipt-icon{
    display: block;
    width: 50px;
    float: left;
  }
  .person{
    width: 40px;
  }
  .login-ipt{
    display: block;
    margin-left: 70px;
    margin-right: 145px;
  }
  .delete{
    float: right;
    width: 30px;
    display: inline-block;
    margin-top: 10px;
  }
  .get-code{
    float: right;
    color: #595757;
  }
  .login-btn{
    margin: 74px 75px 0 75px;
    background-color: #42a00a;
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
  }
  .bot-txt{
    font-size: 24px;
    margin-top: 15px;
    text-align: left;
    margin-left: 75px;
  }
  .normal{
    color: #b5b5b6;
  }
  .agreement{
    color: #42a00a;
  }
  .ling-1 a{
    display: block;
    font-size: 32px;
    line-height: 55px;
    padding-left: 50px;
  }
</style>
