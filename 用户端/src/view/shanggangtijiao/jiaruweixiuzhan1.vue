<template>
  <div>
    <p class="title">
      上岗条件
    </p>


    <div class="mid-search">
      <div class="search-l">
        <img src='../../static/img/home-search.png' alt="" class="search-img"/>
      </div>
      <input type="text" class="home-input" placeholder="请输入您想搜索的产品"/>
    </div>

    <div class="p1 listLXY">
      <div>
        <img src="../../static/img/home-search.png" alt="">
        <p>海尔维修一站</p>
      </div>
      <button   @click="$router.push('/jiaruweixiuzhan2')">加入</button>
    </div>
    <div class="btn-group">
      <button   @click="$router.push('/login')">退出登录</button>
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
  .p1 div{
    display: flex;
    align-items: center;
  }
  .p1 div img{
    width: 60px;
    height: 60px;
    margin-right: 30px;
  }

  .mid-search{
    background-color:#fff;
    height: 57px;
    border: 1px solid #ccc;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;
    padding-left: 20px;
  }
  .search-l{
    float: left;
    position: relative;
    font-size: 28px;
    line-height: 55px;
    text-align: right;
    width: 80px;
    color: #595757;
    text-align: center;
  }
  .search-img{
    display: inline-block;
    line-height: 55px;
    float: left;
    margin-right: 18px;
    width: 43px;
    margin-top: 7px;
  }
</style>
