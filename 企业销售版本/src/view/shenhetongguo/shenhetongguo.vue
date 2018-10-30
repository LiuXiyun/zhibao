<template>
  <div class="login">

    <router-link class="denglu" :to="{path:'/regist'}" >
      <img src="../../static/img/click_the_return_on_the_left_icon.png" alt="">
    </router-link>

    <img class="login-icon" src='../../static/img/login-icon.png' alt=""/>
    <img src='../../static/img/login-con.png' alt="" class="login-con"/>
    <p>审核通过</p>
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
    background: rgb(0,159,232);
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
    font-size: 34px;
    margin: 22px;
    color: #000;
    text-decoration: none;
  }
  p{
    width: 100%;
    font-size: 34px;
    text-align: center;
    color:rgb(87,97,87);
  }
</style>
