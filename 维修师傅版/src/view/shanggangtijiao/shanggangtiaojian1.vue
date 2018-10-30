<template>
  <div>
    <p class="title">
      上岗条件
    </p>

    <div class="shanggangList">
      <p>个体经营</p>
    </div>

    <div class="shanggangList">
      <p  @click="$router.push('/jiaruweixiuzhan1')">加入维修店</p>
    </div>

    <div class="btn-group">
      <button>退出登陆</button>
      <button  @click="$router.push('/getijingying1')">下一步</button>
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
    position: fixed;
    bottom: 0;
    width: 600px;
    display: flex;
    left: 50%;
    margin-left: -300px;
  }
  .btn-group button{
    width: 50%;
    background: #ef8013;
    color: #fff;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-align: center;
    border: none;
  }
  .btn-group button:last-child{
    width: 50%;
    background: #42a00a;
  }

  .shanggangList{
    background: #fff;
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    margin-top: 20px;
    color: rgb(89,87,87);
    font-size: 30px;
  }
</style>
