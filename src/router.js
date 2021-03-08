import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Home from './views/work-manager/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Editor.vue')
    }
  ]
})
