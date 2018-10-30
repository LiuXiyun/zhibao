<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/home'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      添加新员工
    </p>

    <div class="input">
      <div>
        <label for="">姓名</label>
        <input type="text" placeholder="请输入姓名">
      </div>
      <div>
        <label for="">手机号</label>
        <input type="text" placeholder="请输入手机号">
      </div>
    </div>
    <router-link class="login-btn" tag="span" :to="{path:'/home'}" >手机号码</router-link>

    <footComponent :idx='0'></footComponent>
  </div>
</template>

<script>
  import footComponent from "../../components/footer";	// footer


  export default {
    name: 'home',
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

    },
    components:{
      footComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .title{
    height: 88px;
    background: rgb(17,139,226);
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
  .input div{
    background: #fff;
    margin: 20px 0 0 0;
    height: 80px;
    display: flex;
    line-height: 80px;
    font-size: 30px;
  }
  .input div label{
    width: 200px;
    text-align: center;
  }
  .input div input{
    background: transparent;
    height: 80px;
    border:none;
    box-shadow: none ;
    width: 100%;
  }

  .login-btn{
    margin: 40px 75px 0 75px;
    background-color:#0099ff;
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    display: block;
    width: 600px;
  }
</style>
