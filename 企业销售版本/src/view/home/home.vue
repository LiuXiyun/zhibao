<template>
  <div class="home">
    <p class="title">店长</p>
    <div class="header">
        <div class="total">
          <div class="totalContent">
            <div>
              <img src="../../static/img/today's_sales_icon@2x.png" alt="">
            </div>
            <p class="p1">500台</p>
            <p class="p2">今日销量</p>
          </div>
          <div class="totalContent">
            <div>
              <img src="../../static/img/the_highest_sales_icon@2x.png" alt="">
            </div>
            <p class="p1">高兴：10W</p>
            <p class="p2">累计销量最高</p>
          </div>
          <div class="totalContent">
            <div>
              <img src="../../static/img/store_sales_icon@2x.png" alt="">
            </div>
            <p class="p1">30w.100单</p>
            <p class="p2">今日已累计</p>
          </div>
          <div class="totalContent">
            <router-link tag="span" :to="{path:'/addNewYuangong'}" >
            <div>
              <img src="../../static/img/add_new_employees_icon@2x.png" alt="">
            </div>
            <p class="p1">new</p>
            <p class="p2">添加员工</p>
            </router-link>
          </div>
        </div>
    </div>
    <div class="mid-search">
      <div class="search-l">
        <img src='../../static/img/home-search.png' alt="" class="search-img"/>
      </div>
      <input type="text" class="home-input" placeholder="请输入您想搜索的产品"/>
    </div>
    <div class="row">
      <div class="left">
        <ul>
          <li>热销分类</li>
          <li>电脑办公</li>
          <li>家用电器</li>
          <li>手机数码</li>
          <li>厨房用品</li>
          <li>汽车用品</li>
          <li>图书映像</li>
          <li>电脑办公</li>
        </ul>
      </div>
      <div class="right">
        <div class="">
          <p>热销分类</p>
          <div class="content">
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/refrigerator_icon@2x.png" alt="" @click='goDetail'>
            </div>
          </div>
        </div>
        <div class="">
          <p>电脑办公</p>
          <div class="content">
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/apple_computer_icon@3x.png" alt="" @click='goDetail'>
            </div>
          </div>
        </div>
        <div class="">
          <p>家用电器</p>
          <div class="content">
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
            <div>
              <img src="../../static/img/induction_cooker_icon@2x.png" alt="" @click='goDetail'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footComponent :idx='0'></footComponent>
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
      goDetail() {
        this.$router.push('/shangpinxiangqing')    // 暂时不做处理只去登录页面
      },

    },
    components:{
      footComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .title{
    height: 88px;
    background: rgb(17,139,226);
    text-align: center;
    font-size: 40px;
    line-height: 88px;
    color: #fff;
    margin: 0;
  }
  .header{
    background: rgb(17,139,226);
    height: 300px;
    padding-top: 80px;
    margin-bottom: 20px;
  }
  .total{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .totalContent{
    text-align: center;
    width: 25%;
    color: #fff;
  }
  .totalContent img{
    width: 80px;
    height: 80px;
  }
  .totalContent p{
    margin: 0;
  }
  .totalContent p.p1{
    font-size: 28px;
    margin-top: 9px;
  }
  .totalContent p.p2{
    font-size: 22px;
    margin-top: 9px;
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
  .row{
    display: flex;
  }
  .left{
    float: left;
    background: #eee;
    width: 209px;
    margin-right: 20px;
  }
  .left ul{
    width: 100%;
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .left ul li{
    width: 100%;
    height: 90px;
    margin-bottom: 7px;
    line-height: 90px;
    font-size: 30px;
    background: #fff;
    color: #000;
  }
  .right{
    float: right;
    width: 550px;
  }
  .right p{
    font-size: 35px;
    margin: 10px 0;
  }
  .right .content{
    display: flex;
    align-content:  center;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .right .content div{
    width: 160px;
    height: 160px;
    margin:0 5px 20px 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right .content img{
    width: 140px;
    height: 140px;
  }



</style>
