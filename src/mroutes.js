import Vue from 'vue'
import Router from 'vue-router'
import Mindex from './mobile/index.vue'

Vue.use(Router);

export default new Router({
    routes:[
        // 移动端页面
        {path: '/', component:Mindex},

    ]
})

