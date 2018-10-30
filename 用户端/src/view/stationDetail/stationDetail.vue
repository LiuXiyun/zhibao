<template>
  <div>
    <div class="c-title">
      站点详情
      <div class="return">
        <span class="arr-l"></span>
        <span class="return-txt" @click="$router.go(-1)">返回</span>
      </div>
      <img src='../../static/img/share.png' class="share-img" alt=""/>
    </div>
    <div class="top-tab clearfix">
      <div class='tt-item'>服务</div>
      <div class='tt-item'>评价</div>
    </div>

    <div class="server-item mt30">
      <img src='../../static/img/station.png' alt="" class="si-img"/>
      <div class="s-con">
        <p class="sc-tit">站点名称</p>
        <div class="server-con">
          <div class="start fl">
             <span class='i-start'></span>
          </div>
          <span class="fl">15条</span>
        </div>
        <p class="normal-txt">
          站点介绍
        </p>

        <div class="bot-info clearfix">
          <p class="fl">营业时间 8:00-18:00</p>
          <p class="fr">已售1159</p>
        </div>
      </div>
    </div>

    <div class="choice-address">
      <img src='../../static/img/add.png' alt="" class="add"/>
      <div class="add-next">
        <p class="an-t">北四环新东桥往北500米</p>
        <p class="an-b">距您710米</p>
      </div>
      <img src='../../static/img/g-phone.png' alt="" class="phone"/>
    </div>
    <div class="ser-time">
      服务时间
      <img src='../../static/img/arr-r.png' alt="" class="arr-r"/>
    </div>

    <div class="server-item" v-for="item in fuwuList">
      <div class="connect"  @click="buy(item.id,item.imgUrl,item.detail,item.price,item.name)">购买</div>
      <img :src='item.imgUrl' alt="" class="si-img"/>
      <div class="s-con">
        <p class="sc-tit">{{item.name}}</p>
        <div class="server-con">
          <div class="start fl">
            <span class='i-start'></span>
          </div>
          <span class="fl">{{item.praise}}条</span>
        </div>
        <p class="normal-txt">
          {{item.detail}}
        </p>

        <div class="bot-info clearfix">
          <p class="fl">营业时间 8:00-18:00</p>
          <p class="fr">已售{{item.saled}}</p>
        </div>
      </div>
    </div>

    <div class="persons">
      <div class="p-head">
        <div class="fl">
          <img src='../../static/img/person-h.png' alt="" class="person-img fl"/>
          <span class="fl ft-32">维修师傅</span>
        </div>
        <div class="fr">
          <span class="fl ft-28">更多</span>
          <img src='../../static/img/arr-r.png' alt="" class="arr-rr"/>
        </div>
      </div>
      <div class="clearfix">
        <div class="per-di mb30" v-for="item in shifuList">
          <img :src='item.imgUrl' alt="" class="per-tou"/>
          <p>{{item.name}}</p>
          <p>成交{{item.saled}}单</p>
        </div>
      </div>
    </div>

    <div class="bot"></div>
      <div class="bot-final">
        <div class="bf-item or">联系他</div>
      <div class="bf-item gree">收藏</div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "stationDetail",
      data(){
        return{
          id:this.$route.params.id,
          shifuList:[],
          fuwuList:[],
          pageFuWuIndex:1,
          pageShiFuIndex:1
        }
      },
      mounted() {
        this.getFuWuList();
        this.getShiFuList();
      },
      methods: {
        buy(id,imgUrl,detail,price,name){
          this.$router.push({
            path:'/goumaifuwu',
            name:'goumaifuwu',
            query:{
              id:id,
              imgUrl:imgUrl,
              detail:detail,
              name:name,
              price:price
            }
          })
        },
        getShiFuList(){
          var _this = this;
          _this.$axios({
            url:_this.global.globalUrl+'/i/fixshop/getservice',
            method: 'post',
            data: {pageIndex:_this.pageShiFuIndex,fixshopId:_this.id},
            headers:{
              'Content-Type':'application/json',
              'user':window.localStorage.getItem('userId')
            }
          }).then(res=>{
            _this.shifuList = res.data.data.dataList;
          })
            .catch(function(err){
              console.log(err)
            });
        },
        getFuWuList(){
          var _this = this;
          _this.$axios({
            url:_this.global.globalUrl+'/i/fixshop/getservice',
            method: 'post',
            data: {pageIndex:_this.pageFuWuIndex,fixshopId:_this.id},
            headers:{
              'Content-Type':'application/json',
              'user':window.localStorage.getItem('userId')
            }
          }).then(res=>{
            _this.fuwuList = res.data.data.dataList;
          })
            .catch(function(err){
              console.log(err)
            });
        },
      }
    }
