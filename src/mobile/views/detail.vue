<template>
    <div class="ccui-m-detail">
        <div class="ccui-xwrap" style="background-color: #e7e7e7;top:0;">
            <div class="ccui-xcontent">
                <div class="ccui-swipe">
                    <mt-swipe  :auto="0">
                        <mt-swipe-item><img :src="product_img"></mt-swipe-item>
                        <mt-swipe-item><img :src="product_img1"></mt-swipe-item>
                        <mt-swipe-item><img :src="product_img2"></mt-swipe-item>
                    </mt-swipe>
                </div>
              <div class="ccui-back"><i class="ccui-iconfont ccui-fanhui ccui-xfont36"></i></div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    require('../assets/scss/detail.scss');
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);


    export default {
        data:function(){
            return {
                product_img:require("mimgs/goods-4.jpg"),
                product_img1:require("mimgs/goods-1.jpg"),
                product_img2:require("mimgs/goods-2.jpg"),
            }
        },
        mounted:function(){},
        methods: {
        }
    }
</script>