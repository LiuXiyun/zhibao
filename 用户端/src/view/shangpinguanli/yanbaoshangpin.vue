<template>
  <div>
    <div class="c-title">
      延保商品
      <div class="return"   @click="$router.push('/home')">
        <span class="arr-l"></span>
        <span class="return-txt">返回</span>
      </div>
    </div>

    <div class="tabLxy">
      <div :class="{active:currentTab=='yanbao'}" @click="toggleTab('yanbao')">
        已购买的延保
      </div>
      <div :class="{active:currentTab=='shangpin'}" @click="toggleTab('shangpin')">
        已添加的商品
      </div>
    </div>

    <div :is="currentTab" keep-alive></div>
  </div>
</template>

<script>
    import yanbao from './yanbao';
    import shangpin from './shangpin';

    export default {
        name: "yanbaoshangpin",
        data () {
          return {
            currentTab: 'yanbao' // currentTab 用于标识当前触发的子组件
          };
        },
        components: { // 声明子组件
          yanbao,
          shangpin
        },
        methods: {
          toggleTab: function(tab) {
            this.currentTab = tab; // tab 为当前触发标签页的组件名
          }
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

  .tabLxy{
    display: flex;
    /*width: 100%;*/
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  .tabLxy>div{
    width: 50%;
    font-size: 30px;
    color: rgb(89,87,87);
    padding-bottom: 20px;
    border-bottom: 4px solid rgb(89,87,87);
  }
  .tabLxy>div.active{
    color: rgb(239,128,20);
    border-color: rgb(239,128,20)
  }
</style>
