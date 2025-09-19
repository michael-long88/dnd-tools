import { createRouter, createWebHistory } from 'vue-router';
import Calculator from '../components/Calculator.vue';
import Converter from '../components/Converter.vue';
import References from '../pages/References.vue';
import API from '../pages/API.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;