import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './router'
import './assets/css/tailwind.css'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(Router)
app.mount('#app')
