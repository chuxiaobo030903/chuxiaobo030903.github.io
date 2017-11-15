import Vue from 'vue'
import Mobile from './mobile.vue'
import mrouter from './mroutes.js'

Vue.config.debug = true;//开启错误提示

new Vue({
    el: '#ccui-mobile',
    router:mrouter,
    template: '<Mobile/>',
    components: {Mobile}
})


