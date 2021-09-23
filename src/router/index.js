import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from '@/views/Article'
import PostList from '@/views/PostList'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: PostList,
  },
  {
    path: '/topic/:id',
    component: Article
  },
]

const router = new VueRouter({
  routes
})

export default router
