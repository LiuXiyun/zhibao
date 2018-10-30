<template>
  <div>
    <div class="server-item" v-for="item in fuwuList">
      <img :src='item.imgUrl' alt="" class="si-img"/>
      <div class="s-con">
        <p class="sc-tit">{{item.name}}</p>
        <p class="server-con">{{item.detail}}</p>
        <p class="price">
          {{item.price}}分/次
        </p>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
      name: "zhaofuwu",
      data() {
        return {
          pageIndex:1,
          fuwuList:[]
        }
      },
      mounted() {
        this.getFuWuList();
      },
      methods: {
        getFuWuList(){
          var _this = this;
          _this.$axios({
            url:_this.global.globalUrl+'/i/fixservice/getlist',
            method: 'post',
            data: {pageIndex:_this.pageIndex},
            headers:{
              'Content-Type':'application/json',
              'user':window.localStorage.getItem('userId')
            }
          }).then(res=>{
            _this.fuwuList = res.data.data.dataList;
            console.log(_this.fuwuList);
          })
            .catch(function(err){
            });
        }
      }
    }
</script>

<style scoped>

  .server-item{
    position: relative;
    overflow: hidden;
    background-color: #fff;
    padding: 30px 50px 30px 30px;
  margin-bottom: 20px;}

  .si-img{
    float: left;
    width: 200px;
    display: block;
    margin-right: 35px;
  }
  .s-con{
    margin-left: 235px;
  }
  .sc-tit{
    font-size: 32px;
  }
  .server-con{
    font-size: 28px;
    color: #595757;
    margin-top: 18px;
    overflow: hidden;
  }
  .price{
    line-height: 68px;
    font-size: 28px;
    color: #ef8013;
    border-bottom: 1px solid #c9caca;
  }
  .bot-info{
    height: 30px;
    color: #595757;
    font-size: 24px;
    margin-top: 10px;
  }
  .bi-1{
    float: left;
    width: 155px;
  }
  .bi-r{
    float: right;
  }

</style>
