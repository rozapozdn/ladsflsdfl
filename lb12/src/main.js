import Vue from 'vue'
import App from './App.vue'
// import Favorite from './favorite.vue'

// Vue.component('favorite', Favorite)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
