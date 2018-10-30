<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/xiaoshoudingdan'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      销售订单管理中心
    </p>

    <div class="detail" >
      <div class="group">
        <img src="../../static/img/home_beauty_ campaign_ promotion_icon@2x.png" alt="" class="detailImg">
        <div>
          <p class="p1">美的冰箱  17款 468L</p>
          <p class="p2">金色.KFR-35GW/99SZBP</p>
        </div>
      </div>
      <p class="miaoshu">我是商品简介我是商品简介我是商品简介我是商品简介我是商品简介我是商品简介我是商品简介我是商品简介我是商品简介</p>
    </div>
    <div class="imgLXY">
      <img src="../../static/img/quality_assurance_network_logo_icon@2x.png" alt="">
    </div>

    <div class="priceLXy">
      <p>价格  <span>8888</span>元</p>
      <p>数量  <span>8888</span>台/个</p>
    </div>

    <p class="totlaPrice">
      合计：<span>8888</span>元
    </p>

    <div class="listLXY">
      <p>客户信息</p>
    </div>

    <div class="priceLXy priceLXy1">
      <p>姓名  <span>江山</span></p>
      <p>性别  <span>请输入</span>男/女</p>
    </div>

    <div class="listLXY">
      <p>商品序列号：</p>
      <span>123123123</span>
    </div>

    <div class="listLXY">
      <p>商品序列号：</p>
      <span>123123123</span>
    </div>

    <div class="listLXY">
      <p>销售日期：</p>
      <span>2018-09-09</span>
    </div>

    <div class="listLXY">
      <p>商品序列号：</p>
      <span>123123123</span>
    </div>
    <div class="listLXY">
      <p>质保时长：</p>
      <span>3</span>
    </div>
    <div class="listLXY">
      <p>电话：</p>
      <span>123123123</span>
    </div>
    <div class="listLXY">
      <p>地址：</p>
      <span>123123123</span>
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

  .detail{
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .detail .group{
    display: flex;
    margin-bottom: 20px;
    background: #fff;
    padding: 20px;
    font-size: 30px;
  }
  .detail .group img{
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .detail .group .p1{
    font-size: 30px;
  }
  .detail .group .p2{
    font-size: 26px;
    color: rgb(89,87,87);
  }
  .miaoshu{
    background: #fff;
    line-height: 60px;
    padding: 20px;
    font-size: 27px;
    color: rgb(89,87,87);
  }
  .imgLXY{
    text-align: right;
    padding: 20px;
    margin: 20px 0;
  }
  .imgLXY img{
    width: 70px;
    height: 70px;
  }
  .priceLXy{
    display: flex;
    padding: 0 20px;
    background: #fff;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 90px;
    line-height: 90px;
  }
  .priceLXy1{
    margin-bottom: 20px;
  }
  .priceLXy p{
    width: 50%;
    font-size: 30px;
    padding-left: 20px;
  }
  .priceLXy p span{
    margin-left: 20px;
    margin-right: 20px;
  }
  .priceLXy p:first-child{
    border-right: 2px solid #000;
  }
  .priceLXy p:last-child{
    border-left: 2px solid #000;
  }

  .totlaPrice{
    margin-left: 20px;
    color: #009fe8;
    height: 90px;
    line-height: 90px;
    font-size: 30px;
  }
  .listLXY{
    display: flex;
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    padding: 0 20px;
    margin-bottom: 20px;
    background: #fff;
  }
  .listLXY span{
    color: rgb(89,87,87);
  }
</style>
