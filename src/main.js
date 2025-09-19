import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';

// Add icons to the library
library.add(faQuestionCircle);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
