import Vue from 'vue'
import App from './App.vue'
import router from './router' // 导入路由器

Vue.config.productionTip = false

new Vue({
  router, // 挂载路由器
  render: h => h(App),
}).$mount('#app')
