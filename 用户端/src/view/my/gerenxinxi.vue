<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      个人信息
    </p>

    <div class="listLXY">
      <span>头像</span>
      <div class="content">
        <img src="../../static/img/tou.png" alt="" class="tou"/>
      </div>
      <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
    </div>

    <div class="listLXY">
      <span>真实姓名</span>
      <div class="content">
        <span>张三</span>
      </div>
      <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
    </div>

    <div class="listLXY">
      <span>身份证号</span>
      <div class="content">
        <span>20123123123123123123</span>
      </div>
      <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
    </div>

    <div class="listLXY">
      <span>所属站点</span>
      <div class="content">
        <span>张三张三张三张三张三张三张三</span>
      </div>
      <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
    </div>


    <div class="listLXYD">
      <div class="listLXY">
        <span>我的技能</span>
        <div class="content">
          <span></span>
        </div>
        <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
      </div>
      <div class="listG">
        <span>燃气管道维修</span>
        <span>燃气管道维修</span>
        <span>燃气管道维修</span>
        <span>燃气管道维修</span>
      </div>
    </div>

    <div class="listLXY">
      <span>服务区域</span>
      <div class="content">
        <span>北京市</span>
      </div>
      <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="" class="arr-r fr"/>
    </div>
  </div>
</template>

<script>


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

  .listLXY{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: 10px;
    background: #fff;
    color: #595757;
  }
  .listLXY>span{
    width: 170px;
    display: block;
    font-size: 35px;
  }
  .listLXY img{
    width: 30px;
  }
  .listLXY img.tou{
    width: 120px;
    height: 120px;
  }
  .listLXY .content{
    width: 500px;
    text-align: right;
    margin-right: 40px;
  }
  .content span{
    font-size: 30px;
  }
  .listLXYD{
    background: #fff;
    padding-bottom: 30px;
  }
  .listG{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
  }
  .listG span{
    width: 250px;
    height: 60px;
    background: #ccc;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
