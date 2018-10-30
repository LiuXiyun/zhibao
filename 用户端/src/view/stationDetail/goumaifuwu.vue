<template>
  <div>
    <div class="c-title">
      报修
      <div class="return">
        <span class="arr-l"></span>
        <span class="return-txt" @click="$router.go(-1)">返回</span>
      </div>
    </div>
    <div class="contentLXY">
      <div class="detailContent">
        <div class="div">
          <img :src='imgUrl' alt="">
        </div>
        <div class="detail">
          <p class="p1">{{name}}</p>
          <p class="p2">{{detail}}</p>
          <p class="p3"><span>{{price}}元/次</span></p>
        </div>
      </div>

      <div class="info-item mt20">
        <img src="../../static/img/arr-r.png" alt="" class="arr"/>
        <span class="fl">上门时间：</span>
        <span class="arr text"></span>
      </div>

      <div class="info-item mt20"  @click="$router.push('/shangmenxinxiOrder');">
        <img src="../../static/img/arr-r.png" alt="" class="arr"/>
        <span class="fl">上门信息：</span>
        <span class="arr text"></span>
      </div>

      <div class="info-item mt20">
        <img src="../../static/img/arr-r.png" alt="" class="arr"/>
        <span class="fl">故障现象（非必填）：</span>
        <span class="arr text"></span>
      </div>

      <div class="info-item mt20">
        <img src="../../static/img/arr-r.png" alt="" class="arr"/>
        <span class="fl">备注</span>
        <span class="arr text"></span>
      </div>
    </div>
    <div class="buttonLXY">
      <button @click="goumai">确定</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "goumaifuwu",
    data () {
      return{
        id:this.$route.query.id,
        name:this.$route.query.name,
        imgUrl:this.$route.query.imgUrl,
        detail:this.$route.query.detail,
        price:this.$route.query.price,
      }
    },
    mounted() {
      console.log(this.id)
    },
    methods: {
      goumai(){
        var _this = this;
        _this.$axios({
          url:_this.global.globalUrl+'/i/order/addorder',
          method: 'post',
          data: {
              "customerName": "罗",
              "customerPhone": "18812345678",
              "fixTime": "2018-10-12 16:30",
              "nature": 0,
              "serviceId": "D80AA66C23AF428FB91DC4E5EB9AFE9B",
              "workerId": "0091AFFA023F47C8A45C3BE28E9A0E3A",
              "shopId": "",
              "phenomenon": "下水道堵了",
              "remark": "不要迟到",
              "address": "爱工场8号楼"
            },
          headers:{
            'Content-Type':'application/json',
            'user':window.localStorage.getItem('userId')
          }
        }).then(res=>{
          console.log(res.data)
          let orderId = res.data.data;
          console.log(orderId)
          this.$router.push('/orderDetail/'+orderId);
        })
          .catch(function(err){
            console.log(err)
          });
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

  .detail{

  }
  .p2{
    font-size: 26px;
  }
  .p3{
    font-size: 24px;
    color: #ef8014;
  }

  .contentLXY{
    margin-bottom: 100px;
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
    margin-top: 0;
  }
  .arr{
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 22px;
  }


  .buttonLXY{
    position: fixed;
    bottom: 0;
    width: 690px;
    font-size: 32px;
    border: none;
    height: 100px;
    line-height: 100px;
    text-align: center;
    left: 50%;
    margin-left: -345px;
  }
  .buttonLXY button{
    color: #fff;
    background: #42a00a;
    width: 690px;
    font-size: 32px;
    border: none;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .detailContent{
    display: flex;
    padding: 30px;
    background: #fff;
    margin: 20px 0;
    font-size: 30px;
  }
  .detailContent .div{
    margin-right: 30px;
  }
  .detailContent img{
    width: 200px;
    height: 200px;
  }
  .p1{
    font-size: 32px;
    margin-bottom: 20px;
  }
  .p2{
    font-size: 26px;
    margin-bottom: 20px;
  }
  .p3{
    font-size: 20px;
  }
</style>
