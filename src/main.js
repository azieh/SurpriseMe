import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const router = new VueRouter({
  base: '/surpriseme/', 
  mode: 'history',
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
