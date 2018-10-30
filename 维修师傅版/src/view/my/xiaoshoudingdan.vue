<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      销售订单管理中心
    </p>

    <div class="calendar">
      <div>
        <img src="../../static/img/calendar_on_the_right_icon@2x.png"/>
        <p>年月日</p>
        <img src="../../static/img/down_arrow_icon@3x.png" alt="">
      </div>
      <div>
        <img src="../../static/img/calendar_on_the_right_icon@2x.png"/>
        <p>年月日</p>
        <img src="../../static/img/down_arrow_icon@3x.png" alt="">
      </div>
    </div>
    <div class="total">
      <p>本月订单： <span>200</span>单    共计：<span>¥85000</span></p>
    </div>

    <router-link class="list"  :to="{path:'/xiaoshoudingdanxiangqing'}" >
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
      <div class="connectLXY">
          <span>李女士</span>
          <span>电话：188 8888 8888</span>
          <img src="../../static/img/quality_assurance_network_logo_icon@2x.png" alt="">
          <span>查看详情</span>
      </div>
    </router-link>

    <router-link class="list"  :to="{path:'/messageDetail'}" >
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
      <div class="connectLXY">
        <span>李女士</span>
        <span>电话：188 8888 8888</span>
        <img src="../../static/img/quality_assurance_network_logo_icon@2x.png" alt="">
        <span>查看详情</span>
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

  .calendar{
    width: 690px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .calendar div{
    width: 340px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .calendar div:first-child{
    margin-right: 10px;
  }
  .calendar img:first-child{
    width: 68px;
    height: 60px;
  }
  .calendar img:last-child{
     width: 30px;
     height: 20px;
      margin-right: 10px;
   }
  .total{
    width: 100%;
    background: #fff;
    height: 60px;
    line-height: 60px;
    color: #009fe8;
    margin-bottom: 20px;
  }
  .total p{
    margin-left: 30px;
    font-size: 30px;
  }
  .list{
    margin-bottom: 20px;
    display: block;
  }

  .detail{
    background: #fff;
    padding: 30px;
    margin-bottom: 10px;
  }
  .detail .group{
    display: flex;
    margin-bottom: 20px;
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
  .connectLXY{
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 32px;
    height: 90px;
    line-height: 90px;
  }
  .connectLXY img{
    width: 60px;
    height: 60px;
  }
  .connectLXY span:last-child{
    color: rgb(89,87,87);
  }
  .miaoshu{
    color: rgb(89,87,87);
    line-height: 50px;
    font-size: 25px;
  }
</style>
