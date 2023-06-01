import Vue from 'vue'
import HomePage from '../views/HomePage.vue'
import VueRouter from 'vue-router'
import ViewPage from '../views/ViewPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/view-page',
    name: 'ViewPage',
    component: ViewPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
