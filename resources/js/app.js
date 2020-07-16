require('./bootstrap');

window.Vue = require('vue');
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import App from './App.vue'

import router from './router'

import './permission' // permission control

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});