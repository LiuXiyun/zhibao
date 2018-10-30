import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'


import regist from '../view/regist/regist'

import home from '../view/home/home'

import forgetPWD from '../view/forgetPWD/forgetPWD'
import replacePWD from '../view/forgetPWD/replacePWD'

import shanggangtiaojian1 from '../view/shanggangtijiao/shanggangtiaojian1'
import getijingying1 from '../view/shanggangtijiao/getijingying1'
import jiaruweixiuzhan1 from '../view/shanggangtijiao/jiaruweixiuzhan1'
import jiaruweixiuzhan2 from '../view/shanggangtijiao/jiaruweixiuzhan2'

import message from '../view/my/message'
import messageDetail from '../view/my/messageDetail'
import gerenxinxi from '../view/my/gerenxinxi'

import my from '../view/my/my'
import set from '../view/set/set'
import xiugaimima from '../view/set/xiugaimima'
import guanyuwomen from '../view/set/guanyuwomen'
import fuwutiaokuan from '../view/set/fuwutiaokuan'
import xiugaishoujihao1 from '../view/set/xiugaishoujihao1'
import xiugaishoujihao2 from '../view/set/xiugaishoujihao2'
import shoujihaoqueren from '../view/set/shoujihaoqueren'

import qianbao from '../view/qianbao/qianbao'
import allliushui from '../view/qianbao/allliushui'
import guizeshuoming from '../view/qianbao/guizeshuoming'
import tixian from '../view/qianbao/tixian'
import tixian2 from '../view/qianbao/tixian2'
import xiugaikaihuhang from '../view/qianbao/xiugaikaihuhang'


import wodefuwu from '../view/wodefuwu/wodefuwu'
import faburenwu from '../view/wodefuwu/faburenwu'
import xiugairenwu from '../view/wodefuwu/xiugairenwu'
import fuwuleixing from '../view/wodefuwu/fuwuleixing'
import fuwuquyu from '../view/wodefuwu/fuwuquyu'
import fuwushijian from '../view/wodefuwu/fuwushijian'

import dingdanxiangqing from '../view/dingdan/dingdanxiangqing'
import dingdanxiangqing2 from '../view/dingdan/dingdanxiangqing2'
import fanganbaojia1 from '../view/dingdan/fanganbaojia1'
import fanganbaojia2 from '../view/dingdan/fanganbaojia2'
import xuanzeguzhangleixing from '../view/dingdan/xuanzeguzhangleixing'
import cailiaoxuanze from '../view/dingdan/cailiaoxuanze'
import cailiaoxuanze2 from '../view/dingdan/cailiaoxuanze2'

import zhiliao from '../view/zhiliao/zhiliao'
import zhiliaoxiangqing from '../view/zhiliao/zhiliaoxiangqing'


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
      component: login,
    },
    {
      path: '/home',
      component: home,
      meta:"home"
    },
    {
      path: '/forgetPWD',
      component: forgetPWD,
    },
    {
      path: '/replacePWD',
      component: replacePWD,
    },
    {
      path: '/shanggangtiaojian1',
      component: shanggangtiaojian1,
    },
    {
      path: '/getijingying1',
      component: getijingying1,
    },
    {
      path: '/jiaruweixiuzhan1',
      component: jiaruweixiuzhan1,
    },
    {
      path: '/jiaruweixiuzhan2',
      component: jiaruweixiuzhan2,
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
      path: '/gerenxinxi',
      component: gerenxinxi,
    },
    {
      path: '/my',
      component: my,
      meta:"my"
    },
    {
      path: '/set',
      component: set,
    },
    {
      path: '/xiugaimima',
      component: xiugaimima,
    },
    {
      path: '/fuwutiaokuan',
      component: fuwutiaokuan,
    },
    {
      path: '/guanyuwomen',
      component: guanyuwomen,
    },
    {
      path: '/xiugaishoujihao1',
      component: xiugaishoujihao1,
    },
    {
      path: '/xiugaishoujihao2',
      component: xiugaishoujihao2,
    },
    {
      path: '/shoujihaoqueren',
      component: shoujihaoqueren,
    },
    {
      path: '/qianbao',
      component: qianbao,
    },
    {
      path: '/allliushui',
      component: allliushui,
    },
    {
      path: '/guizeshuoming',
      component: guizeshuoming,
    },
    {
      path: '/tixian',
      component: tixian,
    },
    {
      path: '/tixian2',
      component: tixian2,
    },
    {
      path: '/xiugaikaihuhang',
      component: xiugaikaihuhang,
    },
    {
      path: '/wodefuwu',
      component: wodefuwu,
    },
    {
      path: '/faburenwu',
      component: faburenwu,
    },
    {
      path: '/xiugairenwu',
      component: xiugairenwu,
    },
    {
      path: '/fuwuleixing',
      component: fuwuleixing,
    },
    {
      path: '/fuwuquyu',
      component: fuwuquyu,
    },
    {
      path: '/fuwushijian',
      component: fuwushijian,
    },
    {
      path: '/dingdanxiangqing',
      component: dingdanxiangqing,
    },
    {
      path: '/dingdanxiangqing2',
      component: dingdanxiangqing2,
    },
    {
      path: '/fanganbaojia1',
      component: fanganbaojia1,
    },
    {
      path: '/fanganbaojia2',
      component: fanganbaojia2,
    },
    {
      path: '/xuanzeguzhangleixing',
      component: xuanzeguzhangleixing,
    },
    {
      path: '/cailiaoxuanze',
      component: cailiaoxuanze,
    },
    {
      path: '/cailiaoxuanze2',
      component: cailiaoxuanze2,
    },
    {
      path: '/zhiliao',
      component: zhiliao,
      meta:"zhiliao"
    },
    {
      path: '/zhiliaoxiangqing',
      component: zhiliaoxiangqing,
    }


  ]
})
