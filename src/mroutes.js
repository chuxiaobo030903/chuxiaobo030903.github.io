import Vue from 'vue'
import Router from 'vue-router'
import Mindex from './mobile/index.vue'
import Cart from './mobile/views/cart.vue'

Vue.use(Router);

export default new Router({
    routes:[
        // 移动端页面
        {path: '/', component:Mindex},
        {path: '/cart', component:Cart},

    ]
})

