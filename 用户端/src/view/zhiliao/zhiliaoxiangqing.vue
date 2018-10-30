<template>
  <div class="my-top">
    <p class="title">
      <router-link class="return" :to="{path:'/zhiliao'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      李女士空调维修
      <img src="../../static/img/we_are_right_icon@3x.png" alt="" class="bell" @click="$router.push('/zhiliao')"/>
    </p>

    <div class="contentLXY">
      <div class="detail">
        <div class="detail1"><p>【电焊】几招电焊一人要求：尽快到港。。。</p><span>3.0km</span></div>
        <p class="company">北京工匠时代科技有限公司</p>
        <div class="dTime clearfix">
          <p class="fl">任务周期 <span>03-01</span> 至 <span>04-30</span></p>
          <span class="s1">预估工时 8小时</span>
        </div>
      </div>
      <span class="time">12：00</span>
    <div class="liaotian">
      <div class="he">
        <div class="header">
          <img src="../../static/img/tou.png" alt="">
        </div>
        <div class="liaotianneirong">
          <p>你好，我这边需要电焊工，请问你那面摆在找工作么？</p>
          <p>5分钟</p>
        </div>
      </div>
      <div class="me">
        <div class="liaotianneirong">
          <p>你好，你好，你好你好你好你好你好你好你好你好你好你好？</p>
          <p>5分钟</p>
        </div>
        <div class="header">
          <img src="../../static/img/tou.png" alt="">
        </div>
      </div>
    </div>
    </div>

    <div class="shuru">
      <div class="sd1">
        <img src="../../static/img/click_disk_icon@3x.png" alt="">
      </div>
      <div class="sd2">
        <input type="text" placeholder="按住说话">
      </div>
      <div class="sd1">
        <img src="../../static/img/look_right_icon@3x.png" alt="">
      </div>
      <div class="sd1">
        <img src="../../static/img/right_plus_icon@3x.png" alt="">
      </div>
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
    width: 55px;
    position: absolute;
    top: 20px;
    right: 20px;
    margin-right: 15px;
  }

  .contentLXY{
    margin:40px 0;
  }

  .detail{
    padding: 30px;
    background: #fff;
  }

  .detail1{
    font-size: 13pt;
    height: 70px;
    line-height: 70px;
    display: flex;
  }

  .company{
    font-size: 13pt;
    height: 60px;
    line-height: 60px;
    color: #595757;
  }
  .dTime{
    font-size: 12pt;
    color: #595757;
  }
  .dTime span.s1:last-child{
    float: right;
  }

  .time{
    display: block;
    margin: 0 auto;
    /*padding: 10px 50px;*/
    background: #595757;
    font-size: 12pt;
    color: #fff;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .liaotian{
    padding: 20px;
    margin-bottom: 100px;
  }

  .he,.me{
    display: flex;
    margin: 30px;
  }
  .he .header{
    width: 130px;
    height: 130px;
    margin-right: 30px;
  }
  .header img{
    display: block;
    width: 100%;
  }
  .me .header{
    width: 130px;
    height: 130px;
    margin-left: 30px;
  }
  .liaotianneirong{
    padding: 20px 10px;
    font-size: 13pt;
    color: #595757;
    position: relative;
    background: #fff;
    border-radius: 4px;
    margin-right: 40px;
    line-height: 50px;
  }
  .he .liaotianneirong::after{
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    border-top: 15px solid transparent;
    border-right: 20px solid #fff;
    border-bottom: 15px solid transparent;
  }
  .he .liaotianneirong p:last-child{
    text-align: left;
    font-size: 12px;
    color: #595757;
  }
  .me .liaotianneirong p:last-child{
    text-align: right;
    font-size: 12px;
    color: #595757;
  }
  .me .liaotianneirong{
    margin-right: 0;
    margin-left: 40px;
  }
  .me .liaotianneirong::after{
    content: '';
    position: absolute;
    top: 10px;
    right: -20px;
    border-top: 15px solid transparent;
    border-left: 20px solid #fff;
    border-bottom: 15px solid transparent;
  }

  .shuru{
    position: fixed;
    bottom: 0;
    height: 100px;
    line-height: 100px;
    display: flex;
    width: 100%;
    background: #fff;
    align-items: center;
  }
  .shuru .sd1:first-child{
    margin-left: 20px;
  }
  .shuru .sd1:last-child{
    margin-righ: 20px;
  }
  .sd1{
    width: 80px;
    height: 80px;
    padding: 20px;
  }
  .sd1 img{
    width: 100%;
  }
  .sd2 input{
    border: 1px solid #595757;
    padding: 10px;
    width: 90%;
  }

  .sd2{
    width: 400px;
  }

</style>
