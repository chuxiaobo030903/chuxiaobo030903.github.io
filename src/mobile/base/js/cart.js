
//判断是否被全部选中状态
window.isState = function () {
    var data =__root_vue_component__.shopping_cart_data;
    var i = 0;
    data.forEach(function (item) {
        if (item.type == 'vendor') {
            if (item.vendor_checked == true) {
                i++;
            }
        } else {
            if (item.checked == true) {
                i++;
            }
        }
    });
    if (data.length == i) {
        return true;
    } else {
        return false;
    }
};

//    设置商家下所有商品的状态
window.VendorSelectAll = function (vendor_id, state) {
    var data = __root_vue_component__.shopping_cart_data;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == 'vendor') {
            continue;
        }
        if (state) {
            if (data[i].vendor_id == vendor_id) {
                data[i].checked = true;
            }
        } else {
            if (data[i].vendor_id == vendor_id) {
                data[i].checked = false;
            }
        }

    }
};

//判断全部元素删除开关是否打开
window.isDelState = function () {
    var tag = 0;
    var data = __root_vue_component__.shopping_cart_data;
//          判断数组中其他元素有没有打开
    for (var i = 0; i < data.length; i++) {
        if (data[i].swipe_tagging) {
            tag++;
        }
    }
    if (tag == 0) {
        return true;
    }
    for (var j = 0; j < data.length; j++) {
        data[j].swipe_tagging = false;
    }
    return false;
}

//全部选中
window.selectAll = function () {
    if (!isDelState()) {return;}
    var data = __root_vue_component__.shopping_cart_data;
    var i = 0;
    var total = 0;
    data.forEach(function (item) {
        if (item.type == 'vendor') {
            if (item.vendor_checked == true) {
                i++;
            }
        } else {
            if (item.checked == true) {
                i++;
            }
        }
    });
    if (data.length == i) {
        data.forEach(function (item) {
            if (item.type == 'vendor') {
                item.vendor_checked = false;
            } else {
                item.checked = false;
            }
        });
        __root_vue_component__.xchecked = false;
    } else {
        data.forEach(function (item) {
            if (item.type == 'vendor') {
                item.vendor_checked = true;
            } else {
                item.checked = true;
                total += item.selected_item_total *
                    item.product_promotion_price;
            }
        });
        __root_vue_component__.xchecked = true;
    }
};

//商品选中设置商家的状态
window.productSelectAll = function (vendor_id, state) {
    var data = __root_vue_component__.shopping_cart_data;
    var count = 0;
    var checked_count = 0;
//        计算出当前商家下商品总数
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == 'vendor') {
            continue;
        } else {
            if (data[i].vendor_id == vendor_id) {
                count++;
            }
            //        计算当前商家下有多少商品被选中数
            if (data[i].vendor_id == vendor_id && data[i].checked == true) {
                checked_count++;
            }
        }
    }
//      设置商家选中状态
    for (var i = 0; i < data.length; i++) {
        if (data[i].vendor_id == vendor_id && data[i].type == 'vendor') {
            if (state) {
                if (checked_count == count) {
                    data[i].vendor_checked = true;
                }
                return;
            } else {
                data[i].vendor_checked = false;
                return;
            }
        }
    }

};
