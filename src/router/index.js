import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import secure from '../views/secure.vue'
import MyForm from '../components/MyForm.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/MyForm',
    name: 'MyForm',
    component: MyForm
  },
  {
    path: '/secure',
    name: 'secure',
    component: secure
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
