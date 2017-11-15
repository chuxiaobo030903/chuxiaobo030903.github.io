
import Vue from 'vue'
import Router from 'vue-router'
import Pc from './pc.vue'
import Index from './pc/views/index.vue'
import Iconfont from './pc/views/iconfont.vue'
import Navselect from './pc/views/nav.select.vue'
import Navmenu from './pc/views/nav.menu.vue'
import Accordion from './pc/views/accordion.vue'
import Lazyload from './pc/views/lazyload.vue'
import Magnifying from './pc/views/magnifying.vue'
import Slideshow from './pc/views/slideshow.vue'
import Verification from './pc/views/verification.from.vue'
import Popups from './pc/views/popups.vue'
import Stick from './pc/views/stick.vue'


Vue.use(Router);

export default new Router({
    routes:[
        {path: '/',component: Index},
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

