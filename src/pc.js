//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import Pc from './pc.vue'
import router from './proutes.js'
import store from './store.js'

Vue.config.debug = true;//开启错误提示

new Vue({
        el: '#ccui',
        router,
        store,
        template: '<Pc/>',
        components: {Pc}
})




