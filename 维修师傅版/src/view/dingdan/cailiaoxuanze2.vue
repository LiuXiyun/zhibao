<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/fanganbaojia1'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      选择维修材料
    </p>
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
        <div class="content">
            <img src="../../static/img/refrigerator_icon@2x.png" alt=""/>
            <div>
              <p class="p1">美的冰箱18款</p>
              <p class="p2">美的冰箱18款</p>
              <p class="p3">
                <span class="s1">$100.0</span>
                <span class="s2">-</span>
                <span class="s3">1</span>
                <span class="s4">+</span>
              </p>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-group">
      <div @click="$router.push('/cailiaoxuanze')">
        <div>
          <img src="../../static/img/add_to_cart_icon@3x.png" alt="">
          <span>1</span>
        </div>
        <p>已选择10件</p>
      </div>
      <button>选好了</button>
    </div>
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
  .btn-group{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    width: 100%;
    color: #fff;
    left: 0;
  }
  .btn-group>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    background: #ef8013;
    padding: 0 20px;
    height: 100px;
    line-height: 100px;
  }
  .btn-group>div div img{
    width: 70px;
    vertical-align: middle;
  }
  .btn-group>div div{
    position: relative;
    padding: 0 20px;
  }
  .btn-group>div div span{
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    color: #ef8013;
    background: #fff;
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 10pt;
    text-align: center;
  }
  .btn-group button{
    width: 50%;
    background: #42a00a;
    border: none;
    display: block;
    color: #fff;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
  }

  .row{
    display: flex;
    margin-bottom: 150px;
    padding-top: 20px;
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
    background: #fff;
  }
  .right .content img{
    width: 140px;
    height: 140px;
  }
  .right .content p.p1{
    font-size: 30px;
  }
  .right .content p.p2{
    font-size: 26px;
    color: #595757;
  }
  .right .content p.p3{
    font-size: 20px;
  }
  .right .content span{
    color: #ef8013;
  }
  .s1{
    display: inline-block;
    font-size: 12pt;
    width: 200px;
  }
  .s2{
    display: inline-block;
    font-size: 12pt;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    color: #ef8013;
    border: 2px solid #ef8013;
    /*line-height: 40px;*/
    text-align: center;
  }
  .s3{
    display: inline-block;
    font-size: 12pt;
    line-height: 40px;
    text-align: center;
  }
  .right .content span.s4{
    display: inline-block;
    font-size: 12pt;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid #ef8013;
    background: #ef8013;
    color: #fff;
    /*line-height: 40px;*/
    text-align: center;
  }
</style>
