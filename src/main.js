// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const routes = [
	{
		path: '/chat',
		component: (resolve) => require(['./pages/chat'], resolve)
	},
	{
		path: '/contacts',
		component: (resolve) => require(['./pages/contacts'], resolve)
	},
	{
		path: '/find',
		component: (resolve) => require(['./pages/find'], resolve)
	},
	{
		path: '/me',
		component: (resolve) => require(['./pages/me'], resolve)
	}
]

const router = new VueRouter({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(savedPosition)
  },
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
