import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from 'vant';

Vue.use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
