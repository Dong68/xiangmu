/**
 * Created by fangjia on 2017/6/11.
 */
function my$(id) {
    return document.getElementById(id);
}
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}
function getScroll() {
    return{
        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0,
        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0
    }
}

function animate(element, json, sp1, sp2, fn) {
    clearInterval(element.timeId);//清理定时器
    element.timeId = setInterval(function () {
        var flag = true;//默认假设全部到达目标
        //遍历每个属性及对应的目标值
        for (var attr in json) {
            if (attr == "opacity") {//透明度
                var current = getStyle(element, attr) * 100;//0.3*====30
                //某个属性对应的目标值
                var target = json[attr] * 100;
                //每次移动的步数
                var step = (target - current) / sp1;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次移动后的距离
                current += step;
                element.style[attr] = current / 100;
                //判断元素是否到达目标位置
            } else if (attr == "zIndex") {//层级
                element.style[attr] = json[attr];
            } else {//普通的属性
                //获取元素的当前的位置(距离左边的位置的坐标)
                var current = parseInt(getStyle(element, attr));
                //某个属性对应的目标值
                var target = json[attr];
                //每次移动的步数
                var step = (target - current) / sp2;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次移动后的距离
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {  //判断元素是否到达目标位置
                flag = false;
            }
        }
        //全部到达目标
        if (flag) {
            clearInterval(element.timeId);
            //如果效果都实现了,再执行回调函数
            if (fn) {
                fn();
            }
        }
    }, 20);
}
my$("r3").style.opacity = 0;
my$("r3").style.left = "210px";
my$("r3").style.top = "0px";
my$("r4").style.opacity = 0;
my$("r4").style.left = "165px";
my$("r4").style.top = "75px";
var rflag = true;
my$("next").onclick = function () {
    if (rflag) {
        animate(my$("r1"), {"opacity": 0, "left": 210}, 23, 20, function () {
            animate(my$("r3"), {"opacity": 1, "left": 40, "zIndex": 2}, 15, 15);
        });
        animate(my$("r2"), {"opacity": 0, "left": 165}, 23, 20, function () {
            animate(my$("r4"), {"opacity": 1, "left": 267, "zIndex": 1}, 15, 15);
        });
        rflag = false
    } else {
        animate(my$("r3"), {"opacity": 0, "left": 210}, 23, 20, function () {
            animate(my$("r1"), {"opacity": 1, "left": 40, "zIndex": 1}, 15, 15);
        });
        animate(my$("r4"), {"opacity": 0, "left": 165}, 23, 20, function () {
            animate(my$("r2"), {"opacity": 1, "left": 335, "zIndex": 2}, 15, 15);
        });
        rflag = true;
    }
};


    window.onscroll=function () {
        // console.log(1);
        // console.log(getScroll().top);
        if(getScroll().top>55){
            // my$("bar").style.backgroundColor="rgba(255,255,255,0)";
            my$("bar").style.position="fixed";
            my$("bar").style.zIndex="30";
            // my$("bar").style.marginLeft="130px";

            my$("bar").style.top="0";


            // animate(my$("bar"),{"opacity":0.9},10,10);

            // my$("ntul").style.display="none";

            // my$("mainPart").style.marginTop=my$("navBar").offsetHeight+"px";
        }else if(getScroll().top<55){
            // my$("bar").style.backgroundColor="";
            console.log(22222);
            // my$("bar").style.marginLeft="260px";
            // animate2(my$("bar"),{"opacity":0},10,10)
            my$("bar").style.position="absolute";
            my$("bar").style.top="55px";
            // my$("ntul").style.display="block";
        }
    };





function animate2(element, json, sp1, sp2, fn) {
    clearInterval(element.timeId);//清理定时器
    element.timeId = setInterval(function () {
        var flag = true;//默认假设全部到达目标
        //遍历每个属性及对应的目标值
        for (var attr in json) {
            if (attr == "opacity") {//透明度
                var current = getStyle(element, attr) * 100;//0.3*====30
                //某个属性对应的目标值
                var target = json[attr] * 100;
                //每次移动的步数
                var step = (target - current) / sp1;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次移动后的距离
                current += step;
                var a = current / 100;
                // element.style[attr] = current / 100;
                element.style.backgroundColor="rgba(255,255,255,"+a +")"
                //判断元素是否到达目标位置
            } else if (attr == "zIndex") {//层级
                element.style[attr] = json[attr];
            } else {//普通的属性
                //获取元素的当前的位置(距离左边的位置的坐标)
                var current = parseInt(getStyle(element, attr));
                //某个属性对应的目标值
                var target = json[attr];
                //每次移动的步数
                var step = (target - current) / sp2;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //每次移动后的距离
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {  //判断元素是否到达目标位置
                flag = false;
            }
        }
        //全部到达目标
        if (flag) {
            clearInterval(element.timeId);
            //如果效果都实现了,再执行回调函数
            if (fn) {
                fn();
            }
        }
    }, 20);
}
$(function () {
    // $(".lunboxiaodian").children().eq(0).css({backgroundColor:"#e37b63"});
    $(".huidongdexian").animate({top:"91px"},2000,function () {
        $(".huidongdexian").css({top:"5px"});
    });
    setInterval(function () {
        $(".huidongdexian").animate({top:"91px"},2000,function () {
            $(".huidongdexian").css({top:"5px"});
        });
    },2000)




});
