import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: '/test',
      component: require('@/components/Product')
    },        
    {
      path: '*',
      redirect: '/'
    }
  ]
})
