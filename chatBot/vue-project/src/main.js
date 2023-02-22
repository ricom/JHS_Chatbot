import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import iview from 'view-ui-plus'
import './assets/main.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)
app.use(iview);
app.use(router)
app.mount('#app')