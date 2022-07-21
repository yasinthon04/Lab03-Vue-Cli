import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoriesView from '../views/CategoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
