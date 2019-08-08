import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import woai from '@/components/zoumadeng'
import chanpin from '@/components/chanpin'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'woai',
      component: woai,
      children: [
         { path: 'chanpin', component: chanpin }
      ]
    },
  ]
})
