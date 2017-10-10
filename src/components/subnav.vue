<template>
    <div class="ccui-subnav">
        <div class="ccui-tree fl">
            <ul class="mt30">
                <p class="fb title">UI组件</p>
                <li  v-for="(item,index) in items" :key="item.id">
                    <a @click="cc_open(item.url,index)" :class="{'ccui-active':item.tag,'ccui-tag': !item.tag}">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    require('./subnav.scss');
    export default {
        data:function(){
            return {
                items:[
                    {name:'select选择器',tag:true,url:'/'},
                    {name:'Icon图标',tag:false,url:'/iconfont'},
                    {name:'导航栏下拉菜单',tag:false,url:'./navselect'},
                    {name:'仿京东左侧商品分类导航菜单',tag:false,url:'/navmenu'},
                    {name:'手风琴',tag:false,url:'/accordion'},
                    {name:'图片延迟加载',tag:false,url:'/lazyload'},
                    {name:'图片放大镜',tag:false,url:'/magnifying'},
                    {name:'图片轮播',tag:false,url:'/slideshow'},
                    {name:'表单验证',tag:false,url:'/verification'},
                    {name:'弹出层/窗',tag:false,url:'/popups'},
                    {name:'跟随滚动条/置顶效果',tag:false,url:'/stick'},
                ]
            }
        },
        methods: {
            cc_open:function (url,index) {
                var vm = this;
                for (var i = 0; i < vm.items.length; i++) {
                    if (i == index) {
                        vm.items[i].tag = true;
                        continue;
                    }
                    vm.items[i].tag = false;
                }
                this.$router.push({path: url});
            }
        }
    }
</script>

