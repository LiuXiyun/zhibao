<template>
  <div class="my myContent">
    <p class="title">
      <span>待完成订单（3）</span>
      <router-link  class="bell" :to="{path:'/faburenwu'}" >
        <span>发布服务</span>
      </router-link>
    </p>

    <div class="listLXYF">
      <div class="listLXY">
        <p>今日 <span>18：00</span> <span>燃气罩维修</span></p>
        <p>未接单</p>
      </div>

      <div  class="fuwuList" @click="$router.push('/dingdanxiangqing')">
        <div class="fuwuListC">
          <div class="content">
            <div class="name">
              <p>燃气罩不打火</p>
            </div>
            <div class="map">
              <img src="../../static/img/map_location_grey_icon@2x.png" alt="">
              <p>燃气罩不打火</p>
            </div>
            <button>查看地图</button>
          </div>
          <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="">
        </div>
        <div class="btn-group clearfix">
          <button>接单</button>
          <button>拒单</button>
        </div>
      </div>
    </div>

    <div class="listLXYF" @click="$router.push('/dingdanxiangqing2')">
      <div class="listLXY">
        <p>今日 <span>18：00</span> <span>燃气罩维修</span></p>
        <p>已接单</p>
      </div>

      <div  class="fuwuList">
        <div class="fuwuListC">
          <div class="content">
            <div class="name">
              <p>燃气罩不打火</p>
            </div>
            <div class="map">
              <img src="../../static/img/map_location_grey_icon@2x.png" alt="">
              <p>燃气罩不打火</p>
            </div>
            <button>查看地图</button>
          </div>
          <img src="../../static/img/click_on_the_ on_the_ right_icon@3x.png" alt="">
        </div>
        <div class="btn-group clearfix">
          <button>接单</button>
          <button>拒单</button>
        </div>
      </div>
    </div>

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

  .title{
    height: 88px;
    background: #ef8013;
    text-align: center;
    font-size: 40px;
    line-height: 88px;
    color: #fff;
    margin: 0;
    margin-bottom: 20px;
  }
  .bell{
    position: absolute;
    right: 20px;
    color: #fff;
  }
  .listLXY{
    background: #fff;
    display: flex;
    height: 80px;
    line-height: 80px;
    padding-left: 40px;
    margin-bottom: 20px;
  }
  .listLXY p{
    font-size: 30px;
  }
  .listLXY p:first-child{
    width: 100%;
    border-right: 1px solid #000;
  }
  .listLXY p:last-child{
    color: #009fe8;
    width: 200px;
    text-align: center;
  }
  .fuwuList{
    margin-bottom: 30px;
  }
  .fuwuListC{
    background: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: center;
  }
  .fuwuListC .content{
    width: 100%;
  }
  .map{
    display: flex;
    align-items: center;
  }
  .map img{
    height: 34px;
    vertical-align: middle;
  }
  .fuwuListC .content p{
    margin-bottom: 20px;
    font-size: 30px;
  }
  .fuwuListC .content img{
    width: 30px;
    margin-right: 30px;
  }
  .content button{
    background: #595757;
    color: #fff;
    width: 180px;
    height: 60px;
    line-height: 60px;
    border-radius: 7px;
  }
  .fuwuListC img{
    width: 30px;
    height: auto;
  }
  .btn-group{
    margin: 30px 0;
  }
  .btn-group button{
    background: #ef8013;
    color: #fff;
    width: 180px;
    height: 60px;
    line-height: 60px;
    float: right;
    border-radius: 7px;
    margin-right: 20px;
    border: none;
  }
  .btn-group button:last-child{
    background: #009fe8;
    color: #fff;
    width: 180px;
    height: 60px;
    line-height: 60px;
    border-radius: 7px;
  }


</style>
