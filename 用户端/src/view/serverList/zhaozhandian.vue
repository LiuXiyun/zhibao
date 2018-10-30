<template>
  <div>
    <div class="tab-head inner">
      <div class="tab-con clearfix">
        <div class="tab-item"  :class="{act:currentTab=='haoping'}">好评</div>
        <div class="tab-item no-lrb"  :class="{act:currentTab=='jiage'}">价格</div>
        <div class="tab-item"  :class="{act:currentTab=='juli'}">距离</div>
      </div>
    </div>
    <div  v-for="item in zhandianList">
      <div class="server-item"  @click="goToStationDetail(item.id)">
        <img :src='item.headImg' alt="" class="si-img"/>
        <div class="s-con">
          <p class="sc-tit">{{item.name}}</p>
          <div class="server-con">
            <div class="start fl">
              <span class='i-start'  v-for="star in item.score"></span>
            </div>
            <span class="fl">{{item.praise}}条</span>
          </div>
          <p class="price">
            {{item.praise}}分/次
          </p>
          <div class="bot-info clearfix">
            <p class="fl">营业时间 {{item.serviceTime}}</p>
            <p class="fr">已售{{item.saled}}</p>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zhaozhandian",
    data() {
      return {
        pageIndex:1,
        zhandianList:[]
      }
    },
    mounted() {
      this.getZhandainList();
    },
    methods: {
      getZhandainList(){
        var _this = this;
        _this.$axios({
          url:_this.global.globalUrl+'/i/fixshop/getlist',
          method: 'post',
          data: {pageIndex:_this.pageIndex},
          headers:{
            'Content-Type':'application/json',
            'user':window.localStorage.getItem('userId')
          }
        }).then(res=>{
          _this.zhandianList = res.data.data.dataList;
        })
          .catch(function(err){
            console.log(err)
          });
      },
      goToStationDetail(id){
        this.$router.push('/stationDetail/'+id);
      }
    }
  }
</script>

<style scoped>

  .tab-head{
    padding: 20px 30px;
    background-color: #e6e6e6;
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
    background-image: url(./static/img/man.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .kong{
    background-image: url(./static/img/start.png);
  }
  .no-border{
    border: none;
  }
  .tab-item{
    float: left;
    width: 33%;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 28px;
    color: #595757;
    border: 1px solid #595757;
  }
  .no-lrb{
    border-left: none;
    border-right: none;
  }
  .tab-item.act{
    color: #fff;
    background-color: #42a00a;
  }
</style>
