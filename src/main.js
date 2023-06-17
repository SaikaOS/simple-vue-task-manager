import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import TaskList from './pages/TaskList.vue'
import store from './store.js'

const routes = [
  { path: "/", component: HomePage },
  { path: "/tasks", component: TaskList }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
