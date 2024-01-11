import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/eta',
      name: 'eta',
      component: () => import('../views/EtaView.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneView.vue')
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: () => import('../views/ReceiptView.vue')
    }
  ]
})

export default router
