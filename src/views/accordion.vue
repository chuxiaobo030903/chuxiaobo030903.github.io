<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">手风琴组件</p>
                <p class="mt20">一组标签内容的折叠和展开,包含两部分标签和标签的内容。此组件基于jquery1.12.4开发。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <div id="accordion" class="ccui-accordion mt20 mb20 ml20">
                        <p class="ccui-title"><i class="ccui-iconfont ccui-youjiantou"></i>标题1</p>
                        <ul class="ccui-content">
                            <li><a>子标题</a></li>
                        </ul>
                        <p class="ccui-title"><i class="ccui-iconfont ccui-youjiantou"></i>标题2</p>
                        <ul class="ccui-content">
                            <li><a>子标题</a></li>
                            <li><a>子标题</a></li>
                        </ul>
                    </div>

                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">  &lt;div id=&quot;accordion&quot; class=&quot;ccui-accordion&quot;&gt;</span>
<span class="xccui-lh">      &lt;p class=&quot;ccui-title&quot;&gt;&lt;i class=&quot;ccui-iconfont ccui-youjiantou&quot;&gt;&lt;/i&gt;标题1&lt;/p&gt;</span>
<span class="xccui-lh">      &lt;ul class=&quot;ccui-content&quot;&gt;</span>
<span class="xccui-lh">          &lt;li&gt;&lt;a&gt;アパレル&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;/ul&gt;</span>
<span class="xccui-lh">      &lt;p class=&quot;ccui-title&quot;&gt;&lt;i class=&quot;ccui-iconfont ccui-youjiantou&quot;&gt;&lt;/i&gt;标题2&lt;/p&gt;</span>
<span class="xccui-lh">      &lt;ul class=&quot;ccui-content&quot;&gt;</span>
<span class="xccui-lh">          &lt;li&gt;&lt;a&gt;タオバオ代行&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">          &lt;li&gt;&lt;a&gt;物流代行&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;/ul&gt;</span>
<span class="xccui-lh">  &lt;/div&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  export default{</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">          ccui_accordion("accordion");</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>ccui_accordion();</p>
                    <p>描述:手风琴效果方法</p>
                    <p>用法:ccui_accordion(xid)</p>
                    <p>参数:xid (类型：String),组件DOM的ID</p>
                    <p>返回值:无</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {}
        },
        mounted:function(){
            ccui_accordion("accordion");
        },
        methods: {
        }
    }
</script>