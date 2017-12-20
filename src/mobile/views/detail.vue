<template>
    <div class="ccui-m-detail">
        <div v-xevent.tap @tap="xxx()">{{cxb1}}</div>
    </div>
</template>
<script>
    window.cxb = function(){
        console.log(__root_vue__);
    }

    require('../assets/scss/detail.scss');
    export default {
        data:function(){
            return {
                cxb1:"商品详情页面",
                cxb2:"哈哈",
                cxb3:[{
                    id:1,
                    vendor_id: 11,
                }]
            }
        },
        mounted:function(){},
        methods: {
            xxx:function(){

                cxb();
            }
        }
    }
</script>