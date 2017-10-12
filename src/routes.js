
import Vue from 'vue';
import Router from 'vue-router'
import App from './App.vue'
import Index from './views/index.vue'
import Iconfont from './views/iconfont.vue'
import Navselect from './views/nav.select.vue'
import Navmenu from './views/nav.menu.vue'
import Accordion from './views/accordion.vue'
import Lazyload from './views/lazyload.vue'
import Magnifying from './views/magnifying.vue'
import Slideshow from './views/slideshow.vue'
import Verification from './views/verification.from.vue'
import Popups from './views/popups.vue'
import Stick from './views/stick.vue'


Vue.use(Router);

export default new Router({
    mode:'history', //去除URl上多余的#
    routes:[
        { path: '*', component: Index },
        {path: '/',component: App},
        {path: '/index',component:Index},
        {path: '/iconfont',component:Iconfont},
        {path: '/navselect',component:Navselect},
        {path: '/navmenu',component:Navmenu},
        {path: '/accordion',component:Accordion},
        {path: '/lazyload',component:Lazyload},
        {path: '/magnifying',component:Magnifying},
        {path: '/slideshow',component:Slideshow},
        {path: '/verification',component:Verification},
        {path: '/popups',component:Popups },
        {path: '/stick',component:Stick},
    ]
})
