<template>
  <div class="login">
    <router-link class="denglu" :to="{path:'/'}" >登陆</router-link>

    <img class="login-icon" src='../../static/img/login-icon.png' alt=""/>
    <input class="login-btn" type="text" placeholder="手机号">
    <div class="login-btn yanzhengma">
      <input type="text" placeholder="验证码">
      <p>获取验证码</p>
    </div>
    <router-link class="login-btn regist" tag="span" :to="{path:'/replacePWD'}" >下一步</router-link>
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
    margin: 200px auto 0 auto;
    display: block;
    width: 300px;
  }
  .login-con{
    margin: 30px auto 0 auto;
    width: 400px;
    display: block;
  }
  .login-btn{
    margin: 74px 75px 0 75px;
    background-color:transparent;
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    display: block;
    width: 600px;
    border:  1px solid #000;
  }
  .ling-1 a{
    display: block;
    font-size: 32px;
    line-height: 55px;
    padding-left: 50px;
  }
  .regist{
    background: rgb(239,128,19);
    border: none;
  }
  input{
    display: block;
    color: #000;
  }
  .denglu{
    position: absolute;
    top: 22px;
    left: 22px;
    border: 1px solid #000;
    border-radius: 2px;
    font-size: 34px;
    margin: 22px;
    color: #000;
    padding: 10px 40px;
    text-decoration: none;
  }
  .yanzhengma{
    border: none;
    display: flex;
  }
  .yanzhengma input{
    border: 1px solid #000;
  }
  .yanzhengma p{
    width: 100%;
    background: rgb(239,128,19);
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
