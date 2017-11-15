<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">导航栏下拉菜单</p>
                <p class="mt20">当导航栏中选项过多时，使用此组件展示并选择内容。此组件基于jquery1.12.4开发。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <div class="mt20 mb20 ml20">
                        <!--导航栏下拉菜单-->
                        <div  class="ccui-nav-select" id="nav_select">
                            <p>母婴用品</p>
                            <i class="fr mr5 xfont12 ccui-iconfont ccui-xiajiantou"></i>
                            <ul class="ccui1-hide ccui-nav-select-list ">
                                <li class="ccui-item"><a href="#">宝宝奶粉<i class="xfont12 ccui-iconfont ccui-gengduo"></i></a>
                                </li>
                                <div class="ccui-data">
                                    <a href="#"> 英国牛栏</a>
                                    <a href="#">美赞臣</a>
                                    <a href="#">贝因美</a>
                                    <a href="#">雅培</a>
                                    <a href="#">澳洲爱他美11111111111111111111111111111</a>
                                </div>
                                <li class="ccui-item"><a href="#">辅食营养<i class="xfont12 ccui-iconfont ccui-gengduo"></i></a>
                                </li>
                                <div class="ccui-data">
                                    <a href="#">米粉</a>
                                </div>
                                <li class="ccui-item"><a href="#">童装111111111111111111111111111111111111111111111111111111<i
                                        class=" xfont12 ccui-iconfont ccui-gengduo"></i></a></li>
                                <div class="ccui-data">
                                    <a href="#">连衣裙</a>
                                </div>
                                <li class="ccui-item"><a href="#">童鞋<i class=" xfont12 ccui-iconfont ccui-gengduo"></i></a>
                                </li>
                                <li class="ccui-item"><a href="#">纸尿裤<i class="xfont12 ccui-iconfont ccui-gengduo"></i></a>
                                </li>
                                <li class="ccui-item"><a href="#">亲子鞋服<i class="xfont12 ccui-iconfont ccui-gengduo"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                         <code>
<span class="xccui-lh">&lt;div class=&quot;ccui-nav-select&quot; id=&quot;nav_select&quot;&gt;</span>
<span class="xccui-lh">    &lt;p&gt;母婴用品&lt;/p&gt;</span>
<span class="xccui-lh">    &lt;i class=&quot;fr mr5 xfont12 ccui-iconfont ccui-xiajiantou&quot;&gt;&lt;/i&gt;</span>
<span class="xccui-lh">    &lt;ul class=&quot;ccui1-hide ccui-nav-select-list &quot;&gt;</span>
<span class="xccui-lh">       &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;宝宝奶粉&lt;i class=&quot;xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">       &lt;div class=&quot;ccui-data&quot;&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt; 英国牛栏&lt;/a&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;美赞臣&lt;/a&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;贝因美&lt;/a&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;雅培&lt;/a&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;澳洲爱他美&lt;/a&gt;</span>
<span class="xccui-lh">      &lt;/div&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;辅食营养&lt;i class=&quot;xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;div class=&quot;ccui-data&quot;&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;米粉&lt;/a&gt;</span>
<span class="xccui-lh">      &lt;/div&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;童装&lt;i class=&quot; xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;div class=&quot;ccui-data&quot;&gt;</span>
<span class="xccui-lh">          &lt;a href=&quot;#&quot;&gt;连衣裙&lt;/a&gt;</span>
<span class="xccui-lh">      &lt;/div&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;童鞋&lt;i class=&quot; xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;纸尿裤&lt;i class=&quot;xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;亲子鞋服&lt;i class=&quot;xfont12 ccui-iconfont ccui-gengduo&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">   &lt;/ul&gt;</span>
<span class="xccui-lh"> &lt;/div&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>vue中必须等DOM元素渲染完成后，才可以调用Jquery的方法否则无效。</p>
                    <p>ccui_nav_select();</p>
                    <p>描述:导航栏上Select选择器方法</p>
                    <p>用法:ccui_nav_select(xid)</p>
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
            ccui_nav_select("nav_select");
        },
        methods: {
        }
    }
</script>