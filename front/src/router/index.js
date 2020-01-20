import Vue from 'vue'
import Router from 'vue-router'
const __import__ = file => () => import(`@/page/${file}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('Home')
    },
    {
      path: '/articles',
      name: 'articles',
      component: __import__('Articles')
    },
    {
      path: '/publishArticle',
      name: 'publishArticle',
      component: __import__('publishArticle')
    }
  ]
})
