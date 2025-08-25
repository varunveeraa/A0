import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import PrimeVue from 'primevue/config'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(createBootstrap())
app.use(PrimeVue)
app.mount('#app')
