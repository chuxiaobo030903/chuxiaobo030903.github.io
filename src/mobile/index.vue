<template>
    <div class="ccui-m-index">
        <header class="ccui-header font-36px ">Hello Ccui</header>
        <div class="ccui-xwrap">
            <div class="ccui-xcontent">
                <ul>
                    <li class="ccui-iconfont ccui-table-view-cell"><router-link class="ccui-xshow" :to="{ path: '/cart'}">仿淘宝demo</router-link></li>
                    <li class="ccui-iconfont ccui-table-view-cell"><router-link class="ccui-xshow" :to="{ path: '/detail'}">仿淘宝商品页</router-link></li>
                    <li class="ccui-iconfont ccui-table-view-cell"><a >仿淘宝demo</a></li>
                    <li class="ccui-iconfont ccui-table-view-cell"><a >仿淘宝demo</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    require('./assets/scss/index.scss');
    export default {
        data:function(){
            return {}
        },
        mounted:function(){},
        methods: {}
    }
</script>