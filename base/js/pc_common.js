/**************************************************************
 @Name: rmt v0.0.1 前端组件
 @Author: 無
 @Date: 2014-07-25
 *************************************************************/

/*下拉框组件
 * <div class="xb-select" id="cxb">
 *     <p>を入力する</p>
 *     <ul class="xbhide xb-selectList" style="top:25px;width:100%">
 *         <li>1</li>
 *         <li>2</li>
 *         <li>3</li>
 *      </ul>
 * </div>
 * */
function xbselect(xid)
{
    $("#"+xid).click(function() {
        flag = $("#"+xid+">ul").attr('class');
        if (flag == 'xbhide xb-selectList')
        {
            $("#"+xid+">ul").attr('class', 'xb-selectList');
        } else {
            $("#"+xid+">ul").attr('class', 'xbhide xb-selectList');
        }
    });
    $("#"+xid+">ul"+">li").on('click', function() {
        var html = $(this).html();
        $("#"+xid+">p").html(html);
        var values=$(this).attr("value");
        $("#"+xid+">input").attr("value",values);
    });
    //点击页面空白处触发事件
    $(document).bind('click', function(e){
        if ($(e.target).eq(0).is($("#"+xid+">p")))
        {
            return;
        }
        $("#"+xid+">ul").attr('class', 'xbhide xb-selectList');
    });
}
//<div class="xbselect fl" id="nav_select">
//    <p class="fb">製品情報</p>
//    <ul class="xbhide xbselectList">
//        <li class="xbli"><a href="#">情報1</a></li>
//        <div class="xbdiv">
//            <a href="http://www.baidu.com">製品1</a>
//            <a href="http://www.baidu.com">製品1</a>
//            <a href="http://www.baidu.com">製品1</a>
//            <a href="http://www.baidu.com">製品1</a>
//            <a href="http://www.baidu.com">製品11111111111111111111111111111</a>
//        </div>
//        <li class="xbli"><a href="#">情報2</a></li>
//        <div class="xbdiv">
//            <a href="http://www.baidu.com">製品2</a>
//        </div>
//        <li class="xbli"><a href="#">情報333333333333333333333333333333333333333333333333333</a></li>
//        <div class="xbdiv">
//            <a href="http://www.163.com">製品3</a>
//        </div>
//        <li class="xbli"><a href="#">情報1</a></li>
//        <li class="xbli"><a href="#">情報2</a></li>
//        <li class="xbli"><a href="#">情報3</a></li>
//    </ul>
//</div>
// xid为DOM元素ID值
//xopen为ture 开启下拉框组件获取选中值，为空则不会获取选中值
function xbnav_select(xid)
{
    $("#"+xid).click(function() {
        flag = $("#"+xid+">ul").attr('class');
        if (flag == 'xbhide xbselectList')
        {
            $("#"+xid+">ul").attr('class', 'xbselectList');
            //查找每个li标签下的div
            $("#"+xid+">ul").find("li").each(function(index)
            {
                var obj_layer=$(this).next("div").length;
                if(obj_layer==0){
                    $(this).css({"background-image":"none"});
                    return;
                }
                $(this).mouseover(function(){
                    $(this).next("div").show();
                }).mouseout(function()
                {
                    $("ul > .xbdiv").hide();
                });

            });
            $("#"+xid).find(".xbdiv").each(function()
            {
                $(this).mouseover(function()
                {
                    //获取当前div元素的前面那个li元素
                    $(this).prev("li").attr("class","xbon");
                    $(this).prev("li").children("a").attr("style","color: white");
                    $(this).show();
                }).mouseout(function()
                {
                    $(this).hide();
                    $(this).prev("li").removeAttr("class");
                    $(this).prev("li").attr("class","xbli");
                    $(this).prev("li").children("a").attr("style","");
                });
            });

        }
        else {
            $("#"+xid+">ul").attr('class', 'xbhide xbselectList');
        }
    });
    //点击页面空白处触发事件
    $(document).bind('click', function(e){
        if ($(e.target).eq(0).is($("#"+xid+">p")))
        {
            return;
        }
        $("#"+xid+">ul").attr('class', 'xbhide xbselectList');
    });
}


/*手风琴组件
 *<div id="cxb" class="xbaccordion">
 *   <p class="title bj">标题1</p>
 *   <ul class="content" style="display: none;">
 *       <li><a>アパレル</a></li>
 *   </ul>
 *   <p class="title bj">标题2</p>
 *   <ul class="content" style="display: none; border-bottom-width: 0px;">
 *       <li><a>タオバオ代行</a></li>
 *       <li><a>物流代行</a></li>
 *   </ul>
 *</div>
 *
 * */
