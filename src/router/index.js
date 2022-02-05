import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser'
import UpdateUser from '../views/UpdateUser'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addUser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/updateUser/:id',
    name: 'UpdateUser',
    component: UpdateUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
