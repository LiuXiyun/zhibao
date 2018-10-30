<template>
  <div class="delay">
    <div class="top-search">
      <div class="search-con">
        <img src='../../static/img/search.png' alt="" class="search-img"/>
        <input type="text" class="search-ipt" placeholder="请输入您要搜索的延保服务"/>
      </div>
    </div>
    <div class="line"></div>
    <div>
      <div class="delay-item clearfix">
        <img src='../../static/img/meidi.png' alt="" class="delay-img"/>
        <div class="fl">
          <p class="delay-top">美的冰箱17款 468L</p>
          <p class="delay-bot">金色.KFR-35GW/99SZBP</p>
        </div>
        <div class="car-con">
          <p class="add">安徽合肥</p>
          <img src='../../static/img/car.png' alt="" class="car-ico"/>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "delay"
    }
</script>

<style scoped>

  .top-search{
    background-color: #42a00a;
    padding: 20px 40px;  }

  .search-con{
    background-color: rgba(255,255,255,0.6);
    height: 55px;
    line-height: 55px;
    font-size: 28px;
  }
  .search-img{
    float: left;
    width: 45px;
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
    display: block;
  }
  .search-ipt{
    border: none;
    background: none;
    line-height: 55px;
    width: 520px;
  }
  .search-ipt::-webkit-input-placeholder{
    color: #595757;
  }

  .delay-item{
    background-color: #fff;
    padding: 30px;
  }
  .delay-img{
    float: left;
    width: 100px;
    margin-right: 20px;
  }
  .delay-top{
    line-height: 50px;
    font-size: 32px;
  }
  .delay-bot{
    line-height: 50px;
    font-size: 28px;
    color: #595757;
  }
  .car-con{
    float: right;
    margin-right: 40px;
  }
  .add{
    color: #ef8013;
    font-size: 24px;
    line-height: 30px;
  }
  .car-ico{
    width: 46px;
    margin-top: 14px;
    float: right;
  }
</style>
