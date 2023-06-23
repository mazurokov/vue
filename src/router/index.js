import Vue from 'vue'
import VueRouter from 'vue-router'

import SearchPage from '../views/SearchPage/SearhcPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  },
]

const router = new VueRouter({
  routes
})

export default router
