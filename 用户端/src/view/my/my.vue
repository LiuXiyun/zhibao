<template>
  <div class="my myContent">
    <div class="my-top">
      <div class="clearfix">
        <img src="../../static/img/bell.png" alt="" class="bell" @click="$router.push('/message')"/>
      </div>
      <div class="clearfix pt60">
        <router-link :to="{path:'/gerenxinxi'}">
          <img src="../../static/img/tou.png" alt="" class="tou"/>
          <div class="imt">
            <p>小永子
              <span>5.0</span>
            </p>
            <p>159 *******59</p>
          </div>
          <img src="../../static/img/right-open.png" alt="" class="arr-r fr"/>
        </router-link>
      </div>
    </div>

    <div class="info-item labelList">
      <span>燃气管道维修</span>
      <span>燃气管道维修</span>
      <span>燃气管道维修</span>
      <span>燃气管道维修</span>
    </div>

    <div class="info-item">
      <p>我的订单</p>
      <div class="btn-group">
        <button class="btn1">待完成（3）</button>
        <button class="btn2">已完成</button>
      </div>
    </div>

    <div class="info-item mt20" @click="$router.push('/wodefuwu')">
      <img src="../../static/img/my_service_icon@3x.png" alt="" class="nor-img"/>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">我的服务</span>
    </div>

    <div class="info-item mt20" @click="$router.push('/qianbao')">
      <img src="../../static/img/my_wallet_icon@3x.png" alt="" class="nor-img"/>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">我的钱包</span>
    </div>

    <div class="info-item mt20" @click="$router.push('/set')">
      <img src="../../static/img/i_set_up_icon@3x.png" alt="" class="nor-img"/>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">设置</span>
    </div>

    <footComponent :idx='2'></footComponent>
  </div>
</template>

<script>
  import footComponent from "../../components/footer";	// footer

  export default {
    name: "my",
    components:{
      footComponent
    },
    methods:{
      getCode(){
        this.$axios({
          method:"POST",
          url:'/api/i/worker/getlist',
          data:{
            pageIndex:1
          }
        }).then(function(res){
          console.log(res)
        })
          .catch(function(err){
            console.log(err)
          });
      },
      goList(){
        console.log(1)
        this.$router.push({
          path: '/xiaoshoudingdan',
        });
      }
    }
  }
</script>

<style scoped>
  .myContent{
    font-size: 32px;
  }
  .my-top{
    background-color: #ef8013;
    padding: 25px 30px 40px 30px;
  }
  .setting{
    float: left;
    width: 40px;
    margin-left: 15px;
  }
  .bell{
    float: right;
    width: 33px;
    margin-right: 15px;
  }
  .mb60{
    margin-bottom: 60px;
  }
  .tou{
    float: left;
    width: 120px;
    margin-right: 35px;
  }
  .imt{
    float: left;
    width: 380px;
    color: #fff;
    line-height: 60px;
    font-size: 32px;
  }
  .pt60{
    padding-top: 60px;
  }
  .arr-r{
    width: 24px;
    margin-top: 43px;
    margin-right: 15px;
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
  }
  .no-b{
    border: none;
  }
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 22px;
  }
  .right{
    float: right;
    margin-right: 74px;
  }
  .r-img{
    width: 90px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  .img-txt{
    margin-top: 17px;
  }
  .nor-img{
    float: left;
    width: 40px;
    margin-right: 30px;
    margin-top: 24px;
  }
  .no-login{
    margin-left: 70px;
    height: 120px;
    line-height: 120px;
    color: #fff;
  }
  .mt21{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .mt21>span{
    width: 200px;
  }
  .mt21>span>span{
    background: #ef8013;
  }
  .labelList{
    padding: 20px;
    margin-top: 20px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .labelList span{
    display: inline-block;
    font-size: 30px;
    margin-top: 10px;
    margin-right: 20px;
  }
  .info-item button{
    width: 45%;
    font-size: 30px;
    border:none;
    color: #fff;
    padding: 10px 20px;
  }
  .btn-group{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .btn1{
    background: #42a00a;
  }
  .btn2{
    background: rgb(89,87,87);
  }
</style>
