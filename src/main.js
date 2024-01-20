import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).mount('#app');

import PagePrincipale from '@/views/PagePrincipale'
App.component(PagePrincipale)

import router from './router'


