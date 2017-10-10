/**************************************************************
 @Name: ccui v0.0.1 前端jquert组件
 @Author: 無
 @Date: 2017-08-01
 *************************************************************/

/*下拉框组件*/
window.ccui_select = function (xid) {
    $("#" + xid).click(function () {
        var flag = $("#" + xid + ">ul").attr('class');
        if (flag == 'ccui-hide ccui-select-list') {
            $("#" + xid + ">ul").attr('class', 'ccui-select-list');
        } else {
            $("#" + xid + ">ul").attr('class', 'ccui-hide ccui-select-list');
        }
    });
    $("#" + xid + ">ul" + ">li").on('click', function () {
        var html = $(this).html();
        $("#" + xid + ">p").html(html);
        $("#" + xid + ">input").attr("value", html);
    });
    //点击页面空白处触发事件
    $(document).bind('click', function (e) {
        if ($(e.target).eq(0).is($("#" + xid + ">p"))) {
            return;
        }
        $("#" + xid + ">ul").attr('class', 'ccui-hide ccui-select-list');
    });
}

//导航栏下拉菜单组件
window.ccui_nav_select = function (xid) {
    $("#" + xid).click(function () {
        var flag = $("#" + xid + ">ul").attr('class');
        if (flag == 'ccui-hide ccui-nav-select-list') {
            $("#" + xid + ">ul").attr('class', 'ccui-nav-select-list');
            //查找每个li标签下的div
            $("#" + xid + ">ul").find("li").each(function (index) {
                var obj_layer = $(this).next("div").length;
                if (obj_layer == 0) {
                    $(this).css({"background-image": "none"});
                    return;
                }
                $(this).mouseover(function () {
                    $(this).next("div").show();
                }).mouseout(function () {
                    $("ul > .ccui-data").hide();
                });

            });
            $("#" + xid).find(".ccui-data").each(function () {
                $(this).mouseover(function () {
                    //获取当前div元素的前面那个li元素
                    $(this).prev("li").attr("class", "ccui-on");
                    $(this).prev("li").children("a").attr("style", "color: white");
                    $(this).show();
                }).mouseout(function () {
                    $(this).hide();
                    $(this).prev("li").removeAttr("class");
                    $(this).prev("li").attr("class", "ccui-item");
                    $(this).prev("li").children("a").attr("style", "");
                });
            });

        }
        else {
            $("#" + xid + ">ul").attr('class', 'ccui-hide ccui-nav-select-list');
        }
    });
    //点击页面空白处触发事件
    $(document).bind('click', function (e) {
        if ($(e.target).eq(0).is($("#" + xid + ">p"))) {
            return;
        }
        $("#" + xid + ">ul").attr('class', 'ccui-hide ccui-nav-select-list');
    });
}

//仿京东左侧商品分类导航菜单
window.ccui_nav_menu = function (xid,left){
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
            $("ul > .ccui-particular").hide();
        });
    });

    $("#"+xid).find(".ccui-particular").each(function(){
        $(this).mouseover(function(){
            //获取当前div元素的前面那个li元素
            $(this).prev("li").attr("class","ccui-on");
            $(this).show();
        }).mouseout(function(){
            $(this).hide();
            $(this).prev("li").removeAttr("class");
        });
    });
}

//手风琴组件
window.ccui_accordion = function(xid,xpid,xchild_id) {
    $("#"+xid).find("ul").hide();
    $("#"+xid).find("p").click(function() {
        if($(this).next().is(":hidden"))
        {
            $(this).next().show();
            $(this).children("i").removeClass("ccui-youjiantou");
            $(this).children("i").addClass("ccui-xiajiantou");
        }
        else
        {
            $(this).next().hide();
            $(this).children("i").removeClass("ccui-xiajiantou");
            $(this).children("i").addClass("ccui-youjiantou");
        }
    });
    //$("#"+xid).find("ul:last").css("border-bottom","0px");
    //为子元素绑定事件以便以后扩展
    if(xpid)
    {
        $("#ccui_"+xpid).trigger("click");
    }
    if(xchild_id)
    {
        $("#ccui_"+xpid+"_"+xchild_id).addClass("ccui-onclick");
    }
}

//图片放大镜组件
window.ccui_magnifying = function(xid){
        var that = $("#" + xid),
            $imgCon = that.find('.ccui-fangDaImg'),//正常图片容器
            $Img = $imgCon.find('img'),//正常图片，还有放大图片集合
            $Drag = that.find('.ccui-magnifyingBegin'),//拖动滑动容器
            $show = that.find('.ccui-magnifyingShow'),//放大镜显示区域
            $showIMg = $show.find('img'),//放大镜图片
            $ImgList = that.find('.ccui-ImgList  li img'),
            multiple = $show.width()/$Drag.width();

        $imgCon.mousemove(function(e){
            $Drag.css('display','block');
            $show.css('display','block');
            //获取坐标的两种方法
            // var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
            // 	iY = e.clientY - this.offsetTop - $Drag.height()/2,
            var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
                iY = e.pageY - $(this).offset().top - $Drag.height()/2,
                MaxX = $imgCon.width()-$Drag.width(),
                MaxY = $imgCon.height()-$Drag.height();

            // //这一部分可代替下面部分，判断最大最小值
            //var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
            //	DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
            //$Drag.css({left:DX+'px',top:DY+'px'});
            //$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});

            iX = iX > 0 ? iX : 0;
            iX = iX < MaxX ? iX : MaxX;
            iY = iY > 0 ? iY : 0;
            iY = iY < MaxY ? iY : MaxY;
            $Drag.css({left:iX+'px',top:iY+'px'});
            $showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
            return false;
        });
        $imgCon.mouseout(function(){
            $Drag.css('display','none');
            $show.css('display','none');
        });
        $ImgList.mouseenter(function(){
//                        给img标签增加一个用作过度的data-bigimg属性
//                        var NowSrc = $(this).data('bigimg');
            var NowSrc = $(this).attr('src');
            $Img.attr('src',NowSrc);
            $(this).parent().addClass('ccui-active').siblings().removeClass('ccui-active');
        });
}


//window.ccui_layer=function(width,height,dom,data)
//{
//    return out=$.layer({
//        type: 1,
//        title: false,
//        border : [10, 0.4,'#000000', true],
//        area: [width+'px',height+'px'],
//        closeBtn : [0, data],
//        shade: [1],
//        page : {dom : '#'+dom}
//    });
//}

/*
 div层跟随滚动条滚动效果。
 xid：div层的ID属性值，必填参数
 top：滚动条滑动时div层距顶部的高度，可选参数
 */
window.xbFixDiv = function (xid,top) {
    var Obj = $('#' + xid);
    //判断ID是否存在,不存在在退出函数
    if (Obj.length != 1) {
        return false;
    }
    //判断当前第二个参数是否存在，如果存在取出值赋予top，不存在top赋值为0
    var top = arguments[1] ? arguments[1] : 0;
    //获取当前元素绝对定位top值
    var ObjTop = Obj.offset().top;
    //记录当前页面的滚动条滚动次数
    $(window).scroll(function () {
        //判断当前滚动条的垂直偏移是否小于当前元素绝对定位top值
        if ($(window).scrollTop() <= ObjTop) {
            Obj.css({
                'position': 'absolute',
                'top': 0 + top + 'px',
                'right': 0,
            });
        } else {
            Obj.css({
                'position': 'fixed',
                'top': 0 + top + 'px',
                'z-index': 1
            });
        }
    });
}