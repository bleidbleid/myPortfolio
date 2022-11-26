import { createApp } from 'vue'
import '/style.css'
import App from './App.vue'
import '/styles/app.css'; // Here
import router from './router';
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia();
pinia.use(piniaPersist)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')