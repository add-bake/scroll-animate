import Vue from 'vue'
import App from './App.vue'
import VueScrollmagic from './plugins'

Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
