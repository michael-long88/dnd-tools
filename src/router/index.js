import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '../components/Calculator'
import Converter from '../components/Converter'
import References from '../pages/References'
import API from '../pages/API'

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
  },
  {
    path: '/references',
    name: 'References',
    component: References
  },
  {
    path: '/api',
    name: 'API',
    component: API
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
