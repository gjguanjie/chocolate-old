import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './icons'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles.scss'
import './mock'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
