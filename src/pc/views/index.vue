<template>
    <div class="ccui-index xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">select选择器</p>
                <p class="mt20">当选项过多时，使用下拉菜单展示并选择内容。此组件基于jquery1.12.4开发。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <div class="ccui-select mt20 ml20 mb20" id="ccui_select">
                        <p>请选择</p>
                        <i class="fr mr5 ccui-iconfont ccui-xiajiantou"></i>
                        <ul class="ccui-hide ccui-select-list">
                            <li>双肩包</li>
                            <li>旅行包</li>
                            <li>登山包ccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccui</li>
                        </ul>
                        <input type="hidden" value="">
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">  &lt;div class=&quot;ccui-select&quot; id=&quot;ccui_select&quot;&gt;</span>
<span class="xccui-lh">      &lt;p&gt;请选择&lt;/p&gt;</span>
<span class="xccui-lh">      &lt;i class=&quot;fr mr5 ccui-iconfont ccui-xiajiantou&quot;&gt;&lt;/i&gt;</span>
<span class="xccui-lh">      &lt;ul class=&quot;ccui-hide ccui-select-list&quot;&gt;</span>
<span class="xccui-lh">          &lt;li&gt;双肩包&lt;/li&gt;</span>
<span class="xccui-lh">          &lt;li&gt;旅行包&lt;/li&gt;</span>
<span class="xccui-lh">          &lt;li&gt;登山包ccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccuiccui&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;/ul&gt;</span>
<span class="xccui-lh">      &lt;input type=&quot;hidden&quot; value=&quot;&quot;&gt;</span>
<span class="xccui-lh">  &lt;/div&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  export default{</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">          ccui_select(&quot;ccui_select&quot;);</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>vue中必须等DOM元素渲染完成后，才可以调用Jquery的方法否则无效。</p>
                    <p>ccui_select()</p>
                    <p>描述:Select选择器方法</p>
                    <p>用法:xbselect(xid)</p>
                    <p>参数:xid (类型：String),组件DOM的ID</p>
                    <p>返回值:无</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    require('../assets/scss/index.scss');
    export default {
        data:function(){
            return {}
        },
        created:function(){
            console.log('实例已经创建,msg变量还未渲染到模板')
        },
        mounted:function(){
            ccui_select("ccui_select");
            console.log('已经挂载到模板上:msg变量渲染到模板');

        },
        updated:function(){

            console.log('实例更新啦');
        },
        destroyed:function(){
            console.log('销毁啦')
        },
        methods: {
        }
    }
</script>



