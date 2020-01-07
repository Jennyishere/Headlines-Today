import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Icon, Toast,NavBar,Uploader} from 'vant';

Vue.use(Icon)
.use(Toast)
.use(NavBar)
.use(Uploader);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
