import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/pages/Homepage.vue'
import Single from '@/components/pages/Post.vue'
import Page from '@/components/pages/Page.vue'
import CategoryPage from '@/components/pages/CategoryPage.vue'
import Author from '@/components/pages/Author.vue'
import Search from '@/components/pages/Search.vue'
import Archives from '@/components/pages/Archives.vue'
import NotFoundPage from '@/components/pages/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },

    {
      name: 'About',
      path: '/about',
      component: Page
    },

    {
      name: 'Archives',
      path: '/archives',
      component: Archives
    },

    {
      name: 'Contact',
      path: '/contactform',
      component: Page
    },

    {
      name: 'Category',
      path: '/c/:categorySlug',
      component: CategoryPage
    },

    {
      name: 'Author',
      path: '/author/:authorId',
      component: Author
    },

    {
      name: 'Search',
      path: '/search/:searchTerm',
      component: Search
    },

    {
      name: 'SearchDate',
      path: '/search-date',
      component: Search
    },

    {
      name: 'post',
      path: '/:postSlug',
      component: Single
    },

    {
      name: 'NotFound',
      path: '*',
      component: NotFoundPage
    }
  ]
})
