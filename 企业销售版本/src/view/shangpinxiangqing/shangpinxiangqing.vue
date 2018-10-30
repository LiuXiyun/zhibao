<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/home'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      冰箱详情
    </p>

    <div class="input">
      <div class="detail">
        <img src="../../static/img/home_beauty_ campaign_ promotion_icon@2x.png" alt="" class="detailImg">
        <div>
            <p class="p1">美的冰箱 <span>17</span>款  <span>468L</span></p>
            <p class="p2">型号型号型号</p>
        </div>
      </div>
      <div>
        <p>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</p>
      </div>
    </div>
    <router-link class="login-btn" tag="span" :to="{path:'/home'}" >
      <img src="../../static/img/new_sales_order_icon@2x.png" alt="" class="img">
      <span>新增销售单</span>
    </router-link>

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
  .p2{
    font-size: 25px;
    color: rgb(89,87,87);
  }
</style>
