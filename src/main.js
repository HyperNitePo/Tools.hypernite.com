import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = true;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');


