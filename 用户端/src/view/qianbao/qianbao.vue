<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      关于我们
    </p>

    <div class="contentLXY">
      <p class="p1">
        <span>当前余额</span>
        <span  @click="$router.push('/guizeshuoming')">
          <span></span>
          规则说明
        </span>
      </p>
      <p class="p2">1200.00元</p>
      <button  @click="$router.push('/tixian')">
        提现 <span>(每周二9：00-22：00可提现)</span>
      </button>
    </div>

    <p class="qianbaoliushui"><span></span><span class="liushui">钱包流水</span><span></span></p>

    <div class="listLXY">
      <div class="neirong">
        <p>收入（编号123）</p>
        <p>2017-09-09 10：10</p>
      </div>
      <div class="chuli">
        <p>工作人员处理中</p>
      </div>
      <div class="price">
        <p>+2000.0</p>
      </div>
    </div>

    <div class="allliushui" @click="$router.push('/allliushui')">
      <span>查看全部流水</span>
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
  .contentLXY{
    font-size: 30px;
    height: 300px;
    padding-top: 32px;
    padding-left: 60px;
    padding-right: 60px;
    background: #ef8013;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 40px;
  }
  .contentLXY p.p1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 35px;
    margin-bottom: 50px;
    width: 100%;
  }
  .contentLXY p.p1 span{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contentLXY p.p1 span span{
    display: block;
    margin-right: 12px;
    height: 20px;
    width: 20px;
    vertical-align: middle;
    background: #fff;
    border-radius: 100%;
  }
  .p2{
    font-size: 40px;
    text-align: center;
    width: 100%;
  }

  .contentLXY button{
    background: rgb(89,87,87);
    font-size: 40px;
    /*width: 500px;*/
    margin: 0 auto;
    margin-top: 50px;
    height: 90px;
    /*line-height: 90px;*/
    border: none;
    color: #fff;
    padding: 10px 20px;
  }
  .contentLXY button span{
    font-size: 35px;
  }
  .listLXY{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 15px 30px;
    background: #fff;

  }
  .listLXY .price{
    font-size:30px;
    border-bottom: 0;
  }
  .listLXY .neirong{
    width:55%;
  }
  .listLXY .neirong p:first-child{
    font-size:30px;
    margin-bottom: 10px;
  }
  .listLXY .neirong p:last-child{
    font-size: 25px;
    color:rgb(89,87,87);
  }
  .chuli{
    font-size: 25px;
  }
  .qianbaoliushui{
    margin: 20px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  .qianbaoliushui span{
    display: block;
    height: 2px ;
    background: #595757;
    width: 100%;
  }
  .qianbaoliushui span:first-child{
    margin-right: 26px;
  }
  .qianbaoliushui span:last-child{
    margin-left: 26px;
  }
  .qianbaoliushui span.liushui{
    width: 300px;
    height: auto;
    background: transparent;
  }
  .allliushui{
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 20px;
  }
</style>
