import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // back/forward button support
    if (savedPosition) {
      return savedPosition
    }

    // scroll to anchor (#section)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // default → top of page
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
