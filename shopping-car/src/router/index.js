import Vue from 'vue'
import Router from 'vue-router'
import shoppingPage from '@/pages/shoppingPage'
import addressPage from '@/pages/addressPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'shoppingPage',
        component: shoppingPage
    }, {
        path: '/address',
        name: 'addressPage',
        component: addressPage
    }]
})