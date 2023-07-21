import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'
import { createPinia } from 'pinia'
import UUID from "vue-uuid"

import { createIntl } from 'vue-intl'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

app.use(UUID)
app.use(
  createIntl({
    locale: 'en',
    defaultLocale: 'en',
    messages: {
      foo: 'bar',
    },
  })
)

createApp(App).use(router).mount('#app')
