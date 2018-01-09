import Vue from 'vue'
import Mobile from './mobile.vue'
import mrouter from './mroutes.js'

require('./mobile/base/vue2/directive/v-xevent.js');
Vue.config.debug = true;//开启错误提示
window.__root_vue__ = new Vue({
    el: '#ccui-mobile',
    router:mrouter,
    template: '<Mobile/>',
    components: {Mobile}
})

window.__root_vue_component__ = __root_vue__.$children[0].$children[0];

