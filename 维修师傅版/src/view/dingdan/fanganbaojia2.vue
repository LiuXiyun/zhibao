<template>
  <div class="my myContent">
    <p class="title">
      <router-link class="return" :to="{path:'/cailiaoxuanze'}" >
        <img src="../../static/img/click_the_return_on_the_left_icon@2x.png" alt="" class="arr-l">
        <span>返回</span>
      </router-link>
      方案报价
    </p>



    <div class="contentLXY">
      <p class="p1">请等待用户支付报价140.0元</p>

      <p class="c1">服务类型</p>
      <p class="leixing">维修-燃气采暖炉</p>
      <p class="c1">报价</p>
      <p class="p2">
        <span>上门费：</span>
        <span>50.00元（已支付）</span>
      </p>
      <p class="p2">
        <span>维修费：</span>
        <span>50.00元（已支付）</span>
      </p>
      <p class="p2">
        <span>附加费：</span>
        <span>50.00元（已支付）</span>
      </p>
      <p class="p2">
        <span>材料费：</span>
        <span>50.00元（已支付）</span>
      </p>
      <table>
        <thead>
          <td>序号</td>
          <td>项目</td>
          <td>数量</td>
          <td>单位</td>
          <td>单价（元）</td>
        </thead>
        <tr>
          <td>1</td>
          <td>配件1</td>
          <td>1</td>
          <td>个</td>
          <td>300</td>
        </tr>
      </table>


      <span class="s1"></span>
      <p class="p3">
        <span>还需支付</span>
        <span>140.00元</span>
      </p>
    </div>

    <button @click="$router.push('/cailiaoxuanze')">用户选择了线下付款方式</button>
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

  button{
    width: 650px;
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

  .contentLXY{
    background: #fff;
    margin-top: 20px;
    padding: 20px;
    font-size: 14pt;
  }
  .p1{
    margin: 40px auto;
    text-align: center;
  }
  .c1{
    background: #ef8013;
    color: #fff;
    display: block;
    padding: 10px 20px;
    margin-bottom: 30px;
  }
  .p2 span:first-child{
    width: 200px;
  }
  .p2{
    display: flex;
    align-items: center;
    font-size: 12pt;
  }
  .p2 span{
    display: block;
    height: 70px;
    line-height: 70px;
  }

  table thead{
    background: #ef8013;
    color: #fff;
  }
  table td{
    padding: 10px 20px;
  }
  table{
    text-align: left;
    margin-top: 30px;
    width: 100%;
    font-size: 13pt;
  }
  .s1{
    display: block;
    width: 100%;
    height: 3px;
    background: #000;
    margin: 20px 0;
  }
  .p3{
    margin: 50px 0;
    font-size: 30px;
    padding: 0 20px;
  }
  .p3 span:last-child{
    color: #ef8013;
    float: right;
  }
  .leixing{
    margin-bottom: 30px;
  }
</style>
