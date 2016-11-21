import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import index from './components/index'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { path: '/', component: index }
]

const router = new VueRouter({
	routes
})
const app = new Vue({
  router
}).$mount('#app')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
