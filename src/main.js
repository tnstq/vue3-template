import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import elementPlus from '@/plugins/element-plus'
createApp(App).use(router).use(createPinia()).use(elementPlus).mount('#app')
