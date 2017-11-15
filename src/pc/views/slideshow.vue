<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">图片轮播</p>
                <p class="mt20">SuperSlide 插件致力于解决网站大部分特效展示问题，使网站代码规范整洁，方便维护更新。
                    网站上常用的“焦点图/幻灯片”“Tab标签切换”“图片滚动”“无缝滚动”等只需要一个SuperSlide即可解决！</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <!--实例代码-->
                    <div id="slideBox" class="slideBox ml20 mt20 mb20">
                        <div class="hd">
                            <ul><li class="on">1</li><li>2</li><li>3</li></ul>
                        </div>
                        <div class="bd">
                            <ul>
                                <li><a><img src="~assets/imgs/010.jpg"></a></li>
                                <li><a><img src="~assets/imgs/011.jpg"></a></li>
                                <li><a><img src="~assets/imgs/012.jpg"></a></li>
                            </ul>
                        </div>
                        <!-- 下面是前/后按钮代码，如果不需要删除即可 -->
                        <a class="prev" href="javascript:void(0)"><i style="font-size: 45px" class="ccui-iconfont ccui-fanhui ml20"></i></a>
                        <a class="next" href="javascript:void(0)"><i style="font-size: 45px" class="ccui-iconfont ccui-gengduo fr mr20"></i></a>
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">     &lt;div id=&quot;slideBox&quot; class=&quot;slideBox ml20 mt20 mb20&quot;&gt;</span>
<span class="xccui-lh">          &lt;div class=&quot;hd&quot;&gt;</span>
<span class="xccui-lh">             &lt;ul&gt;&lt;li class=&quot;on&quot;&gt;1&lt;/li&gt;&lt;li&gt;2&lt;/li&gt;&lt;li&gt;3&lt;/li&gt;&lt;/ul&gt;</span>
<span class="xccui-lh">          &lt;/div&gt;</span>
<span class="xccui-lh">          &lt;div class=&quot;bd&quot;&gt;</span>
<span class="xccui-lh">              &lt;ul&gt;</span>
<span class="xccui-lh">                &lt;li&gt;&lt;a&gt;&lt;img src=&quot;~assets/imgs/010.jpg&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">                &lt;li&gt;&lt;a&gt;&lt;img src=&quot;~assets/imgs/011.jpg&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">                &lt;li&gt;&lt;a&gt;&lt;img src=&quot;~assets/imgs/012.jpg&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span>
<span class="xccui-lh">              &lt;/ul&gt;</span>
<span class="xccui-lh">          &lt;/div&gt;</span>
<span class="xccui-lh">          &lt;!-- 下面是前/后按钮代码，如果不需要删除即可 --&gt;</span>
<span class="xccui-lh">          &lt;a class=&quot;prev&quot; href=&quot;javascript:void(0)&quot;&gt;&lt;i class=&quot;ccui-iconfont ccui-fanhui ml20 xfont45&quot;&gt;&lt;/i&gt;&lt;/a&gt;</span>
<span class="xccui-lh">     &lt;/div&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">   require('../base/3rd/jquery_SuperSlide/jquery.SuperSlide.2.1.1.js');</span>
<span class="xccui-lh">  export default{</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">        jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>SuperSlide插件的详细用法:<a target=_blank HREF="http://www.superslide2.com/">http://www.superslide2.com/</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('../base/3rd/jquery_SuperSlide/jquery.SuperSlide.2.1.1.js');
    export default {
        data:function(){
            return {}
        },
        mounted:function(){
            jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
        },
        methods: {}
    }
</script>