import { createApp } from 'vue'
import './css/basic.css'
import App from './App.vue'
import router from './router'; //引用
import '@/js/firebase'

const app = createApp(App);
app.use(router); //帶入app 
app.mount("#app");