function xbaccordion(xid,xpid,xchild_id)
{
    $("#"+xid).find("ul").hide();
    $("#"+xid).find("p").click(function() {
        if($(this).next().is(":hidden"))
        {
            $(this).next().show();
            $(this).removeClass("bj");
            $(this).addClass("on");
        }
        else
        {
            $(this).next().hide();
            $(this).removeClass("on");
            $(this).addClass("bj");
        }
    });
    $("#"+xid).find("ul:last").css("border-bottom","0px");

    if(xpid)
    {
        $("#xbtitle_"+xpid).trigger("click");
    }
    else
    {
        return;
    }
    if(xchild_id)
    {
        $("#xbtitle_"+xpid+"_"+xchild_id).addClass("onclick");
    }
}

/*仿京东左侧导航栏
 <div class="xbnav" id="xnav">
 <ul>
 <li><a href="http://www.163.com">中国人</a></li>
 <div class="xbtips">
 <p><a href="http://www.baidu.com">baidu</a></p>
 </div>
 <li><a>2222</a></li>
 <div class="xbtips">
 <p><a href="http://www.baidu.com">souhu</a></p>
 </div>
 </ul>
 </div>
 * */
function xbnav(xid,left){
    //查找当前DOM元素下的li元素，并给找到的li元素绑定鼠标指针位于元素上方和离开时触发的事件
    $("#"+xid).find("li").each(function(index){
        $(this).mouseover(function(){
            if(index>=15){
                if(index>=18){
                    if(index==20){
                        $("ul > div:eq("+index+")").css({"left":left+"px","top":"0px","height":"573px"}).show();
                    }else{
                        $("ul > div:eq("+index+")").css({"left":left+"px","top":"117px","border-top":"2px solid #1a448e"}).show();
                    }
                }else{
                    $("ul > div:eq("+index+")").css({"left":left+"px","top":"117px","border-top":"2px solid #1a448e"}).show();
                }
            }else{
                $("ul > div:eq("+index+")").css({"left":left+"px"}).show();
            }
        }).mouseout(function(){
            $("ul > .xbtips").hide();
        });
    });

    $("#"+xid).find(".xbtips").each(function(){
        $(this).mouseover(function(){
            //获取当前div元素的前面那个li元素
            $(this).prev("li").attr("class","xbon");
            $(this).show();
        }).mouseout(function(){
            $(this).hide();
            $(this).prev("li").removeAttr("class");
        });
    });
}

/*
 div层跟随滚动条滚动效果。
 xid：div层的ID属性值，必填参数
 top：滚动条滑动时div层距顶部的高度，可选参数
 */
function xbFixDiv(xid,top)
{
    var Obj=$('#'+xid);
    //判断ID是否存在,不存在在退出函数
    if(Obj.length!=1)
    {
        return false;
    }
    //判断当前第二个参数是否存在，如果存在取出值赋予top，不存在top赋值为0
    var top=arguments[1]?arguments[1]:0;
    //获取当前元素绝对定位top值
    var ObjTop=Obj.offset().top;
    //记录当前页面的滚动条滚动次数
    $(window).scroll(function()
    {
        //判断当前滚动条的垂直偏移是否小于当前元素绝对定位top值
        if($(window).scrollTop()<=ObjTop){
            Obj.css({
                'position':'relative',
                'top':0
            });
        }else{
            Obj.css({
                'position':'fixed',
                'top':0+top+'px',
                'z-index':1
            });
        }
    });
    //判断是否是IE浏览器
//    var isIE6=$.browser.msie && $.browser.version == '6.0';
//    if(isIE6){
//        $(window).scroll(function(){
//            if($(window).scrollTop()<=ObjTop){
//                Obj.css({
//                    'position':'relative',
//                    'top':0
//                });
//            }else{
//                Obj.css({
//                    'position':'absolute',
//                    'top':$(window).scrollTop()+top+'px',
//                    'z-index':1
//                });
//            }
//        });
//    }else{
//        $(window).scroll(function(){
//            if($(window).scrollTop()<=ObjTop){
//                Obj.css({
//                    'position':'relative',
//                    'top':0
//                });
//            }else{
//                Obj.css({
//                    'position':'fixed',
//                    'top':0+top+'px',
//                    'z-index':1
//                });
//            }
//        });
//    }
}