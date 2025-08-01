import './assets/main.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-toward.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin as VueTippy } from 'vue-tippy'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueTippy)
app.use(createPinia())
app.use(router)

app.mount('#app')
