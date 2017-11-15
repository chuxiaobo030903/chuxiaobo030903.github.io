<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">弹出层/窗</p>
                <p class="mt20">layer弹出层组件，全方位的解决整站弹出层方案。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <!--实例子代码-->
                    <div class="mt20 ml20 mb20" id="ccui_layer">
                        <input type="button" value="弹出层/窗" class="ccui-input-sr ml10">
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">   &lt;div  id=&quot;ccui_layer&quot;&gt;</span>
<span class="xccui-lh">       &lt;input type=&quot;button&quot; value=&quot;弹出层/窗&quot; class=&quot;ccui-input-sr ml10&quot;&gt;</span>
<span class="xccui-lh">   &lt;/div&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  require('layer-dialog');</span>
<span class="xccui-lh">  require('layer-dialog/skin/layer.css');</span>
<span class="xccui-lh">  export default{</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">          $(&quot;#ccui_layer&quot;).on('click', function(){
             layer.open({
                 type: 1,
                 area: ['600px', '360px'],
                 skin: 'layui-layer-rim', //加上边框
                 shadeClose: true, //点击遮罩关闭
                 content: 'html内容'
                    });
            });</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>layer弹出层组件的详细用法:<a target=_blank HREF="http://layer.layui.com/">http://layer.layui.com/</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
require('layer-dialog');
require('layer-dialog/skin/layer.css');


    export default {
        data:function(){
            return {}
        },
        mounted:function(){
             $("#ccui_layer").on('click', function(){
                 layer.open({
                     type: 1,
//                     title: false, //标题
                     area: ['600px', '360px'],
                     skin: 'layui-layer-rim', //加上边框
                     shadeClose: true, //点击遮罩关闭
                     content: 'html内容'
                 });
             });
        },
        methods: {}
    }
</script>