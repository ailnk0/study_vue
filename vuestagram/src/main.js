import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let emitter = mitt()
let app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mount('#app')
