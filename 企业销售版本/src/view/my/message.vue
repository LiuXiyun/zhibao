<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
       消息中心详情
    </p>

    <router-link class="input"  :to="{path:'/messageDetail'}" >
      <div class="detail" >
        <div class="content">
          <p class="p1">信息等待确认 <span>2018年6月3日</span></p>
          <p class="p2">您的代理人<span>李鹏</span>需要与您的信息确认</p>
        </div>
        <span>
          <span></span>查看详情
        </span>
        <img src="../../static/img/click_on_the_ on_the_ right_icon@2x.png" alt="">
      </div>
    </router-link>

  </div>
</template>

<script>


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

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../../static/css/index.css';*/


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


  .input>div{
    background: #fff;
    margin: 20px 0 0 0;
    display: flex;
    font-size: 30px;
    line-height: 50px;
    padding: 0 20px;
    align-items: center;
  }
  .input div.detail{
    background: #fff;
    display: flex;
    font-size: 30px;
    padding: 28px;
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

  .input>div p{
    margin: 0;
    font-size: 30px;
  }

  .input .detail .content{
    width: 500px;
  }
  .input .detail span{
    color: rgb(0,159,232);
    font-size: 12pt;
  }
  .input .detail span span{
    background: rgb(0,159,232);
    height: 10px;
    width: 10px;
    border-radius: 10px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  .input .detail img{
    width: 15px;
    margin-left: 10px;
  }
  .login-btn{
    margin: 40px 75px 0 75px;
    background-color:#0099ff;
    height: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 34px;
    text-align: center;
    display: flex;
    width: 600px;
    justify-content: center;
    align-items: center;
  }
  .img{
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .detailImg{
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .p1{
    color: #000;
  }
  .p2{
    font-size: 25px;
    color: rgb(89,87,87);
  }
</style>
