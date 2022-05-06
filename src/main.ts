import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
import './assets/css/style.less';
//引入normalize.css和base.css
import 'normalize.css';
const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');
