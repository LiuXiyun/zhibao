<template>
  <div class="login">
    <router-link class="denglu" :to="{path:'/'}" >登陆</router-link>

    <img class="login-icon" src='../../static/img/login-icon.png' alt=""/>
    <img src='../../static/img/login-con.png' alt="" class="login-con"/>
    <input class="login-btn" type="text" placeholder="手机号" v-model="telephone" >

    <div class="yanzhengma">
      <input class="login-btn" type="text" placeholder="验证码"  v-model="code">
      <div @click="getCode">获取验证码</div>
    </div>

    <router-link class="login-btn regist" tag="span" :to="{path:'/home'}"  @click="regist">注册</router-link>
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
      getCode(){
        var _this = this;
        _this.a = 'abc';
        _this.$axios({
          url:'http://114.55.145.65:8080/zbw/i/home/sendvcode',
          method: 'post',
          data: {uid:this.telephone},
          headers:{
            'Content-Type':'application/json'
          }
        }).then(res=>{
          _this.a = res;
          console.log(res);
        })
          .catch(function(err){
            console.log(err)
          });
      },
      regist(){
        var _this = this;
        _this.$axios({
          method:"POST",
          url:_this.global.globalUrl+'/api/i/home/login',
          data:{
            uid:this.telephone,
            vCode:this.code,
          }
        }).then(function(res){
          console.log(_this.telephone)
          console.log(_this.code)
          console.log(res)
          alert(res.data.data);
          window.localStorage.setItem("userId",res.data.data);
          alert(window.localStorage.getItem("userId"))

          //this.props.history.push('./home')
        })
          .catch(function(err){
            console.log(err)
          });
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
    border: 1px solid #000;
    border-radius: 2px;
    font-size: 34px;
    margin: 22px;
    color: #000;
    padding: 10px 40px;
    text-decoration: none;
  }
  .yanzhengma{
    margin: 74px 75px 0 75px;
    display: flex;
  }
  .yanzhengma input{
    display: block;
    width: 60%;
    background-color: rgb(239,128,19);
    border: none;
    color: #fff;
    padding: 0;
    margin: 0;
  }
  .yanzhengma div{
    display: block;
    height: 100px;
    line-height: 100px;
    color: #fff;
    text-align: center;
    font-size: 34px;
    background: rgb(89,87,87);
    width: 40%;
  }
</style>
