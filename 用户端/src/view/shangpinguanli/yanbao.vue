<template>
  <div>
    <div class="listLXY">
      <div class="leftLXY">
        <img src="../../static/img/meidi.png" alt="">
      </div>
      <div class="rightLXY">
        <p class="p1">美的冰箱</p>
        <p class="p2">金色</p>
        <p class="p3">2019-09-09 <span>延保气馁</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yanbao"
  }
</script>

<style scoped>
  .listLXY{
    display: flex;
    align-items: center;
    padding: 30px;
    background: #fff;
  }
  .leftLXY{
    width: 100px;
    height: 100px;
    margin-right: 30px;
  }
  .leftLXY img{
    width: 100%;
    height: 100%;
  }
  .p1{
    font-size: 30px;
  }
  .p2{
    font-size: 26px;
  }
  .p3{
    font-size: 20px;
    width: 500px;
  }
  .p3 span{
    float: right;
  }
</style>
