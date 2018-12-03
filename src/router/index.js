import Vue from 'vue'
import Router from 'vue-router'
import mainComponent from '@/components/MainComponent'
import navComponent from '@/components/NavComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'mainComponent',
      component: mainComponent,
      children: [
        { path: '/', component: navComponent}
      ]
    }
  ]
})
