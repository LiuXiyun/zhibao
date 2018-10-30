import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'


import regist from '../view/regist/regist'

import home from '../view/home/home'
import delay from '../view/delay/delay'
import serverList from '../view/serverList/serverList'
import stationDetail from '../view/stationDetail/stationDetail'
import goumaifuwu from '../view/stationDetail/goumaifuwu'

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


import zhiliao from '../view/zhiliao/zhiliao'
import zhiliaoxiangqing from '../view/zhiliao/zhiliaoxiangqing'

import yanbaoshangpin from '../view/shangpinguanli/yanbaoshangpin'
import yanbao from '../view/shangpinguanli/yanbao'
import shangpin from '../view/shangpinguanli/shangpin'
import tianjiashangpin from '../view/shangpinguanli/tianjiashangpin'

import baoxiu from '../view/baoxiu/baoxiu'
import shangmenshijian from '../view/baoxiu/shangmenshijian'
import shangmenxinxi from '../view/baoxiu/shangmenxinxi'
import shangmendizhi from '../view/baoxiu/shangmendizhi'
import guzhangxiangqing from '../view/baoxiu/guzhangxianxiang'

import orderDetail from '../view/order/orderDetail'
import shangmenshijianOrder from '../view/order/shangmenshijianOrder'
import guzhangxianxiangOrder from '../view/order/guzhangxianxiangOrder'
import shangmenxinxiOrder from '../view/order/shangmenxinxiOrder'
import beizhuOrder from '../view/order/beizhuOrder'

Vue.use(Router);

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
      path: '/delay',
      component: delay,
      meta:"delay"
    },
    {
      path: '/serverList',
      component: serverList,
    },
    {
      path: '/stationDetail/:id',
      name:'stationDetail',
      component: stationDetail,
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
      path: '/zhiliao',
      component: zhiliao,
      meta:"zhiliao"
    },
    {
      path: '/zhiliaoxiangqing',
      component: zhiliaoxiangqing,
    },
    {
      path: '/yanbaoshangpin',
      component: yanbaoshangpin,
    },
    {
      path: '/shangpin',
      component: shangpin,
    },
    {
      path: '/yanbao',
      component: yanbao,
    },
    {
      path: '/tianjiashangpin',
      component: tianjiashangpin,
    },
    {
      path: '/baoxiu',
      component: baoxiu,
    },
    {
      path: '/shangmenshijian',
      component: shangmenshijian,
    },
    {
      path: '/shangmendizhi',
      component: shangmendizhi,
    },
    {
      path: '/shangmenxinxi',
      component: shangmenxinxi,
    },
    {
      path: '/guzhangxiangqing',
      component: guzhangxiangqing,
    },
    {
      path: '/goumaifuwu',
      component: goumaifuwu,
      name:'goumaifuwu'
    },
    {
      path: '/orderDetail/:orderId',
      component: orderDetail,
      name:'orderDetail'
    },
    {
      path: '/shangmenxinxiOrder',
      component: shangmenxinxiOrder,
      name:'shangmenxinxiOrder'
    },
    {
      path: '/shangmenshijianOrder',
      component: shangmenshijianOrder,
      name:'shangmenshijianOrder'
    },
    {
      path: '/guzhangxianxiangOrder',
      component: guzhangxianxiangOrder,
      name:'guzhangxianxiangOrder'
    },
    {
      path: '/beizhuOrder',
      component: beizhuOrder,
      name:'beizhuOrder'
    }


  ]
})
