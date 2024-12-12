import { createApp } from 'vue'
import App from './App.vue'
import { routers } from './routers'
import './assets/scss/main.scss'
const app = createApp(App)

app.use(routers)
app.mount('#app')
