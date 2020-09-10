import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login'


const routes = [
  { path: '/login', component: Login, name: 'Login' }
]


Vue.use(VueRouter)

export default new VueRouter({
  routes,
  mode: 'history'
})

