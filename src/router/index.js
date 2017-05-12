import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('@/components/Ad')
    },
    {
      path: '/mobile',
      component: require('@/components/Mobile'),
    },   
    {
      path: '/recharge',
      component: require('@/components/Recharge')
    },
    {
      path: '/payment',
      component: require('@/components/Payment')
    },
    {
      path: '/productList',
      component: require('@/components/ProductList')      
    },   
    {
      path: '/readMore',
      component: require('@/components/ReadDetail')
    },
    {
      path: '/moreDetail',
      component: require('@/components/MoreDetail')
    },   
    {
      path: '/login',
      component: require('@/components/Login')
    }, 
    {
      path: '/signup',
      component: require('@/components/Signup')
    },     
    {
      path: '/userSetting',
      component: require('@/components/UserSetting')
    },
    {
      path: '/modPwd',
      component: require('@/components/ModPwd')
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
