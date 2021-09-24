import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from '@/views/Article'
import PostList from '@/views/PostList'
import UserInfo from '@/views/UserInfo'

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
  {
    path: '/user/:loginname',
    component: UserInfo
  },
]

const router = new VueRouter({
  routes
})

export default router
