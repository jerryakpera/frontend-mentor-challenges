import { createApp } from 'vue';

import './style.css';
import App from './App.vue';
import router from './plugins/router';

import { Icon } from '@iconify/vue';
import IconButton from '@/components/IconButton.vue';

createApp(App)
  .use(router)
  .component('VueIcon', Icon)
  .component('IconButton', IconButton)
  .mount('#app');
