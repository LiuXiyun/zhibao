<template>
  <div class="home">
    <p class="title">
      <router-link class="return" :to="{path:'/message'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      消息中心详情
    </p>

    <div class="detail">
        <p>亲爱的<span>王店长</span>用户您好</p>
        <p>李莉莉 用户将成为美的平台的销售代理商
          他的代理人需要您的信息再次确认。</p>
        <p>对方联系电话： <span>186 8888 8888</span>  <small>2018，08，08</small></p>
        <div class="btn-group">
          <button>通过</button>
          <button>拒绝</button>
        </div>
        <small>注：若该信息为虚假信息可直接 <span class="hulue">忽略该消息</span> </small>
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

    },
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
    margin-right: 30px;
  }

  .detail{
    background: #fff;
    margin-top: 20px;
    padding: 35px 20px 100px 20px;
  }
  .detail span{
    color: #009fe8;
  }
  .detail p{
    font-size: 30px;
    margin-bottom: 60px;
    color: rgb(89,87,87);
    font-family: STXiHei;
  }
  .detail small{
    color: rgb(89,87,87);
  }
  .detail small:last-child{
    margin-top: 40px;
    display: block;
  }
  .detail p small{
    float: right;
  }
  .btn-group{
    width: 690px;
    display: flex;
    height: 100px;
    line-height: 100px;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
  .btn-group button{
    border: none;
    color: #fff;
    width: 50%;
    height: 100px;
    font-size: 32px;
  }
  .btn-group button:first-child{
    background: #0099ff;
  }
  .btn-group button:last-child{
    background: #ff9900;
  }
  .detail span.hulue{
    color: #ff9900;
    font-size: 32px;
  }
</style>
