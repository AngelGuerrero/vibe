import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

//
// Firebase
import '@/firebase'
import { firestorePlugin } from 'vuefire'

//
// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

//
// Bootstrap
import { LayoutPlugin, FormInputPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(firestorePlugin)
Vue.use(Vuesax)
Vue.use(LayoutPlugin)
Vue.use(FormInputPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
