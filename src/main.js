import { createApp } from 'vue';

import './style.css';
import App from './App.vue';

import pinia from './plugins/stores';
import router from './plugins/router';

import { Icon } from '@iconify/vue';
import IconButton from '@/components/IconButton.vue';

createApp(App)
  .use(pinia)
  .use(router)
  .component('IconifyIcon', Icon)
  .component('IconButton', IconButton)
  .mount('#app');
