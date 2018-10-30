<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/set'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      修改手机号
    </p>

    <div class="contentLXY">
      <p>为了账号安全，请输入当前密码</p>
      <input type="text">
      <div class="btn-group">
        <button @click="$router.push('/set')">取消</button>
        <button @click="$router.push('/xiugaishoujihao2')">确认</button>
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
  .contentLXY{
    font-size: 30px;
    background: #fff;
    padding:30px;
    margin: 0 auto;
    margin-top: 280px;
    width: 650px;
  }
  p{
    text-align: center;
    font-size: 30px;
    color: #595757;
    margin-bottom: 20px;
  }
  input{
    border: 1px solid #000;
    height: 60px;
    line-height: 60px;
    width: 550px;
    display: block;
    margin: 0 auto;
    margin-bottom: 34px;
  }

  .btn-group{
    width: 550px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-group button{
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    background: #fff;
    border: 1px solid #000;
    width: 260px;
    color: #595757;
  }
  .btn-group button:last-child{
    border: none;
    background: #ef8013;
    color: #fff;
  }
</style>
