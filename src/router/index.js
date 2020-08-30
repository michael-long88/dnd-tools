import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '../components/Calculator'
import Converter from '../components/Converter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Calculator,
  },
  {
    path: '/currency-converter',
    name: 'Converter',
    component: Converter,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
