<template>
  <div class="server-list">
    <div class="sl-search clearfix">
      <div class="address">
        <div class="down-arr"></div>
        <span class="add-txt">北京</span>
      </div>
      <div class="search-con clearfix">
        <img src='../../static/img/search.png' alt="" class="search-ico"/>
        <input type="text" class="search-ipt"/>
      </div>
    </div>
    <div class="tab-head">
      <div class="tab-con clearfix">
        <div class='tab-item'  :class="{act:currentTab=='zhaofuwu'}" @click="toggleTab('zhaofuwu')">找服务</div>
        <div class='tab-item no-lrb'  :class="{act:currentTab=='zhaozhandian'}" @click="toggleTab('zhaozhandian')">找站点</div>
        <div class='tab-item'  :class="{act:currentTab=='zhaoshifu'}" @click="toggleTab('zhaoshifu')">找师傅</div>
      </div>
    </div>

    <div :is="currentTab" keep-alive></div>
  </div>
</template>

<script>
  import zhaofuwu from './zhaofuwu';
  import zhaozhandian from './zhaozhandian';
  import zhaoshifu from './zhaoshifu';

    export default {
      name: "serverList",
      data () {
        return {
          currentTab: 'zhaofuwu' // currentTab 用于标识当前触发的子组件
        };
      },
      components: { // 声明子组件
        zhaofuwu,
        zhaozhandian,
        zhaoshifu
      },
      methods: {
        toggleTab: function(tab) {
          this.currentTab = tab; // tab 为当前触发标签页的组件名
        }
      }
    }
</script>

<style scoped>
  .sl-search{
    padding: 15px 90px 15px 45px;
    background-color: #42a00a;
  }
  .address{
    float: left;
  }
  .down-arr{
    width: 28px;
    height: 55px;
    background-image: url(static/img/address-down.png);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    float: left;
    margin-right: 22px;
  }
  .add-txt{
    height: 55px;
    line-height: 55px;
    float: left;
    margin-right: 45px;
    color: #fff;
    font-size: 32px;
  }
  .search-con{
    background-color: #fff;
    height: 55px;
    line-height: 55px;
    padding-left: 20px;
    float: left;
  }
  .search-ico{
    width: 45px;
    float: left;
    margin-right: 15px;
    margin-top: 7px;
  }
  .search-ipt{
    width: 320px;
    float: left;
    font-size: 28px;
    border: none;
    background: none;
    height: 55px;
    line-height: 55px;
    margin-right: 20px;
  }
  .tab-head{
    padding: 20px 30px;
    background-color: #e6e6e6;
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
  .server-detail .s-btn1{
    width: 20%;
    display: inline-block;
    background: #fff;
    color: #000;
  }

  .server-detail .s-btn1:last-child{
    width: 40%;
    background: orange;
  }
  .small{
    color: #ccc;
    text-align: right;
    float: right;
  }
</style>
