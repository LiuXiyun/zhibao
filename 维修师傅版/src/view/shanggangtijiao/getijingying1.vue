<template>
  <div>
    <p class="title">
      上岗条件
    </p>

    <img src="../../static/img/middle_figure_captions_icon@3x.png"/>

    <div class="p1 listLXY">
      <p>提交关键资料</p>
      <button>去提交</button>
    </div>
    <div class="p2 listLXY">
      <p>--欢迎加入质保网！但仍需达成以下条件方可上岗！
        您需填写您的基本信息，提供身份证信息以及相关资质证书，通过系统运营人员的审核后，
        就可以接单喽~</p>
    </div>
    <div class="btn-group">
      <button>退出登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shanggangtiaojian1"
  }
</script>

<style scoped>

  .title{
    height: 88px;
    text-align: center;
    font-size: 40px;
    line-height: 88px;
    color: #fff;
    margin: 0;
    background: #ef8013;
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

  .btn-group{
    position: absolute;
    bottom: 0;
    width: 600px;
    display: flex;
    left: 50%;
    margin-left: -300px;
  }
  .btn-group button{
    width: 100%;
    background: #ef8013;
    color: #fff;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-align: center;
    border: none;
  }
  img{
    display: block;
    width: 690px;
    height: 350px;
    margin: 20px auto;
  }

  .listLXY{
    background: #fff;
    padding: 20px;
    font-size: 30px;
    margin: 20px;
  }
  .p1 button{
    width: 200px;
    height: 60px;
    background: #009fe8;
    color: #fff;
    font-size: 30px;
    border: none;
    border-radius: 6px;
  }
  .p1{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .p2 p{
    line-height: 60px;
  }
</style>
