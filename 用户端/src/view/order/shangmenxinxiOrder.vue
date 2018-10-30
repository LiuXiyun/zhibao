<template>
    <div>
      <div class="c-title">
        上门信息
        <div class="return">
          <span class="arr-l"></span>
          <span class="return-txt"  @click="this.$router.push('/goumaifuwu')">返回</span>
        </div>
      </div>

      <div class="xinxiList">
        <img src="../../static/img/left_a_message_ico@3x.png"/>
        <div>
          <p class="p1">东方广场</p>
          <p class="p2">maomaomao</p>
        </div>
      </div>

      <div class="xinzengdizhi">
        <p  @click="$router.push('/xinzengdizhi')">新增地址</p>
      </div>
      <div class="buttonLXY">
        <button  @click="$router.go(-1)">确定</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shangmenxinxiOrder"
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

  .xinxiList,.xinzengdizhi{
    background: #fff;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 32px;
  }
  .xinxiList img{
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .p1{
    font-size: 32px;
    margin-bottom: 5px;
  }
  .p2{
    font-size: 28px;
    color: rgb(89,87,87);
  }
</style>
