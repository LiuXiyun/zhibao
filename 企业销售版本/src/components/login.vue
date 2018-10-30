<template>
  <div class="login">
    <img class="login-icon" src='../static/img/login-icon.png' alt=""/>
    <img src='../static/img/login-con.png' alt="" class="login-con"/>
    <router-link class="login-btn" tag="span" style="cursor: pointer;" :to="{path:'/login'}" >登陆</router-link>

    <router-link class="login-btn regist" tag="span" style="cursor: pointer;" :to="{path:'/regist'}" >注册</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
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
    regist(){
      console.log(this.props.history)
      this.props.history.push('./regist')
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
    background-color: rgb(239,128,19);
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    display: block;
  }
  .ling-1 a{
    display: block;
    font-size: 32px;
    line-height: 55px;
    padding-left: 50px;
  }
  .regist{
    background: rgb(0,159,232);
  }
</style>
