import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Icon, Toast,NavBar,Uploader,Dialog,Field,Picker, Tab, Tabs } from 'vant';

Vue.use(Icon)
.use(Toast)
.use(NavBar)
.use(Uploader)
.use(Dialog)
.use(Field)
.use(Picker)
.use(Tab)
.use(Tabs);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
