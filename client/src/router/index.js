import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddPage from '../views/AddPage.vue'
import DetailPage from '../views/DetailPage.vue'
import EditPage from '../views/EditPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/add',
      name: 'add',
      component: AddPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditPage
    },
  ]
})

export default router
