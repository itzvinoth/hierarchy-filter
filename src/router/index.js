import Vue from 'vue'
import Router from 'vue-router'
import HierarchyFilter from '@/components/HierarchyFilter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HierarchyFilter',
      component: HierarchyFilter
    }
  ]
})
