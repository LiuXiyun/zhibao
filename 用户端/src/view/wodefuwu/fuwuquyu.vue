<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/faburenwu'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      服务区域
    </p>

    <div class="info-item mt20" @click="$router.push('/xiugaimima')">
      <span class="fl">北京</span>
    </div>

    <div class="info-item info-itemC mt20" @click="$router.push('/xiugaimima')">
      <span class="fl">东城区</span>
      <img src="../../static/img/select_my_service_icon@3x.png" alt="">
    </div>
    <button @click="$router.push('/faburenwu')">选好了</button>
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
  .info-item1 div{
    height: 200px;
    display: block;
    line-height: 200px;
    text-align: center;
    font-size: 50px;
    border: 1px solid #000;
    margin-bottom: 30px;
  }
  .info-item1.neirong div{
    height: 100px;
  }
  .info-item1.jiage div{
    height: 60px;
    line-height: 60px;
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
  button{
    width: 600px;
    background: #ef8013;
    color: #fff;
    font-size: 32px;
    margin: 0 auto;
    margin-top: 50px;
    height: 100px;
    border: none;
    line-height: 100px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -300px;
  }
  .info-itemC{
    padding-left: 80px;
  }
  .info-itemC img{
    float: right;
    width: 50px;
    height: 50px;
    margin-top: 20px;
  }
</style>
