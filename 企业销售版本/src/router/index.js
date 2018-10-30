import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'


import regist from '../view/regist/regist'
import login2 from '../view/login/login'
import qiyebangdingma from '../view/qiyebangdingma/qiyebangdingma'
import quxiaobangding from '../view/quxiaobangding/quxiaobangding'
import shenhetongguo from '../view/shenhetongguo/shenhetongguo'


import home from '../view/home/home'
import addNewYuangong from '../view/home/addNewYuangong'
import shangpinxiangqing from '../view/shangpinxiangqing/shangpinxiangqing'

import zhiliao from '../view/zhiliao/zhiliao'
import lianxiren from '../view/zhiliao/lianxiren'

import my from '../view/my/my'
import message from '../view/my/message'
import messageDetail from '../view/my/messageDetail'
import xiaoshoudingdan from '../view/my/xiaoshoudingdan'
import xiaoshoudingdanxiangqing from '../view/my/xiaoshoudingdanxiangqing'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      component: regist,
    },
    {
      path: '/login',
      component: login2,
    },
    {
      path: '/qiyebangdingma',
      component: qiyebangdingma,
    },
    {
      path: '/quxiaobangding',
      component: quxiaobangding,
    },
    {
      path: '/shenhetongguo',
      component: shenhetongguo,
    },
    {
      path: '/home',
      component: home,
      meta:'home'
    },
    {
      path: '/addNewYuangong',
      component: addNewYuangong,
    },
    {
      path: '/shangpinxiangqing',
      component: shangpinxiangqing,
    },
    {
      path: '/zhiliao',
      component: zhiliao,
      meta:'zhiliao'
    },
    {
      path: '/lianxiren',
      component: lianxiren,
      meta:'zhiliao'
    },
    {
      path: '/my',
      component: my,
      meta:'my'
    },
    {
      path: '/message',
      component: message,
    },
    {
      path: '/messageDetail',
      component: messageDetail,
    },
    {
      path: '/xiaoshoudingdan',
      component: xiaoshoudingdan,
    },
    {
      path: '/xiaoshoudingdanxiangqing',
      component: xiaoshoudingdanxiangqing,
    }
  ]
})
