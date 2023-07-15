import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'
import { createPinia } from 'pinia'
import UUID from "vue-uuid"


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

app.use(UUID)
createApp(App).use(router).mount('#app')
