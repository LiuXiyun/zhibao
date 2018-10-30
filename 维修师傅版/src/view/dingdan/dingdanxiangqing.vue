<template>
  <div class="my-top">
    <p class="title">
      <router-link class="return" :to="{path:'/home'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      订单详情
      <img src="../../static/img/white_contact_customer_service_icon@2x.png" alt="" class="bell" @click="$router.push('/message')"/>
    </p>

    <div class="bianhao">
      <p>订单编号 <span>1234567890</span></p>
      <p>已接单</p>
    </div>

    <div class="xiangqing">
      <div class="left">
        <div class="xiangqingList">
          <p>上门时间：</p>
          <p>2013-09-09 10:00</p>
        </div>
        <div class="xiangqingList">
          <p>联系人：</p>
          <p>张女士</p>
        </div>
        <div class="xiangqingList">
          <p>上门费：</p>
          <p>50元（已支付）</p>
        </div>
        <div class="xiangqingList">
          <p>详细地址：</p>
          <p>东城区王府井东城区王府井东城区王府井东城区王府井</p>
        </div>
      </div>
      <div class="right">
        <img src="../../static/img/direct_call_icon@3x.png" alt="">
      </div>
    </div>
    <div class="map">
      <img src="../../static/img/map.png" alt="地图">
    </div>
    <div class="contentLXY">
      <div>
        <p>服务类型：</p>
        <p>服务类型：</p>
      </div>
      <div>
        <p>故障现象：</p>
        <p>灶具不打火</p>
      </div>
      <div>
        <p>备注：</p>
        <p>备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</p>
      </div>
    </div>
    <p class="qianbaoliushui"><span></span><span class="liushui">服务详情</span><span></span></p>

    <div class="listLXY">
      <div>
        <p><span>2018-09-09 18:00</span>站长为您指派了订单</p>
      </div>
      <div>
        <p><span>2018-09-09 18:00</span>用户下单</p>
      </div>
    </div>

    <div class="hidden"></div>
    <div class="btn-group">
      <button>联系站长</button>
      <button>出发</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dingdanxiangqing"
    }
</script>

<style scoped>

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

  .bell{
    width: 33px;
    position: absolute;
    top: 20px;
    right: 20px;
    margin-right: 15px;
  }



  .qianbaoliushui{
    padding: 20px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background: #fff;
  }
  .qianbaoliushui span{
    display: block;
    height: 2px ;
    background: #595757;
    width: 100%;
  }
  .qianbaoliushui span:first-child{
    margin-right: 26px;
  }
  .qianbaoliushui span:last-child{
    margin-left: 26px;
  }
  .qianbaoliushui span.liushui{
    width: 300px;
    height: auto;
    background: transparent;
  }
  .hidden{
    height: 100px;
    background: #fff;
  }
  .btn-group{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #fff;
    /*left: 50%;*/
    /*margin-left: -375px;*/
  }
  .btn-group button{
    width: 50%;
    height: 80px;
    line-height: 80px;
    font-size: 35px;
    color: #fff;
    border: none;
  }
  .btn-group button:first-child{
    background: #ef8013;
  }
  .btn-group button:last-child{
    background: #42a00a;
  }
  .bianhao{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #fff;
    font-size: 35px;
  }
  .xiangqing{
    background: #fff;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12pt;
    padding-bottom: 20px;
    padding-right: 30px;
    padding-left: 20px;
  }
  .xiangqing .xiangqingList{
    margin-top: 20px;
  }
  .xiangqing img{
    width: 50px;
  }
  .xiangqingList p{
    display: inline-block;
    width: 200px;
  }
  .xiangqingList p:last-child{
    width: 400px;
    vertical-align: top;
  }
  .map{
    padding: 20px 30px;
  }
  .map img{
    height: 300px;
    display: block;
    margin: 0 auto;
  }
  .contentLXY{
    background: #fff;
    font-size: 12pt;
    padding: 20px 30px;
  }
  .contentLXY div{
    margin-top: 20px;
  }
  .contentLXY div p{
    width: 450px;
    display: inline-block;
    vertical-align: top;
  }
  .contentLXY div p:first-child{
    width: 200px;
  }
  .listLXY{
    background: #fff;
    padding: 20px;
  }
  .listLXY div{
    padding: 20px;
    border:1px solid #000;
    font-size: 12pt;
    margin-bottom: 20px;
  }
</style>
