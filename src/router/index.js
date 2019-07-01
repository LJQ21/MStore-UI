import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/pages/Store/Store'
import Order from '@/pages/Order/Order'
import Person from '@/pages/Profile/Profile'
import MyOrder from '@/pages/Order/Order'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'store',
      component: Store
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: '/order/my-order',
          name: 'my-order',
          component: MyOrder
        },
      ]
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    }
  ]
})
