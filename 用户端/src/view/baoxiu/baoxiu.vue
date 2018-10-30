<template>
  <div>
    <div class="c-title">
      报修
      <div class="return" onClick={this.back}>
        <span class="arr-l"></span>
        <span class="return-txt">返回</span>
      </div>
    </div>
    <div class="contentLXY">
    <div class="detail">
      <p class="p1">美的冰箱</p>
      <p class="p2">金色</p>
      <p class="p3"><span>延保气馁</span></p>
    </div>


    <div class="info-item mt20">
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">上门时间：</span>
      <span class="arr text"></span>
    </div>


    <div class="info-item mt20">
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">上门信息：</span>
      <span class="arr text"></span>
    </div>

    <div class="info-item mt20">
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">故障现象（非必填）：</span>
      <span class="arr text"></span>
    </div>

    <div class="info-item mt20">
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">备注</span>
      <span class="arr text"></span>
    </div>
    </div>
    <div class="buttonLXY">
      <button @click="$router.push('/tianjiashangpin')">确定预约</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "baoxiu",
    data () {
    },
    methods: {
      toggleTab: function(tab) {
        this.currentTab = tab; // tab 为当前触发标签页的组件名
      }
    }
  }
</script>

<style scoped>

  .c-title{
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    font-size: 34px;
    position: relative;
    background-color: #42a00a;
    font-weight: 400;
  }
  .return{
    position: absolute;
    top: 0;
    left: 45px;
    z-index: 9;
  }
  .arr-l{
    float: left;
    height: 88px;
    width: 20px;
    margin-right: 30px;
    background-image: url(static/img/arr-l.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .return-txt{
    line-height: 88px;
    float: left;
  }

  .detail{
    padding: 30px;
    background: #fff;
    margin: 20px 0;
    font-size: 30px;
  }
  .p2{
    font-size: 26px;
  }
  .p3{
    font-size: 24px;
    color: #ef8014;
  }

  .contentLXY{
    margin-bottom: 100px;
  }
  .info-item{
    background-color: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    line-height: 90px;
    font-size: 32px;
    color: #595757;
    margin-top: 0;
  }
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 22px;
  }


  .buttonLXY{
    position: fixed;
    bottom: 0;
    width: 690px;
    font-size: 32px;
    border: none;
    height: 100px;
    line-height: 100px;
    text-align: center;
    left: 50%;
    margin-left: -345px;
  }
  .buttonLXY button{
    color: #fff;
    background: #42a00a;
    width: 690px;
    font-size: 32px;
    border: none;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
