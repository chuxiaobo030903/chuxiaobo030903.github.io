<template>
    <div class="ccui-magnifying xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">图片放大镜</p>
                <p class="mt20">此组件基于jquery1.12.4开发,非常方便地实现图放大镜的效果</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <div class="ccui-fangDa ml20 mt20 mb20" id="fangdajing">
                        <div class="ccui-fangDaImg">
                            <!-- 正常显示的图片-->
                            <img  src="~assets/imgs/005.jpg" />
                            <!-- 滑块-->
                            <div class="ccui-magnifyingBegin"></div>
                            <!-- 放大镜显示的图片 -->
                            <div class="ccui-magnifyingShow">
                                <img class="ccui-magnifyingShowImg" src="~assets/imgs/005.jpg"/>
                            </div>
                        </div>
                        <ul class="ccui-ImgList">
                            <!-- 图片显示列表 -->
                            <li class="ccui-active"><img  src="~assets/imgs/005.jpg"/></li>
                            <li><img  src="~assets/imgs/006.jpg"/></li>
                            <li><img  src="~assets/imgs/007.jpg" /></li>
                            <li><img src="~assets/imgs/008.jpg" /></li>
                        </ul>
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">  &lt;div class=&quot;ccui-fangDa ml20 mt20 mb20&quot; id=&quot;fangdajing&quot;&gt;</span>
<span class="xccui-lh">    &lt;div class=&quot;ccui-fangDaImg&quot;&gt;</span>
<span class="xccui-lh">    &lt;!-- 正常显示的图片--&gt;</span>
<span class="xccui-lh">      &lt;img  src=&quot;~assets/imgs/005.jpg&quot; /&gt;</span>
<span class="xccui-lh">      &lt;!-- 滑块--&gt;</span>
<span class="xccui-lh">      &lt;div class=&quot;ccui-magnifyingBegin&quot;&gt;&lt;/div&gt;</span>
<span class="xccui-lh">      &lt;!-- 放大镜显示的图片 --&gt;</span>
<span class="xccui-lh">      &lt;div class=&quot;ccui-magnifyingShow&quot;&gt;</span>
<span class="xccui-lh">        &lt;img class=&quot;ccui-magnifyingShowImg&quot; src=&quot;~assets/imgs/005.jpg&quot;/&gt;</span>
<span class="xccui-lh">      &lt;/div&gt;</span>
<span class="xccui-lh">    &lt;/div&gt;</span>
<span class="xccui-lh">    &lt;ul class=&quot;ccui-ImgList&quot;&gt;</span>
<span class="xccui-lh">      &lt;!-- 图片显示列表 --&gt;</span>
<span class="xccui-lh">      &lt;li class=&quot;ccui-active&quot;&gt;&lt;img  src=&quot;~assets/imgs/005.jpg&quot;/&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;li&gt;&lt;img  src=&quot;~assets/imgs/006.jpg&quot;/&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;li&gt;&lt;img  src=&quot;~assets/imgs/007.jpg&quot; /&gt;&lt;/li&gt;</span>
<span class="xccui-lh">      &lt;li&gt;&lt;img src=&quot;~assets/imgs/008.jpg&quot; /&gt;&lt;/li&gt;</span>
<span class="xccui-lh">   &lt;/ul&gt;</span>
<span class="xccui-lh">  &lt;/div&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  export default {</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">          ccui_magnifying('fangdajing');</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>ccui_magnifying();</p>
                    <p>描述:图片放大镜方法</p>
                    <p>用法:ccui_magnifying(xid)</p>
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
            return {
            }
        },
        mounted:function(){
            ccui_magnifying('fangdajing');
        },
        methods: {}
    }
</script>