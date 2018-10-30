<template>
  <div class="login">
    <img class="login-icon" src="../static/img/login-icon.png" alt=""/>
    <img src="../static/img/login-con.png" alt="" class="login-con"/>
    <div class="input-con clearfix">
      <img src="../static/img/login-person.png" alt="" class="ipt-icon person"/>
      <img src="../static/img/login-delete.png" alt="" class="delete"/>
      <input type="text" class="login-ipt" placeholder="请输入手机号" v-model="telephone" />
    </div>
    <div class="input-con">
      <img src="../static/img/login-lock.png" alt="" class="ipt-icon"/>
      <span class="get-code"  @click="getCode">获取验证码</span>
      <input type="text" class="login-ipt" placeholder="请输入验证码"  v-model="code"/>
    </div>
    <div class="login-btn"  @click="login">
      登陆
    </div>
    <div class="bot-txt">
      <a href="#/forgetPWD" class="agreement">忘记密码？</a>
    </div>
    <router-link class="login-btn regist" :to="{path:'/regist'}" >
      没有账号，注册一个？
    </router-link>
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
        telephone:'',
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
      login(){
        var _this = this;
        _this.a = 'abc';
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
          _this.b = res;
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
    background-color: rgb(239,128,19);
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    width: 600px;
  }
  .bot-txt{
    font-size: 24px;
    margin-top: 15px;
    text-align: right;
    margin-right: 75px;
  }
  .agreement{
    color: rgb(89,87,87);
  }
  .ling-1 a{
    display: block;
    font-size: 32px;
    line-height: 55px;
    padding-left: 50px;
  }
  .regist{
    position: absolute;
    bottom: 0;
    background: #ccc;
    color: rgb(89,87,87);
  }
</style>
