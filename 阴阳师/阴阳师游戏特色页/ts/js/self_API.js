/**
 * Created by Stitch on 2017/6/17 0017.
 */

function colorAnimate(tag, colorAttr, rgb, speed, fn) {
//        若目标含有计时器，清空
    clearInterval(tag.timer);
    // 如果没有设置速度，返回20
    speed = speed || 20;
//        设置计时器
    tag.timer = setInterval(function () {
//            设置结束标志
        var flag = true;
        //        获取背景颜色样式
        var bgc = getComputedStyle(tag)[colorAttr];
//        将背景颜色字符串，转换为rgb数组，存储在bgcArr中
        var bgcArr = bgc.replace("rgb(", "").replace(")", "").replace(" ", "").replace(" ", "").split(",");
//            循环遍历，分别对每一个rgb值进行设置
        for (var i = 0; i < 3; i++) {
//                将字符串转换为数值型
            bgcArr[i] = parseInt(bgcArr[i]);
            //            设置步进值
            var step = (rgb[i] - bgcArr[i]) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                更新颜色值
            bgcArr[i] += step;
//                判断是否到达目标rgb值，没有的话，更改结束标志
            if (bgcArr[i] != rgb[i]) {
                flag = false;
            }
        }
//            设置新的背景颜色
        tag.style[colorAttr] = "rgb(" + bgcArr[0] + "," + bgcArr[1] + "," + bgcArr[2] + ")";
//            判断是否结束
        if (flag) {
            clearInterval(tag.timer);
            if (fn) {
                fn();
            }
        }
    }, speed)
}