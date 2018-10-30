<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/my'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      钱包流水
    </p>

    <div class="contentLXY">
      <div class="btn-group">
        <button>全部</button>
        <button class="active">收入</button>
        <button>支出</button>
      </div>
    </div>
    <div class="listLXY">
      <div class="neirong">
        <p>收入（编号123）</p>
        <p>2017-09-09 10：10</p>
      </div>
      <div class="price">
        <p>+2000.0</p>
      </div>
    </div>

    <div class="allliushui">
      <span>查看全部流水</span>
    </div>
  </div>

  <!--<router-link class="return" :to="{path:'/allliushui'}" >-->
    <!--<span>查看全部流水历史</span>-->
  <!--</router-link>-->
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
  }
  .btn-group{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  .btn-group button{
    border:none;
    height: 80px;
    line-height: 80px;
    text-align: center;
    width: 33%;
    border-bottom: 4px solid #595757;
    background: transparent;
  }


  .listLXY{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 15px 30px;
    background: #fff;
    margin-top: 30px;
  }
  .listLXY .price{
    font-size:30px;
    border-bottom: 0;
  }
  .listLXY .neirong{
    width:55%;
  }
  .listLXY .neirong p:first-child{
    font-size:30px;
    margin-bottom: 10px;
  }
  .listLXY .neirong p:last-child{
    font-size: 25px;
    color:rgb(89,87,87);
  }
  .allliushui{
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 20px;
  }
  button.active{
    color: #ef8013;
    border-color: #ef8013;
  }
</style>
