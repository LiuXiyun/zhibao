<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/fanganbaojia'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      选择维修材料
    </p>

    <div class="info-item mt20">
      <img src="../../static/img/my_skills_icon@3x.png" alt="" class="arr"/>
      <span class="fl">漏气故障</span>
    </div>
    <div class="info-item mt20">
      <img src="../../static/img/my_skills_icon@3x.png" alt="" class="arr"/>
      <span class="fl">漏气故障</span>
    </div>
    <div class="info-item mt20">
      <img src="../../static/img/my_skills_icon@3x.png" alt="" class="arr"/>
      <span class="fl">老化腐蚀故障</span>
    </div>
    <div class="info-item mt20">
      <img src="../../static/img/my_skills_icon@3x.png" alt="" class="arr"/>
      <span class="fl">损坏故障</span>
    </div>
    <div class="other">
      <p>其他</p>
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    <div class="info-item mt20 baojia">
      <div class="d2">
        <div></div>
        <p>无故障</p>
      </div>
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    <button @click="$router.push('/fanganbaojiaq')">选好了</button>
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
  .myContent{
    font-size: 32px;
  }
  .info-item{
    background-color: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    line-height: 90px;
    font-size: 32px;
    color: #595757;
  }
  .info-item1{
    background-color: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    line-height: 90px;
    font-size: 32px;
    color: #595757;
  }
  .info-item1 div{
    height: 200px;
    display: block;
    line-height: 200px;
    text-align: center;
    font-size: 50px;
    border: 1px solid #000;
    margin-bottom: 30px;
  }
  .info-item1.neirong div{
    height: 100px;
  }
  .info-item1.jiage div{
    height: 60px;
    line-height: 60px;
  }
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 40px;
  }
  .nor-img{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 30px;
    margin-top: 24px;
  }
  .mt21>span{
    width: 200px;
  }
  .mt21>span>span{
    background: #ef8013;
  }
  .labelList span{
    display: inline-block;
    font-size: 30px;
    margin-top: 10px;
    margin-right: 20px;
  }
  .info-item button{
    width: 45%;
    font-size: 30px;
    border:none;
    color: #fff;
    padding: 10px 20px;
  }
  .margin{
    margin-bottom: 50px;
  }
  .mt20{
    margin-top: 10px;
  }
  .banbenhao{
    right: 100px;
  }
  button{
    width: 600px;
    background: #42a00a;
    color: #fff;
    font-size: 32px;
    margin: 0 auto;
    margin-top: 50px;
    height: 100px;
    border: none;
    line-height: 100px;
    display: block;
  }
  .text{
    right: 100px;
    width: auto;
  }
  .baojia {
    background: transparent;
    font-size: 30px;
  }
  .baojia .d1 div,.baojia .d2 div{
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: 2px solid #000;
    margin-right: 20px;
    vertical-align: middle;
  }
  .baojia .d1 p,.baojia .d2 p{
    display: inline-block;
  }
  .zongji{
    margin-top: 40px;
    text-align: right;
    font-size: 30px;
    margin-right: 20px;
  }
  .zongji span{
    color: #ef8013;
  }
  input{
    border: 1px solid #000;
    padding-left: 40px;
    height: 50px;
    line-height: 50px;
  }


  .other{
    padding: 34px;
    font-size: 30px;
  }
  textarea{
    width: 710px;
    padding: 20px;
    font-size: 30px;
  }
</style>
