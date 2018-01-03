<template>
    <div class="ccui-m-cart">
        <header class="ccui-header tc">
            <router-link class="fl tl pl15 ccui-btn ccui-iconfont ccui-fanhui ccui-xfont36" :to="{ path: '/'}"></router-link>
            <div v-if ="all_del_tagging" class="fr ccui-btn tr pr15" v-xevent.tap @tap="editClick()">编辑</div>
            <div v-else class="fr ccui-btn tr pr15" v-xevent.tap @tap="editComplete()">完成</div>
            <div class="ccui-xfont36"><span>购物车</span><span>(4)</span></div>
        </header>
        <div class="ccui-xwrap" style="background-color: #e7e7e7;">
            <div class="ccui-xcontent">
                <div class="ccui-goods-list" v-for="(item,index) in shopping_cart_data" :key="item.id">
                    <!--商品标题-->
                    <div class="ccui-vendor-title" v-if="item.type == 'vendor'">
                        <div class="ccui-vendor-select" v-xevent.tap @tap="cartVendorCheck(index)">
                            <i class="ccui-iconfont ccui-xfont32" :class="{ 'ccui-shixinduigou' : item.vendor_checked,'ccui-yuanquan': !item.vendor_checked}"
                               v-model="item.vendor_checked"></i>
                        </div>
                        <div v-show="item.edit_title_tagging">
                            <div v-if="!item.edit_tagging" v-xevent.tap @tap="editVendor(item.vendor_id)"
                                 class="tr pr15 ccui-vendor-edit">编辑
                            </div>
                            <div v-else v-xevent.tap @tap="editCompleteVendor(item.vendor_id)" class="tr pr15 ccui-vendor-edit">完成</div>
                        </div>
                        <div v-xevent.tap @tap="gotoVendor(item.vendor_id)" class="ccui-vendor-name">{{item.vendor_name}}<i
                                class="ccui-xfont24 ccui-iconfont ccui-gengduo ml5"></i></div>
                    </div>
                    <!--商品内容信息-->
                    <div v-else class="ccui-xcol-box">
                        <div class="ccui-goods-content  ccui-xflex " v-xswipe @xswipe="cartSwipe($event,index)"
                             :class="{'ccui-transform ': item.swipe_tagging , 'ccui-transto': !item.swipe_tagging}">
                            <!--商品选择按钮-->
                            <div class="ccui-goods-checkbox tc"
                                 v-xevent.tap @tap="goodsChecked(index)">
                                <i class="ccui-iconfont ccui-xfont32" :class="{ 'ccui-shixinduigou' :item.checked, 'ccui-yuanquan': !item.checked}"
                                   v-model="item.checked"></i>
                            </div>
                            <!--商品图片-->
                            <img class="ccui-goods-img" :src="item.product_img" v-xevent.tap @tap="gotoVendor(item.vendor_id)">

                            <div v-if="!item.edit_tagging" class="ccui-goods-info" v-xevent.tap @tap="gotoVendor(item.vendor_id)">
                                <!--商品名称-->
                                <div class="ccui-goods-name">{{item.product_title}}</div>
                                <!--商品规格-->
                                <div class="ccui-goods-genre">{{item.product_attributes}}</div>
                                <!--商品价格-->
                                <div class="ccui-goods-price ccui-xcol-box ccui-xfont28">
                                    <div class="ccui-xflex">
                                        <span class="ccui-goods-cost tl">{{item.product_promotion_price}}</span>
                                        <span class="ccui-goods-old ml5 tl">{{item.product_price}}</span>
                                    </div>
                                    <div class="ccui-xflex tr">x{{item.selected_item_total}}</div>
                                </div>
                            </div>
                            <!--商品数量编辑-->
                            <div v-else>
                                <div class="ccui-goods-number-btn ccui-xcol-box">
                                    <!--商品数量减少按钮-->
                                    <div class="ccui-goods-reduce-btn" v-xevent.tap @tap="reduce(index)"><i class="ccui-xfont36 ccui-iconfont ccui-jianhao"></i></div>
                                    <!--输入框-->
                                    <div class="ccui-goods-input-btn ccui-xflex">
                                        <input  class="tc ccui-xfont32" disabled="disabled" type="number" min="1" v-model="item.selected_item_total"/>
                                    </div>
                                    <!--商品数量添加按钮-->
                                    <div class="ccui-goods-reduce-btn" v-xevent.tap @tap="add(index)"><i class="ccui-xfont36 ccui-iconfont ccui-jiahao"></i></div>
                                </div>
                                <!--商品属性-->
                                <div class="ccui-goods-attributes-btn ccui-xcol-box mt10">
                                            <div class="ccui-goods-genre ccui-xflex pt5 pl5 pb5">{{item.product_attributes}}</div>
                                            <div class="pt5 pb5 pr5"><i class="ccui-xfont36 ccui-iconfont ccui-xiala"></i></div>
                                    </div>
                            </div>
                        </div>
                        <div v-show ="item.edit_tagging" class="tc ccui-goods-edit-del" v-xevent.tap @tap="del(index)">删除</div>
                        <!--商品删除按钮-->
                        <div v-if="!item.del_tagging" :class="{'ccui-del-open':item.swipe_tagging , '': !item.swipe_tagging}"
                             class="ccui-del tc" @click="del(index)">删除
                        </div>
                        <div v-else :class="{'ccui-del-open': item.swipe_tagging ,'': !item.swipe_tagging}" class="ccui-del tc" style="position: relative"
                             v-xevent.tap @tap="del(index)">删除
                        </div>
                    </div>
                </div>
                <input type="checkbox" class="xswitch">
                <div class="ccui-content-footer"></div>
            </div>
        </div>
        <footer class="ccui-cart-footer ccui-xcol-box">
            <div class="ccui-all-btn tc"v-xevent.tap @tap="checkAll()">
                <i class="ccui-xfont32 ccui-iconfont" :class="{ 'ccui-shixinduigou' : xchecked, 'ccui-yuanquan': !xchecked}" v-model="xchecked" ></i>
            </div>
            <div class="ccui-all-select ccui-xfont32">全选</div>
            <div v-show="all_del_tagging" class="ccui-xflex ccui-all-select tr">
                <span class="ccui-xfont28">合计 :</span>
                <span class=" ccui-cost ml5 mr5">¥{{total}}</span>
                <span class="ccui-xfont24 xui-have">不含运费</span>
            </div>
            <div v-show="all_del_tagging" class="ccui-jiesuan-btn tc" @click="pay_click()">结算(0)</div>
            <div v-show="!all_del_tagging" class="ccui-xflex">
               <div style="position: absolute;right: 0;" class="ccui-jiesuan-btn tc" @click="del_click()" >删除</div>
            </div>
        </footer>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
