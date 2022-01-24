import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
