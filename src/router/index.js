import Vue from 'vue'
import Router from 'vue-router'

const Guest = resolve => require(['../components/guest/index.vue'], resolve)
const Lotteries = resolve => require(['../components/guest/pages/lotteries/index.vue'], resolve)
const Dummy = resolve => require(['../components/guest/pages/dummy.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Guest,
      children: [
        {path: '', name: 'lotteries', component: Lotteries},
        {path: 'dummy', name: 'dummy', component: Dummy}
      ]
    }
  ]
})