require('../assets/scss/cart.scss');
require('../base/js/cart.js');

 export default {
        data(){
            return {
                shopping_cart_data: [
                    {
                        id: 1,
                        type: 'vendor',
                        vendor_id: 11,
                        vendor_name: '铸天·全球购',
                        vendor_checked: false,
                        edit_tagging: false,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                    {
                        id: 2,
                        type: 'product',
                        vendor_id: 11,
                        product_id: 10,
                        product_promotion: '满100元包邮',
                        product_title: '人本韩版休闲鞋棉麻男鞋子秋季透气低帮鞋学生板鞋运动帆布鞋男潮',
                        product_attributes: '颜色:黑色;尺码:M/165',
                        product_img: require("mimgs/content13-110x110.png"),
                        product_price:199,
                        product_promotion_price: 150,
                        selected_item_total: 2,
                        checked: false,
                        //                      为了实现前端实现滑动删除效果扩展的属性(默认值都为false)
                        swipe_tagging: false,
                        //                       为了实现编辑效果扩展的属性
                        edit_tagging: false,
                        del_tagging: false,
//                           商家编辑按钮状态显示扩展属性
                        edit_title_tagging : true,
                    },
                    {
                        id: 3,
                        type: 'product',
                        vendor_id: 11,
                        product_id: 12,
                        product_promotion: '满200元包邮',
                        product_title: '韩版春秋小香风中长款套装裙显瘦减龄气质包臀两件套纯色连衣裙ol',
                        product_attributes: '颜色:黑色;尺码:L/165',
                        product_img:require("mimgs/goods-1.jpg"),
                        product_price: 488,
                        product_promotion_price: 150,
                        selected_item_total: 1,
                        checked: false,
                        swipe_tagging: false,
                        edit_tagging: false ,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                    {
                        id: 4,
                        type: 'product',
                        vendor_id: 11,
                        product_id: 13,
                        product_promotion: '满200元包邮',
                        product_title: '2016秋装新款女装韩版套装气质印花时尚两件套长袖连衣裙修身中裙',
                        product_attributes: '颜色:花色;尺码:S',
                        product_img:require("mimgs/goods-2.jpg"),
                        product_price: 288,
                        product_promotion_price: 100,
                        selected_item_total: 1,
                        checked: false,
                        swipe_tagging: false,
                        edit_tagging: false ,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                    {
                        id: 5,
                        type: 'vendor',
                        vendor_id: 12,
                        vendor_name: '乐天·全球购专营店',
                        vendor_checked: false,
                        edit_tagging: false ,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                    {
                        id: 6,
                        type: 'product',
                        vendor_id: 12,
                        product_id: 14,
                        product_promotion: '满250元包邮',
                        product_title: '秋季短款蝙蝠袖夹克男韩版GD权志龙同款长袖外套棒球服开衫宽松潮',
                        product_attributes: '颜色:军绿色;尺码:M',
                        product_img:require("mimgs/goods-3.jpg"),
                        product_price: 448,
                        product_promotion_price: 200,
                        selected_item_total: 1,
                        checked: false,
                        swipe_tagging: false,
                        edit_tagging: false ,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                    {
                        id: 7,
                        type: 'product',
                        vendor_id: 12,
                        product_id: 15,
                        product_promotion: '满1250元包邮',
                        product_title: '男道原创秋装新品多口袋翻领工装夹克男复古休闲字母刺绣牛仔外套',
                        product_attributes: '颜色:白色;尺码:XL',
                        product_img:require("mimgs/goods-4.jpg"),
                        product_price: 2448,
                        product_promotion_price: 1000,
                        selected_item_total: 1,
                        checked: false,
                        swipe_tagging: false,
                        edit_tagging: false ,
                        del_tagging: false,
                        edit_title_tagging : true,
                    },
                ],
                xchecked:false,
                all_del_tagging:true,
            }
        },
 //        Vue属性计算,此处计算总价methods
        computed: {
            total: function () {
                var total = 0;
                for (var i = 0; i < this.shopping_cart_data.length; i++) {
                     var self = this.shopping_cart_data[i];
                     if (self.type == 'vendor') {
                         continue;
                     }
                     if (self.checked) {
                         total += self.selected_item_total * self.product_promotion_price;
                     }
                 }
                return total;
            }
        },
        methods: {
//          导航栏编辑事件
            editClick(){
                var data = this.shopping_cart_data;
                if(!isDelState()){return;}
                data.forEach(function (item) {
                    item.edit_tagging = true;
                    item.edit_title_tagging = false;
                    item.del_tagging = false;
                });
                this.all_del_tagging = false;
            },
            editComplete(){
                var data = this.shopping_cart_data;
                if(!isDelState()){return;}
                data.forEach(function (item) {
                    item.edit_tagging = false;
                    item.edit_title_tagging = true;
                    item.del_tagging = false;
                });
                this.all_del_tagging = true;
            },
            editVendor(vendor_id) {
                var vm = this;
                if(!isDelState()){return;}
                vm.shopping_cart_data.forEach(function (item) {
                    if (item.vendor_id == vendor_id) {
                        item.edit_tagging = true;
                        item.del_tagging = false;
                    }
                });
            },
            editCompleteVendor(vendor_id){
                var vm = this;
                if(!isDelState()){return;}
                vm.shopping_cart_data.forEach(function (item) {
                    if (item.vendor_id == vendor_id) {
                        item.edit_tagging = false;
                        item.del_tagging = false;
                    }
                });
            },

            gotoVendor(){
                this.$router.push({path: "/detail"});
            },

            //          商家选中状态单击事件
            cartVendorCheck(index) {
//                判断是否有元素删除开关打开
                if (!isDelState()) {
                    return;
                }
                var vm = this;
                vm.shopping_cart_data[index].vendor_checked = !vm.shopping_cart_data[index].vendor_checked;
                if (vm.shopping_cart_data[index].vendor_checked) {
                    VendorSelectAll(vm.shopping_cart_data[index].vendor_id,true);
                    if (isState()) {
                        vm.xchecked = true;
                    }
                } else {
                    VendorSelectAll(vm.shopping_cart_data[index].vendor_id,false);
                    vm.xchecked = false;
                }
            },

            goods_click: function () {
//                if (!del_state()) {
//                    return;
//                }
            },
//          实现IOS左滑删除特效，安卓下无效，在此判断下设备return出去
            cartSwipe(event, index){
                var tag = 0;
//                判断是否处于编辑状态
                if(this.shopping_cart_data[index].edit_tagging){
                    return ;
                }
                if (event.__type__ == 'left') {
                    if (this.shopping_cart_data[index].swipe_tagging) {
                        this.shopping_cart_data[index].swipe_tagging = false;
                    } else {
//             判断数组中其他元素有没有打开
                        for (var i = 0; i < this.shopping_cart_data.length; i++){
                            if (this.shopping_cart_data[i].swipe_tagging && i!== index){
                                tag++;
                            }
                        }
                        if (tag == 0) {
                            this.shopping_cart_data[index].swipe_tagging = true;
                        } else {
                            for (var i = 0; i < this.shopping_cart_data.length; i++) {
                                this.shopping_cart_data[i].swipe_tagging = false;
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < this.shopping_cart_data.length; i++) {
                        this.shopping_cart_data[i].swipe_tagging = false;
                    }
                }
                if (event.__type__ == 'right'){
                    for (var i = 0; i < this.shopping_cart_data.length; i++) {
                        this.shopping_cart_data[i].swipe_tagging = false;
                    }
                }
            },

            goodsChecked(index){
                if (!isDelState()) {return;}
                var vm = this;
                vm.shopping_cart_data[index].checked = !vm.shopping_cart_data[index].checked;
                if (vm.shopping_cart_data[index].checked) {
                    productSelectAll(vm.shopping_cart_data[index].vendor_id, true);
                    if (isState()) {
                        vm.xchecked = true;
                    } else {
                        vm.xchecked = false;
                    }
                } else {
                    productSelectAll(vm.shopping_cart_data[index].vendor_id,false);
                    vm.xchecked = false;
                }
            },

            add: function (index) {
                var self = this.shopping_cart_data[index];
                if (self.selected_item_total >= 99) {
                    return false;
                }
                self.selected_item_total++;
            },

            reduce: function (index) {
                var self = this.shopping_cart_data[index];
                if (self.selected_item_total <= 1) {
                    return false;
                }
                self.selected_item_total--;
            },

            del: function (index) {
//                mint-ui Promises对象异步执行
                MessageBox.confirm('确实要删除这个宝贝吗？','').then(action => {
                        console.log(123);
                });
//                var vm = this;
//                var i = 0;
//                api.confirm({
//                    msg: '确认要删除这个宝贝吗？',
//                    buttons: ['确认', '取消']
//                }, function (ret, err) {
//                    if (ret.buttonIndex == 1) {
//                        var vendor_id = vm.shopping_cart_data[index].vendor_id;
//                        vm.shopping_cart_data.splice(index, 1);
//                        vm.shopping_cart_data.forEach(function (item) {
//                            if (item.type == 'product' && item.vendor_id == vendor_id) {
//                                i++;
//                            }
//                        });
//                        if (i == 0) {
//                            for (var j = 0; j < vm.shopping_cart_data.length; j++) {
//                                if (vm.shopping_cart_data[j].vendor_id == vendor_id) {
//                                    vm.shopping_cart_data.splice(j, 1);
//                                }
//                            }
//                        }
//                        if (vm.shopping_cart_data.length == 0) {
//                            hidden_footer();
//                        } else {
//                            exec_script('xui/shop/shopping_footer.frame', 'jsfun(' + vm.total + ')');
//                        }
//
//                    }
//                });
            },

//            全选事件
            checkAll(){
                selectAll();
            },



        }
    }
</script>