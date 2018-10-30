<template>
  <div>

    <div class="c-title">
      延保商品
      <div class="return"   @click="$router.push('/yanbaoshangpin')">
        <span class="arr-l"></span>
        <span class="return-txt">返回</span>
      </div>
    </div>

     <div class="row">
      <div class="left">
        <ul>
          <li v-for="item in fenleiList" @click="getShangpin(item.id)">{{item.category}}</li>
        </ul>
      </div>
      <div class="right">
        <div class=""  v-for="item in shangpinList">
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.marker}}</p>
          <p class="p3">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "tianjiashangpin",
      data() {
        return {
          fenleiList: '',
          pageIndex:1,
          shangpinList:[]
        }
      },
      mounted() {
        this.getFenLeiList();
      },
      methods: {
        getFenLeiList(){
          var _this = this;
          _this.$axios({
            url:_this.global.globalUrl+'/i/goods/getcate',
            method: 'post',
            headers:{
              'Content-Type':'application/json',
              'user':window.localStorage.getItem('userId')
            }
          }).then(res=>{
            _this.fenleiList = res.data.data;
            console.log(_this.fenleiList);
          })
            .catch(function(err){
              console.log(err)
            });
        },
        getShangpin(id){
          var _this = this;
          _this.$axios({
            url:_this.global.globalUrl+'/i/goods/getgoods',
            method: 'post',
            data: {pageIndex:_this.pageIndex,cateId:id},
            headers:{
              'Content-Type':'application/json',
              'user':window.localStorage.getItem('userId')
            }
          }).then(res=>{
            _this.shangpinList = res.data.data.dataList;
            console.log(_this.fenleiList);
          })
            .catch(function(err){
              console.log(err)
            });
        },
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
    margin-bottom: 20px;
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



  .row{
    display: flex;
  }
  .left{
    float: left;
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
  .right p.p1{
    font-size: 35px;
    margin: 10px 0;
  }
  .right div{
    background: #fff;
    padding: 10px 20px;
    margin-bottom: 20px;
  }


</style>
