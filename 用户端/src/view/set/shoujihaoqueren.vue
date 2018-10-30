<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/set'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      更换成功
    </p>

    <p class="p">更换手机号码成功</p>
    <p class="p">下次请使用新的号码登陆</p>

    <button>好的</button>

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
    margin-bottom: 50px;
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

  .listLXY{
    display: flex;
    background: #fff;
    font-size: 30px;
    height: 80px;
    line-height: 80px;
    color: #595757;
    padding-left: 30px;
    margin: 20px 0;
  }
  input {
    width: 450px;
  }
  .listLXY span{
    text-align: center;
    border-left:1px solid #000;
    padding-left: 30px;
  }

  button{
    width: 650px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    background: #ef8013;
    color: #fff;
    display: block;
    border: none;
    margin: 0 auto;
    margin-top: 60px;
  }

  p.p{
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    color: #595757;
  }

</style>
