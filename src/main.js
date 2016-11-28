import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import index from './components/index'
import category from './components/category'

Vue.use(VueRouter)
Vue.use(ElementUI)

var router = new VueRouter({
	// mode:"history",
	// saveScrollPosition:true,  //在启用html5 history模式的时候生效，用于后退操作的时候记住之前的滚动条位置
	routes:[{
		path:"/index",
		name:"index",
		title:'首页',
		component:index,
		linkActiveClass:'active' 
	},{
		path: '/category',
		name: "category",
		component: category
	}]
});


new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
})

// const routes = [
//   { path: 'index',component: index,linkActiveClass:'active' }
// ]

// const router = new VueRouter({
// 	routes
// })
// const app = new Vue({
//   router,
//   el: '#app',
//   template: '<App/>',
//   components: { App },
// })
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
