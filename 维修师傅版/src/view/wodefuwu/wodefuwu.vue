<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      <span>我的服务</span>
      <router-link  class="bell" :to="{path:'/faburenwu'}" >
        <span>发布服务</span>
      </router-link>
    </p>

    <div class="info-item mt20">
      <img src="../../static/img/vocational_qualification_certificate_icon@2x.png"/>
      <div>
        <p class="p1">服务名称 <span  @click="$router.push('/xiugairenwu')">修改</span></p>
        <p class="p2">服务内容，服务内容</p>
        <p class="p4">45元/次</p>
        <p class="p5">已售3900   好评率99%</p>
      </div>
    </div>

    <div class="info-item mt20">
      <img src="../../static/img/vocational_qualification_certificate_icon@2x.png"/>
      <div>
        <p class="p1">服务名称 <span>修改</span></p>
        <p class="p2">服务内容，服务内容</p>
        <p class="p4">45元/次</p>
        <p class="p5">已售3900   好评率99%</p>
      </div>
    </div>

    <div class="info-item mt20">
      <img src="../../static/img/vocational_qualification_certificate_icon@2x.png"/>
      <div>
        <p class="p1">服务名称 <span>修改</span></p>
        <p class="p2">服务内容，服务内容</p>
        <p class="p4">45元/次</p>
        <p class="p5">已售3900   好评率99%</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {

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
    margin-bottom: 30px;
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
    position: absolute;
    right: 20px;
    color: #fff;
  }

  .mt20{
    background: #fff;
    display: flex;
    padding: 20px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .mt20 img{
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }
  .mt20 div{
    width: 100%;
  }
  .p1{
    margin-bottom: 10px;
    font-size: 35px;
  }
  .p1 span{
    color: #ef8013;
    float: right;
  }
  .p2{
    margin-bottom: 10px;
    font-size: 30px;
    color: #595757;
  }
  .p4{
    margin-bottom: 10px;
    font-size: 30px;
    color: #ef8013;
  }
  .p5{
    width: 100%;
    border-top: 1px solid #595757;
    text-align: right;
    padding-top: 10px;
  }
</style>
