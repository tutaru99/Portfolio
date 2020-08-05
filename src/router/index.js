import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import project from '../components/project.vue'
import cases from '../components/cases.vue'
import VueExpandableImage from 'vue-expandable-image'

Vue.use(VueExpandableImage)


Vue.use(VueRouter)
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
