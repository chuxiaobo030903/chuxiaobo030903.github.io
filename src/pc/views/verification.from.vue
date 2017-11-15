<template>
    <div class="xccui-main">
        <div class="xccui-content">
            <div class="mt30 ml30">
                <p class="xfont24 fb">表单验证</p>
                <p class="mt20">Validform插件一行代码搞定整站的表单验证！</p>
                <div class="xfont18 fb mt30">实例：</div>
                <div class="xccui-border mt30">
                    <!--实例代码-->
                    <form class=" ml20 mb20" id="ccui-from" action="#">
                        <div class="mt20">
                            <label class="mr10 ccui-label fl">*用户名:</label>
                            <input type="text" class="ccui-input" name="name"  datatype="s5-16" nullmsg="请输入用户名！" errormsg="用户名至少5个字符,最多16个字符！">
                        </div>
                        <div class="mt20">
                            <label class="mr10 ccui-label fl">*密码:</label>
                            <input type="password" class="ccui-input" name="userpassword" datatype="*6-16" nullmsg="请设置密码！" errormsg="密码范围在6~16位之间！">
                        </div>
                        <div class="mt20">
                            <label class="mr10 ccui-label fl">*确认密码:</label>
                            <input type="password" class="ccui-input" name="userpassword2" datatype="*" recheck="userpassword" nullmsg="请再输入一次密码！" errormsg="您两次输入的账号密码不一致！">
                        </div>
                        <div class="mt20 ml80">
                            <input class="ccui-input-sr" type="submit" value="提 交" />
                            <input class="ccui-input-sr ml10" type="reset" value="重 置" />
                        </div>
                    </form>

                    <!--HTML代码-->
                    <div class="xccui-meta">
                    <pre>
                        <code>
<span class="xccui-lh">&lt;template&gt;</span>
<span class="xccui-lh">    &lt;form class=&quot; ml20 mb20&quot; id=&quot;ccui-from&quot; action=&quot;#&quot;&gt;</span>
<span class="xccui-lh">        &lt;div class=&quot;mt20&quot;&gt;</span>
<span class="xccui-lh">             &lt;label class=&quot;mr10 ccui-label fl&quot;&gt;*用户名:&lt;/label&gt;</span>
<span class="xccui-lh">             &lt;input type=&quot;text&quot; class=&quot;ccui-input&quot; name=&quot;name&quot;  datatype=&quot;s5-16&quot; nullmsg=&quot;请输入用户名！&quot; errormsg=&quot;用户名至少5个字符,最多16个字符！&quot;&gt;</span>
<span class="xccui-lh">        &lt;/div&gt;</span>
<span class="xccui-lh">        &lt;div class=&quot;mt20&quot;&gt;</span>
<span class="xccui-lh">             &lt;label class=&quot;mr10 ccui-label fl&quot;&gt;*密码:&lt;/label&gt;</span>
<span class="xccui-lh">             &lt;input type=&quot;password&quot; class=&quot;ccui-input&quot; name=&quot;userpassword&quot; datatype=&quot;*6-16&quot; nullmsg=&quot;请设置密码！&quot; errormsg=&quot;密码范围在6~16位之间！&quot;&gt;</span>
<span class="xccui-lh">        &lt;/div&gt;</span>
<span class="xccui-lh">        &lt;div class=&quot;mt20&quot;&gt;</span>
<span class="xccui-lh">            &lt;label class=&quot;mr10 ccui-label fl&quot;&gt;*确认密码:&lt;/label&gt;</span>
<span class="xccui-lh">            &lt;input type=&quot;password&quot; class=&quot;ccui-input&quot; name=&quot;userpassword2&quot; datatype=&quot;*&quot; recheck=&quot;userpassword&quot; nullmsg=&quot;请再输入一次密码！&quot; errormsg=&quot;您两次输入的账号密码不一致！&quot;&gt;</span>
<span class="xccui-lh">        &lt;/div&gt;</span>
<span class="xccui-lh">        &lt;div class=&quot;mt20 ml80&quot;&gt;</span>
<span class="xccui-lh">            &lt;input class=&quot;ccui-input-sr&quot; type=&quot;submit&quot; value=&quot;提 交&quot; /&gt;</span>
<span class="xccui-lh">            &lt;input class=&quot;ccui-input-sr ml10&quot; type=&quot;reset&quot; value=&quot;重 置&quot; /&gt;</span>
<span class="xccui-lh">       &lt;/div&gt;</span>
<span class="xccui-lh">    &lt;/form&gt;</span>
<span class="xccui-lh">&lt;/template&gt;</span>
<span class="xccui-lh">&lt;script&gt;</span>
<span class="xccui-lh">  require('../base/3rd/Validform_5.3.2/Validform_v5.3.2_min.js');</span>
<span class="xccui-lh">  require('../base/3rd/Validform_5.3.2/css/Validform_v5.3.2.css');</span>
<span class="xccui-lh">  export default{</span>
<span class="xccui-lh">      data(){</span>
<span class="xccui-lh">          return {}</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      mounted(){</span>
<span class="xccui-lh">         $("#ccui-from").Validform({tiptype:3});</span>
<span class="xccui-lh">      },</span>
<span class="xccui-lh">      methods: {}</span>
<span class="xccui-lh">  }</span>
<span class="xccui-lh">&lt;/script&gt;</span>
                        </code>
                    </pre>
                    </div>
                </div>
                <div class="xccui-tip mt30">
                    <p>Validform插件的详细用法:<a target=_blank HREF="http://validform.rjboy.cn">http://validform.rjboy.cn/</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('../base/3rd/Validform_5.3.2/Validform_v5.3.2_min.js');
    require('../base/3rd/Validform_5.3.2/css/Validform_v5.3.2.css');
    export default {
        data:function(){
            return {}
        },
        mounted:function(){
            $("#ccui-from").Validform({
                tiptype:3
            });
        },
    methods: {}
    }
</script>