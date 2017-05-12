import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* 示例一 */
    {
      path: '/web',
      component: require('@/components/Page'),
      children: [
        {
          path: '/home',
          component: require('@/components/Home')
        },             
        {
          path: '/product',
          component: require('@/components/Product')
        },
        {
          path: '/productDetail',
          component: require('@/components/ProductDetail')
        },
        {
          path: '/',
          redirect: '/home'
        }
      ]
    },

    /* 示例二 */
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
      path: '/userSetting',
      component: require('@/components/UserSetting')
    },
    {
      path: '/modPwd',
      component: require('@/components/ModPwd')
    },

    {
      path: '*',
      redirect: '/mobile'
    }
  ]
})
