import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
// import './assets/base.css' // Uncomment only if you have custom styles

createApp(App).use(router).mount('#app')
