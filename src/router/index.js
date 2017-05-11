import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* 示例一 */
    {
      path: '/',
      component: require('@/components/Page'),
      children: [
        {
          path: '/home',
          component: require('@/components/Home')
        },        
        {
          path: '/solution',
          component: require('@/components/Solution')
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
      path: '/test',
      component: require('@/components/Mobile'),
    },   
    {
      path: '/productList',
      component: require('@/components/ProductList')      
    },   

    {
      path: '*',
      redirect: '/'
    }
  ]
})
