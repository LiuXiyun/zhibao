<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/set'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      修改登陆密码
    </p>

    <div class="listLXY">
      <span>原密码:</span>
      <input type="text" placeholder="当前登陆密码">
    </div>

    <div class="listLXY">
      <span>新密码:</span>
      <input type="text" placeholder="请输入新密码">
    </div>

    <div class="listLXY">
      <span>确认新密码:</span>
      <input type="text" placeholder="请再次输入新密码">
    </div>

    <button>确定</button>
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

  .listLXY{
    background: #fff;
    padding: 20px;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #595757;
  }
  .listLXY span{
    width: 200px;
  }
  button{
    width: 600px;
    background: #ef8013;
    color: #fff;
    font-size: 32px;
    margin: 0 auto;
    margin-top: 50px;
    height: 100px;
    border: none;
    line-height: 100px;
    display: block;
  }
</style>
