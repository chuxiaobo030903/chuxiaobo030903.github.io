/**
 * 移动端的扩展事件指令（对于HammerJS的移动端组件事件的封装）
 * 目前支持的移动端扩展事件只有tap，以后可以按需扩展之。
 *
 * 对于vue文件中的 @click=”...” 进行预编译生成 v-xevent.tap @tap=”...”，然后再正常的vue编译即可。
 * v-xevent绑定dom元素hammerjs的tap事件并且在tap事件触发后模拟一个html事件tap触发vue的绑定方法。
 * 至此，也彻底解决了vue2.0的指令无法绑定行为方法的问题。
 */
import Vue from 'vue'
import Hammer from '../../3rd/hammerjs/hammer.min.js'
Vue.directive('xevent', {
    bind: function (el, binding) {
        var type = undefined;
        if (binding.modifiers.tap) {
            type = 'tap';
        }
        //滑动事件在IOS上正常，但是在安卓设备上存在兼容性问题，以后用到再调试之。
        //https://github.com/hammerjs/hammer.js/issues/124
        //https://github.com/hammerjs/hammer.js/issues/402
        //https://github.com/hammerjs/hammer.js/wiki/Event-delegation-and-how-to-stopPropagation---preventDefaults
        //else if (binding.modifiers.swipeleft) {
        //    type = 'swipeleft';
        //} else if (binding.modifiers.swiperight) {
        //    type = 'swiperight';
        //} else if (binding.modifiers.swipeup) {
        //    type = 'swipeup';
        //} else if (binding.modifiers.swipedown) {
        //    type = 'swipedown';
        //}
        //xassert("ztbase/vendor/vue2/directive/v-xevent.js",28,type, '无法识别的移动端扩展事件定义，请参见hammerjs文档查阅对应的期望事件并且参照v-xevent.tap指令进行扩展之。');

        //@REFER http://hammerjs.github.io/getting-started/ hammerjs教程
        el.hammerjs = new Hammer(el);
        el.hammerjs.on(type, function (e) {
            //bugfix 禁止点击透传冒泡问题
            if (e && e.stopPropagation) {//非IE浏览器
                e.stopPropagation();
            } else {//IE浏览器
                window.event.cancelBubble = true;
            }

            //模拟一个HTML的tap事件，以便于触发绑定的@tap的vue定义的methods中的方法。
            var event = document.createEvent('HTMLEvents');
            event.param = 'left';
            //默认：禁止bubble冒泡，允许取消事件。
            event.initEvent(type, false, true);
            el.dispatchEvent(event);
        });
    }
});

Vue.directive('xswipe', {
    bind: function (el) {
        el.hammerjs = new Hammer(el);
        el.hammerjs.on('swipeleft', function (e) {
            //禁止点击透传冒泡问题
            if (e && e.stopPropagation) {//非IE浏览器
                e.stopPropagation();
            } else {//IE浏览器
                window.event.cancelBubble = true;
            }
            //模拟一个HTML的event对象事件（类似于click），以便于触发绑定的@xswipe的vue定义的methods中的方法。
            var event = document.createEvent('HTMLEvents');
            //默认：禁止bubble冒泡，允许取消事件。
            event.initEvent('xswipe', false, true);
            //vue私有event对象定义方便应用判断
            event.__type__ = 'left';
            //向绑定的该指令的元素分派一个合成事件
            el.dispatchEvent(event);
        });
        el.hammerjs.on('swiperight', function (e) {
            //禁止点击透传冒泡问题
            if (e && e.stopPropagation) {//非IE浏览器
                e.stopPropagation();
            } else {//IE浏览器
                window.event.cancelBubble = true;
            }
            //模拟一个HTML的event对象事件（类似于click），以便于触发绑定的@xswipe的vue定义的methods中的方法。
            var event = document.createEvent('HTMLEvents');
            //默认：禁止bubble冒泡，允许取消事件。
            event.initEvent('xswipe', false, true);
            //vue私有event对象定义方便应用判断
            event.__type__ = 'right';
            //向绑定的该指令的元素分派一个合成事件
            el.dispatchEvent(event);
        });
    },
});