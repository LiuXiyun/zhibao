<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/fanganbaojia1'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      选择维修材料
    </p>
  <div class="content">
      <div class="img1">
        <img src="../../static/img/select_material_picture_icon@3x.png" alt="">
      </div>

      <div class="d1">
        <p>我已选择的配件清单</p>
        <img src="../../static/img/recycling_waste_icon@3x.png" alt="">
      </div>


      <div class="listLXY listLXY1">
        <p class="p1">项目名称</p>
        <p class="p2">数量</p>
        <p class="p3">单价</p>
      </div>

      <div class="listLXY">
        <p class="p1">配件2名称名</p>
        <p class="p2">
          <span>-</span>
          <span>2</span>
          <span>+</span>
        </p>
        <p class="p3">¥ <span>0.00</span></p>
      </div>

    <p class="p4">合计金额： <span>120.0</span>元</p>

      <div class="btn-group">
        <div @click="$router.push('/cailiaoxuanze2')">
          <div>
            <img src="../../static/img/add_to_cart_icon@3x.png" alt="">
            <span>1</span>
          </div>
          <p>已选择10件</p>
        </div>
        <button @click="$router.push('/fanganbaojia2')">选好了</button>
      </div>
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
    position: absolute;
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

  .listLXY{
    display: flex;
    background: #fff;
    padding: 0 30px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .listLXY1{
    display: flex;
    background: transparent;
    padding: 10px 20px;
    font-size: 32px;
    align-items: center;
  }
  .p1{
    width: 300px;
    font-size: 32px;
    text-align: left;
  }
  .p2{
    width: 300px;
    font-size: 32px;
    text-align: center;
  }
  .p3{
    width: 150px;
    font-size: 32px;
    text-align: right;
  }
  .p2 span:first-child{
    border: 1px solid #ef8013;
    color: #ef8013;
    height: 60px;
    width: 60px;
    line-height: 60px;
    border-radius: 100%;
    font-size: 30px;
    display: inline-block;
    margin-right: 30px;
  }
  .p2 span:last-child{
    border: 1px solid #ef8013;
    height: 60px;
    width: 60px;
    line-height:60px;
    border-radius: 100%;
    font-size: 32px;
    background: #ef8013;
    color: #fff;
    display: inline-block;
    margin-left: 30px;
  }
  .content{
    padding: 0 20px;
  }
  .d1{
    padding: 20px;
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .d1 img{
    width: 50px;
  }
  .img1 img{
    width: 100%;
  }
  .p4{
    padding: 20px;
    color: #595757;
    font-size: 30px;
    text-align: right;
  }
  .p4 span{
    color: #ef8013;
  }
</style>
