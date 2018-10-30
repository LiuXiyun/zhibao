<template>
  <div class="home">
    <p class="title">
      <!--<router-link class="return" :to="{path:'/lianxiren'}" >-->
        <!--<img src="../../static/img/address_book_icon@3x.png" alt="" class="arr-l">-->
      <!--</router-link>-->
      质聊
    </p>

    <div class="mid-search">
      <div class="search-l">
        <img src='../../static/img/home-search.png' alt="" class="search-img"/>
      </div>
      <input type="text" class="home-input" placeholder="请输入您想搜索的产品"/>
    </div>

    <div class="contentLXY">
      <div class="listLXY" @click="$router.push('/zhiliaoxiangqing')">
        <img src="../../static/img/tou.png" alt="">
        <div>
          <p class="p1">
            美的冰箱冰箱销售客户群
            <small>10.10</small>
          </p>
          <p class="p2">
            您好！我对你们公司有极大的兴趣。
          </p>
        </div>
      </div>
    </div>
    <footComponent :idx='1'></footComponent>

  </div>

</template>

<script>
  import footComponent from "../../components/footer";	// footer


  export default {
    name: 'home',
    data() {
      return {
        name: '',
        pwd: '',
        code: '',
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    methods: {

    },
    components:{
      footComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../../static/css/index.css';*/


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
    left: 50px;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    top: 25px;
  }
  .arr-l{
    float: left;
    height: 40px;
    /*width: 30px;*/
    margin-right: 30px;
  }



  .mid-search{
    background-color:#fff;
    height: 57px;
    border: 1px solid #ccc;
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 90%;
    padding-left: 20px;
    margin-top: 20px;
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
  .home-input{
    display: block;
    background: none;
    height: 55px;
    line-height: 55px;
    border: none;
    width: 100%;
  }
  .contentLXY{
    background: #fff;
    padding: 25px 20px;
  }
  .listLXY{
    display: flex;
    padding: 25px 0;
    border-bottom: 1px solid #ccc;
  }
  .contentLXY .listLXY:last-child{
    /*border-bottom: 0;*/
  }
  .listLXY img{
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
  .listLXY div{
    width: 100%;
  }
  .p1{
    color: rgb(89,87,87);
    font-size: 30px;
    margin-bottom: 10px;
  }
  .p1 small{
    float: right;
    font-size: 25px;
  }
  .p2{
    color: rgb(89,87,87);
    font-size: 28px;
  }
</style>
