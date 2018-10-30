<template>
  <div>
    <div class="bot-line"></div>
    <div class="bot-nav">
      <ul class="bot-in">
        <li class="nav-item" :class='[{on:index === idx} ]' v-for='(item,index) of items' :key="item" @click="$router.push(item.push)">
          <img :src="item.img" alt="" class="nav-img"  v-if="item.cls != active">
          <img :src="item.imgC" alt="" class="nav-img"  v-if="item.cls == active">
          <p class="nav-txt">
            {{item.name}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "home",
          name: "首页",
          push: "/home",
          img: require('../static/img/nav-home.png'),
          imgC:require('../static/img/act-home.png')
        },
          {
            cls: "zhiliao",
            name: "质聊",
            push: "/zhiliao",
            img: require('../static/img/nav-talk.png'),
            imgC: require('../static/img/act-talk.png'),
          },
          {
            cls: "my",
            name: "我的",
            push: "/my",
            img: require('../static/img/nav-person.png'),
            imgC: require('../static/img/act-person.png'),
          }
        ]
      }
    },
    computed: {
      active: function () {
        console.log(this.$route.meta);
        return this.$route.meta
      }
    },
    props: ['idx']
  }
</script>
<style >
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .bot-line{
    height: 100px;
  }
  .bot-nav{
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
  .bot-in{
    overflow: hidden;
    margin: 0 30px;
  }
  .nav-item{
    float: left;
    width: 33.3333%;
    text-align: center;
  }
  .nav-img{
    /*width: 50px;*/
    height: 50px;
    margin: 0 auto;
    margin-top: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: block;
  }
  .nav-txt{
    color: #595757;
    height: 28px;
    line-height: 28px;
    margin-top: 4px;
    font-size: 12pt;
  }
  .on .nav-txt{
    color: #42a00b;
  }
</style>
