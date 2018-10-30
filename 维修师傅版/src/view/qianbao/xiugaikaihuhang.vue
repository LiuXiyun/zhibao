<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      修改开户行
    </p>

    <div class="info-item mt20" @click="$router.push('/tixian')">
      <img src="../../static/img/china_merchants_bank_icon@3x.png" alt="" class="nor-img"/>
      <img src="../../static/img/arr-r.png" alt="" class="arr"/>
      <span class="fl">招商银行</span>
    </div>

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
  .myContent{
    font-size: 32px;
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
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 22px;
  }
  .nor-img{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 30px;
    margin-top: 24px;
  }
  .mt21>span{
    width: 200px;
  }
  .mt21>span>span{
    background: #ef8013;
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
  .margin{
    margin-bottom: 50px;
  }
  .mt20{
    margin-top: 10px;
  }
  .banbenhao{
    right: 100px;
  }
</style>
