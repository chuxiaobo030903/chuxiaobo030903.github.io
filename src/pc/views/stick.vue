<template>
    <div class=" xccui-main">
        <div class="xccui-content">
            <div class="ccui-fix" id="ccui_fix"><img src="~assets/imgs/013.jpg" width="320px" height="200px" /></div>
            <div class="mt30 ml30">
                <p class="xfont24 fb">跟随滚动条/置顶效果</p>
                <p class="mt20">用户滚动鼠标滚轮或者拖动浏览器滚动条时，浮动层将跟随滚动。及置顶效果。此组件都是基于jquery1.12.4开发。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30" style="height: 3000px">
                </div>
                <div class="xccui-tip mt30">
                </div>
            </div>
            <button>  </button>
        </div>
    </div>
</template>
<script>
    require('../base/3rd/scrolltopcontrol/scrolltopcontrol.js');
    export default {
        data:function(){
            return {}
        },
        mounted:function(){
            xbFixDiv("ccui_fix",80)
        },
        methods: {}
    }
</script>