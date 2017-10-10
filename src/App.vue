<!--App.vue是项目入口文件。-->
<template>
    <div>
        <ccui-header></ccui-header>
        <sub-nav></sub-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import CcuiHeader from './components/header.vue';
    import SubNav from './components/subnav.vue';
    require('./base/ccbase.js');
    require('./base/ccbase.css');

    export default {
        data(){
            return {}
        },
        created(){
            this.$router.push({path: './index'});
        },
        components:{
            CcuiHeader,
            SubNav
        },
        methods: {

        }
    }
</script>
