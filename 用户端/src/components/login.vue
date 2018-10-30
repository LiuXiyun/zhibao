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
      <span class="get-code"  @click="getCode" v-if="fasongyanzhengma == false ">获取验证码 </span>
      <span class="get-code" v-if="fasongyanzhengma == true ">(已发送 <span>{{num}})</span></span>
      <input type="text" class="login-ipt" placeholder="请输入验证码"  v-model="code"/>
    </div>
    <div class="login-btn"  :class="{act:loginActive==true}" @click="login">
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
        telephone:'',
        num:600,
        fasongyanzhengma:false,
        loginActive:false
      }
    },
    methods: {
      getCode(){
        var _this = this;
        _this.$axios({
          url:_this.global.globalUrl+'/i/home/sendvcode',
          method: 'post',
          data: {uid:_this.telephone},
          headers:{
            'Content-Type':'application/json'
          }
        }).then(res=>{
          if(res.data.msg == '手机号不能为空'){
            return false
          }
          setInterval(function () {
            if(_this.num > 0){
              _this.fasongyanzhengma = true;
              _this.num = _this.num - 1;
            }else{
              _this.fasongyanzhengma = false;
              return false;
            }
          },1000)
        })
          .catch(function(err){
          console.log(err)
        });
      },
      login(){

        window.localStorage.setItem("userId",'49D230FFA62A4FE2AA932812C1B50EA7');
        this.$router.push({
          path: '/home',
        });

        return false

        var _this = this;
        if(_this.loginActive  == true){
          return false
        }

        if(!(/^1(3|4|5|7|8)\d{9}$/.test(_this.telephone))){
          return false;
        }
        _this.loginActive = true;

        _this.$axios({
          method:"post",
          url:_this.global.globalUrl+'/i/home/login',
          data:{
            uid:_this.telephone,
            vCode:_this.code
          },
          headers:{
            'Content-Type':'application/json'
          }
        }).then(function(res){
          if(res.data.msg == '验证码错误'){
            _this.loginActive = false;
          }
          else{
            window.localStorage.setItem("userId",res.data.data);
            _this.$router.push({
              path: '/home',
            });
          }
        })
          .catch(function(err){
            _this.loginActive = false;
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
    background-color: #42a00a;
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    width: 600px;
  }
  .regist{
    position: absolute;
    bottom: 0;
    background: #ccc;
    color: rgb(89,87,87);
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
  .act{
    background: #595757;
  }
</style>
