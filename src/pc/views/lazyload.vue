<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">图片延迟加载</p>
                <p class="mt20">jquery.lazyload插件它可以延迟加载长页面中的图片。在浏览器可视区域外的图片在初始状态下不会被载入，直到用户将页面滚动到它们所在的位置。</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <div class="ml20 mt20">
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/0022.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/0022.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/0022.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/0022.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/0022.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                        <img src="../assets/imgs/no-photo.png" data-original="src/pc/assets/imgs/002.png" width="150px" height="150px" />
                    </div>
                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">  &lt;img src=&quot;../assets/imgs/no-photo.png&quot; data-original=&quot;src/pc/assets/imgs/0022.png&quot; width=&quot;150px&quot; 150px&quot; /&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  require('../base/jquery_lazyload-1.9.3/jquery.lazyload.min.js');</span>
<span class="xccui-lh">  export default {</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">          $(&quot;img&quot;).lazyload({effect: &quot;fadeIn&quot;});</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p class="xlh25">jQuery图片延迟加载插件jQuery.lazyload,使用延迟加载在可提高网页下载速度。在某些情况下，它也能帮助减轻服务器负载。</p>
                    <p class="xlh25">img标签的src指向一个图片占位符，真实图片路径在data-original中。</p>
                    <p class="xlh25">lazyload()</p>
                    <p class="xlh25">描述:图片延迟加载方法</p>
                    <p class="xlh25">用法:$("img").lazyload()</p>
                    <p class="xlh25">参数: placeholder:值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏。</p>
                    <p class="xlh25"> effect(特效):值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn</p>
                    <p class="xlh25">threshold:值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉</p>
                    <p class="xlh25">event:值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载。</p>
                    <p class="xlh25">container:值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片</p>
                    <p class="xlh25">failurelimit:值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('../base/3rd/jquery_lazyload-1.9.3/jquery.lazyload.min.js');
    export default {
        data:function(){
            return {}
        },
        mounted:function(){
            $("img").lazyload({effect: "fadeIn"});
        },
        methods: {}
    }
</script>