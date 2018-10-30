<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/zhiliao'}" >
        <img src="../../static/img/left_information_icon@3x.png" alt="" class="arr-l">
      </router-link>
      质聊
    </p>

    <div class="mid-search">
      <div class="search-l">
        <img src='../../static/img/home-search.png' alt="" class="search-img"/>
      </div>
      <input type="text" class="home-input" placeholder="请输入您想搜索的产品"/>
    </div>

    <div class="contentLXY">
      <div class="listLXY">
        <img src="../../static/img/tou.png" alt="">
        <div>
          测试测试
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
    background: rgb(17,139,226);
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
    padding: 20px 20px;
  }
  .listLXY{
    display: flex;
    margin: 20px 0;
  }
  .contentLXY .listLXY:first-child{
    margin-top: 0;
  }
  .contentLXY .listLXY:last-child{
    margin-bottom: 0;
  }
  .listLXY img{
    width: 75px;
    height: 75px;
    margin-right: 20px;
  }
  .listLXY div{
    width: 100%;
    height: 75px;
    line-height: 75px;
  }
</style>
