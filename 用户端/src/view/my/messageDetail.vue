<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/message'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      消息详情
    </p>

    <div class="input" >
      <div class="detail" >
        <img src="../../static/img/i_notice_icon@3x.png" alt="">
        <div class="content">
          <p class="p1">通知标题 <span>09-09 10：10</span></p>
        </div>
      </div>
    </div>

    <div class="input content">
       消息详情
    </div>
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
    width: 100%;
  }
  .input .detail span span{
    background: #ef8013;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  .input .detail img{
    width: 40px;
    margin-left: 10px;
    margin-right: 20px;
  }
  .p1{
    color: #000;
  }
  .p1 span{
    font-size: 25px;
    color: #595757;
    float: right;
  }
  .p2{
    font-size: 25px;
    color: rgb(89,87,87);
    height: 60px;
    line-height: 60px;
    overflow: hidden;
  }
  .input.content{
    margin-top: 20px;
    background: #fff;
    min-height: 500px;
    padding: 20px;
    font-size: 30px;
  }
</style>