</script>

<style scoped>

  .c-title{
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    font-size: 34px;
    position: relative;
    background-color: #42a00a;
    font-weight: 400;
  }
  .return{
    position: absolute;
    top: 0;
    left: 45px;
    z-index: 9;
  }
  .arr-l{
    float: left;
    height: 88px;
    width: 20px;
    margin-right: 30px;
    background-image: url(static/img/arr-l.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .return-txt{
    line-height: 88px;
    float: left;
  }
  .share-img{
    position: absolute;
    height: 30px;
    top: 30px;
    right: 43px;
  }

  .top-tab{
    height: 75px;
    line-height: 75px;
    font-size: 32px;
    text-align: center;
    width: 92%;
    margin: 0 auto;  }

  .tt-item{
    float: left;
    height: 75px;
    width: 50%;
    border-bottom: 4px solid #595757;
  }
  .act{
    color: #ef8014;
    border-color: #ef8014;
  }

  .choice-address{
    background-color: #fff;
    margin-top: 20px;
    padding: 30px;
    overflow: hidden;
  }
  .add{
    float: left;
    display: block;
    margin-right: 22px;
    width: 36px;
    margin-top: 24px;
  }
  .add-next{
    float: left;

  }
  .an-t{
    line-height: 55px;
    font-size: 32px;
  }
  .an-b{
    line-height: 40px;
    margin-top: 10px;
    font-size: 24px;
    color: #ef8013;
  }
  .phone{
    float: right;
    width: 55px;
    margin-top: 28px;
    margin-right: 15px;
  }
  .ser-time{
    height: 90px;
    line-height: 90px;
    font-size: 32px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .arr-r{
    float: right;
    margin-right: 10px;
    width: 20px;
    margin-top: 29px;
  }
  .bot{
    margin-bottom: 130px;
  }
  .bot-final{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .bf-item{
    float: left;
    width: 50%;
    height: 100px;
    line-height: 100px;
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
  .or{
    background-color: #ef8014;
  }
  .gree{
    background-color: #42a00a;
  }
  .persons{
    background-color: #fff;
    padding: 0 30px;
    margin-top: 20px;
  }
  .p-head{
    height: 84px;
    line-height: 83px;

  }
  .person-img{
    width: 44px;
    margin-right: 20px;
    margin-top: 18px;
  }
  .arr-rr{
    float: left;
    margin-right: 15px;
    width: 20px;
    margin-left: 15px;
    margin-top: 24px;
  }
  .per-di{
    float: left;
    width: 33.333%;
    font-size: 28px;
    color: #595757;
    line-height: 40px;
    text-align: center;
  }
  .per-tou{
    width: 130px;
    display: block;
    margin: 20px auto;
    height: 130px;
  }


  .server-item{
    position: relative;
    overflow: hidden;
    background-color: #fff;
    padding: 30px 50px 30px 30px;}
  .connect{
    color: #fff;
    background-color: #42a00a;
    width: 120px;
    text-align: center;
    line-height: 55px;
    height: 55px;
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: 32px;
  }
  .si-img{
    float: left;
    width: 200px;
    display: block;
    margin-right: 35px;
  }
  .s-con{
    margin-left: 235px;
  }
  .sc-tit{
    font-size: 32px;
  }
  .server-con{
    font-size: 28px;
    color: #595757;
    margin-top: 18px;
    overflow: hidden;
  }
  .price{
    line-height: 68px;
    font-size: 28px;
    color: #ef8013;
    border-bottom: 1px solid #c9caca;
  }
  .normal-txt{
    line-height: 68px;
    font-size: 28px;
    border-bottom: 1px solid #c9caca;
  }
  .bot-info{
    height: 30px;
    color: #595757;
    font-size: 24px;
    margin-top: 10px;
  }
  .bi-1{
    float: left;
    width: 155px;
  }
  .bi-r{
    float: right;
  }
  .inner{
    padding-top: 0;
  }
  .start{
    float: left;
    margin-right: 55px;
  }
  .i-start{
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 32px;
    background-image: url(static/img/man.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .kong{
    background-image: url(static/img/start.png);
  }
  .no-border{
    border: none;
  }

  .common-bot{
    position: fixed;
    height: 98px;
    bottom: 0;
    left: 0;
    line-height: 98px;
    font-size: 32px;
    text-align: center;
    color: #fff;
    width: 100%;
    background-color: #fff;
  }



  .ft-24{
    font-size: 24px;
  }

  .ft-28{
    font-size: 28px;
  }

  .ft-32{
    font-size: 32px;
  }
</style>
