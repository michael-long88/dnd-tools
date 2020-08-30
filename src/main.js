import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './styles/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// need to have this here for jQuery to work
import 'bootstrap'


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
