import { createApp } from 'vue'

// import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


import App from './App.vue'
import router from './router'
import store from './store'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// createApp(App).use(BootstrapVue);

createApp(App).use(store).use(router).mount('#app')
