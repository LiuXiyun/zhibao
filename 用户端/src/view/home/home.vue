<template>
  <div class="home">
    <div class="home-top">
      <div class="address clearfix">
        <span class="address-ico"></span>
        <span class="address-txt">北京</span>
        <span class="address-down"></span>
      </div>
      <div class="mid-search">
        <div class="search-left">
          <span class='sl-ico'></span>
          商品
          <!--<div class="other" onClick={this.switchKey}></div>-->
        </div>
        <div class="search-r">
          <img src='../../static/img/home-search.png' alt="" class="search-img"/>
          <span class="sr-txt">搜索</span>
        </div>
        <input type="text" class="home-input"/>
      </div>
    </div>
    <div class="home-nav clearfix">
      <div class="hn-item"   @click="$router.push('/delay')">
        <span class="item-ico yanbao"></span>
        <p class="item-txt">
          延保服务
        </p>
      </div>
      <div class="hn-item"  @click="$router.push('/serverList')">
        <span class="item-ico weixiu"></span>
        <p class="item-txt">
          维修服务
        </p>
      </div>
      <div class="hn-item">
        <span class="item-ico guanli" @click="$router.push('/yanbaoshangpin')"></span>
        <p class="item-txt">
          商品管理
        </p>
      </div>
    </div>
    <div class="line"></div>
    <div class="con-item">
      <div class="con-tit">
        <img src='../../static/img/cuxiao.png' alt="" class="tit-icon"/>
        <span>活动促销</span>
        <span class="more">更多>></span>
      </div>
      <div class="tit-line"></div>
      <div class="cuxiao-item clearfix">
        <img src='../../static/img/meidi.png' alt="" class="ci-img"/>
        <div class="fl">
          <p class="item-tit">美的</p>
          <p class="item-detail">活动标题，活动标题</p>
        </div>
        <div class="arr-r"></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="con-item">
      <div class="con-tit no-border">
        <img src='../../static/img/tieshi.png' alt="" class="tit-icon"/>
        <span>小贴士</span>
      </div>
      <ul class="clearfix">
        <li class="tip-item question">常见问题搜索</li>
        <li class="tip-item tips" >维修保养小贴士</li>
        <li class="tip-item protect" >质保服务保障</li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="con-item">
      <div class="con-tit">
        <img src='../../static/img/youxuan.png' alt="" class="tit-icon"/>
        <span>为你优选</span>
        <span class="more">更多>></span>
      </div>
      <div class="tit-line"></div>
      <!--<div class="cuxiao-item clearfix" >  </div>-->
      <p class="youxuan-txt">冰箱保养小常识</p>
      <p class="youxuan-tip">这张具有纪念意义的专辑其实是Pink Flody两位成</p>
    </div>
    <div class="line"></div>
    <div class="bot-line"></div>
    <footComponent :idx='0'></footComponent>
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

  .home-top{
    padding: 20px 30px 0 30px;
    background-color: #42a00a;
    background-image: url(static/img/top-bg.png);
    background-size: 750px;
    background-position: bottom;
    background-repeat: no-repeat;
    padding-bottom: 60px;
  }

  .address{
    color: #fff;
    font-size: 34px;
    height: 50px;
    line-height: 50px;
    padding-bottom: 15px;
  }
  .address-ico{
    width: 32px;
    display: inline-block;
    height: 50px;
    vertical-align: middle;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(static/img/address-ico.png);
  }
  .address-txt{
    margin: 0 20px;
    vertical-align: middle;
    display: inline-block;
  }
  .address-down{
    width: 30px;
    height: 17px;
    vertical-align: middle;
    display: inline-block;
    line-height: 50px;
    background-image: url(static/img/address-down.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .mid-search{
    margin-top: 185px;
    background-color: rgba(255,255,255,0.6);
    height: 57px;
  }
  .home-input{
    display: block;
    margin-right: 150px;
    background: none;
    height: 55px;
    line-height: 55px;
    border: none;
    margin-left: 190px;
  }
  .search-left{
    float: left;
    position: relative;
    font-size: 28px;
    line-height: 55px;
    text-align: right;
    width: 136px;
    color: #595757;
  }
  .sl-ico{
    width: 30px;
    height: 55px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(static/img/arr-d.png);
    margin-right: 30px;
    position: absolute;
    left: 24px;
    top: 0;
  }
  .other{
    position: absolute;
    top: 66px;
    left: 0;
    background-color: rgba(255,255,255,0.6);
    height: 55px;
    line-height: 55px;
    width: 220px;
    text-align: center;
  }
  .sl-up{
    background-image: url(static/img/arr-u.png);
  }
  .search-r{
    float: right;
  }
  .search-img{
    display: inline-block;
    line-height: 55px;
    float: left;
    margin-right: 18px;
    width: 43px;
    margin-top: 7px;
  }
  .sr-txt{
    float: left;
    margin-right: 22px;
    font-size: 28px;
    color: #595757;
    line-height: 58px;
  }

  .home-nav{
    padding: 56px 0;
    background: #fff;
  }
  .hn-item{
    width: 33%;
    font-size: 28px;
    text-align: center;
    float: left;
  }
  .hn-item:nth-last-of-type(2){
    border-left: 1px solid #b5b5b6;
    border-right: 1px solid #b5b5b6;
  }
  .item-ico{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: inline-block;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .item-txt{
    margin-top: 18px;
    text-align: center;
  }
  .yanbao{
    background-image: url(static/img/yanbao.png);
  }
  .weixiu{
    background-image: url(static/img/weixiu.png);
  }
  .guanli{
    background-image: url(static/img/guanli.png);
  }
  .con-item{
    background: #fff;
    padding: 0 30px 36px 30px;
  }
  .con-tit{
    height: 90px;
    line-height: 90px;
    font-size: 32px;
    border-bottom: 1px solid #b5b5b6;
  }
  .more{
    float: right;
    font-size: 28px;
  }
  .tit-icon{
    width: 42px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }
  .cuxiao{
    /*background-image: url(../../static/img/cuxiao.png);*/
  }
  .cuxiao-item{
    margin-top: 23px;
  }
  .ci-img{
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 18px;
  }
  .item-tit{
    height: 55px;
    line-height: 55px;
    font-size: 32px;
  }
  .item-detail{
    height: 45px;
    line-height: 45px;
    color: #595757;
  }
  .arr-r{
    float: right;
    height: 100px;
    width: 20px;
    /*background-image: url(../../static/img/arr-r.png);*/
    background-position: center;
    background-size: 100%;
    margin-right: 12px;
    background-repeat: no-repeat;
  }
  .tip-item{
    float: left;
    width: 220px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    margin-right: 15px;
  }
  .tip-item:last-of-type{
    margin-right: 0;
  }
  .question{
    background-color: #009fe8;
  }
  .tips{
    background-color: #ef8013;
  }
  .protect{
    background-color: #42a00a;
  }
  .bot-line{
    width: 100%;
    height: 100px;
  }
  .youxuan-txt{
    font-size: 32px;
    line-height: 60px;
    margin-top: 20px;
  }
  .youxuan-tip{
    line-height: 52px;
    font-size: 28px;
    color: #595757;
  }

</style>
