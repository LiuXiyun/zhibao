<template>
  <div class="my myContent">
    <div class="my-top">
      <div class="clearfix">
        <img src="../../static/img/bell.png" alt="" class="bell"/>
      </div>
      <div class="clearfix pt60">
        <router-link :to="{path:'/message'}">
          <img src="../../static/img/tou.png" alt="" class="tou"/>
          <div class="imt">
            <p>小永子</p>
            <p>159 *******59</p>
          </div>
          <img src="../../static/img/right-open.png" alt="" class="arr-r fr"/>
        </router-link>
      </div>
    </div>

    <div class="info-item mt20" @click="goList">
      <img src="../../static/img/order_management_center_icon@2x.png" alt="" class="nor-img"/>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">延保订单/维修订单</span>
    </div>

    <div class="info-item mt20 mt21" @click="getCode">
      <span class="fl">本月累计</span>
      <span><span>200</span>单</span>
      <span>共计<span>¥80500</span></span>
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
    background-color: rgb(17,139,226);
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
    color: rgb(17,139,226);
  }
</style>
