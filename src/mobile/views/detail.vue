<template>
    <div class="ccui-m-detail">
        <div class="ccui-xwrap" style="background-color: #e7e7e7;">
            <div class="ccui-xcontent">
                <button style="height: 300px;" v-xevent.tap @tap="cxb()">324234234432</button>
                <mt-swipe :show-indicators="false">
                    <mt-swipe-item><img :src="product_img"></mt-swipe-item>
                    <mt-swipe-item><img :src="product_img1"></mt-swipe-item>
                    <mt-swipe-item><img :src="product_img2"></mt-swipe-item>
                </mt-swipe>
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
                product_img:require("mimgs/goods-3.jpg"),
                product_img1:require("mimgs/goods-1.jpg"),
                product_img2:require("mimgs/goods-2.jpg"),
            }
        },
        mounted:function(){},
        methods: {
            cxb(){
                console.log(11111111111);

            },
        }
    }
</script>