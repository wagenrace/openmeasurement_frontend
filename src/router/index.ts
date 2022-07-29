import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
import SearchChemical from '../views/SearchChemical.vue'
import ShowCompound from '../views/ShowCompound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SearchChemical',
    component: SearchChemical
  },
  {
    path: '/compound/:id',
    name: 'ShowCompound',
    component: ShowCompound,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
