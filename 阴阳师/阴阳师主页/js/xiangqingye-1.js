/**
 * Created by Administrator on 2017/6/16.
 */
$(function () {
    //输入框部分开始

    //获取焦点事件
    $("#tex").on("focus", function () {
        if ($("#tex").val() == "请输入寮间问题") {
            $("#tex").val("");
        }
    });

    //失去焦点事件
    $("#tex").on("blur", function () {
        if ($("#tex").val() == "") {
            $("#tex").val("请输入寮间问题");
        }
    });

    //按钮进入事件
    $("#search div").on("mouseenter", function () {
        $(this).addClass("current");
    });
    //按钮离开事件
    $("#search div").on("mouseleave", function () {
        $(this).removeClass("current");
    });
    //输入框部分结束

    //攻略部分开始
    //轮播图

    //dot的鼠标进入事件
    var $imgWidth = $("#screen img").width();
    var timer = null;
    var count = 0;
    $("#dot li").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var $index = $(this).index();
        $("#screen div").stop().animate({"left": -$imgWidth * $index});
    });

    timer = setInterval(function () { 
        count++;
        if (count > $("#dot li").length - 1) {
            count = 0;
        }
        $("#dot li").eq(count).trigger("mouseenter");
    }, 2000);

    //攻略左边的下面的导航
    //a的鼠标移入事件
    $("#gonglue-l-nav a").on("mouseenter", function () {
        $(this).children("span").stop().animate({marginTop: 0});
    });
    //a的鼠标离开事件
    $("#gonglue-l-nav a").on("mouseleave", function () {
        $(this).children("span").stop().animate({marginTop: 13});
    });

    //攻略的右边
    $(".gonglue-book").mouseenter(function () {
        $(".inner").stop().animate({"left": 0}, 1000);
        $(".i2,.i3,.i4,.i5").stop().animate({"opacity": "0", "top": "10"});
    });

    $(".gonglue-xinshou").mouseenter(function () {
        $(".inner").stop().animate({"left": -791}, 1000);
        $(".i2").stop().animate({"opacity": "1", "top": "0"});
        $(".i3,.i4,.i5").stop().animate({"opacity": "0", "top": "10"});
    });

    $(".gonglue-wushen").mouseenter(function () {
        $(".inner").stop().animate({"left": -791 * 2}, 1000);
        $(".i3").stop().animate({"opacity": "1", "top": "0"});
        $(".i2,.i4,.i5").stop().animate({"opacity": "0", "top": "10"});
    });

    $(".gonglue-douji").mouseenter(function () {
        $(".inner").stop().animate({"left": -791 * 3}, 1000);
        $(".i4").stop().animate({"opacity": "1", "top": "0"});
        $(".i2,.i3,.i5").stop().animate({"opacity": "0", "top": "10"});
    });

    $(".gonglue-wanfa").mouseenter(function () {
        $(".inner").stop().animate({"left": -791 * 4}, 1000);
        $(".i5").stop().animate({"opacity": "1", "top": "0"});
        $(".i2,.i3,.i4").stop().animate({"opacity": "0", "top": "10"});
    });
    //攻略部分结束


    //同人专区开始
    //前往投稿部分
    $(".qianwangtougao").mouseenter(function () {
        $(this).stop().animate({"right": -12});
    }).mouseleave(function () {
        $(this).stop().animate({"right": 0});
    });

    //同人专区的主体部分
    $(".tongren-nav li").mouseenter(function () {
        var index = $(this).index();
        $(this).siblings().find("span").stop().animate({"top": "-6"});
        $(this).siblings().find("i").stop().animate({"top": "75"});
        $(this).find("span").stop().animate({"top": "-28"});
        $(this).find("i").stop().animate({"top": "24"});
        $(".daUl").stop().animate({"left": -1200 * index}, 1000);
    });
    //同人同人专区开始

    //阴阳师视频开始

    $(".vedio img,.d-huodong ul li img").mouseenter(function () {
        $(this).stop().animate({"width": "110%", "height": "110%", "marginTop": "-5%", "marginLeft": "-5%"});
    }).mouseleave(function () {
        $(this).stop().animate({"width": "100%", "height": "100%", "marginTop": "0", "marginLeft": "0"});
    });
    //阴阳师视频结束

    //footer区域开始
    $(".footer-con a").mouseenter(function () {
        $(".tiyan").stop().animate({"opacity": "0"});
        $(".bar").stop().animate({"top": "0"});
        $(".saomaxiazai").stop().animate({"top": "112", "opacity": "1"});
        $(".door").stop().animate({"top": "240"});

    }).mouseleave(function () {
        $(".tiyan").stop().animate({"opacity": "1"});
        $(".bar").stop().animate({"top": "76"});
        $(".saomaxiazai").stop().animate({"top": "194", "opacity": "0"});
        $(".door").stop().animate({"top": "192"});
    });
    //footer区域结束

    //返回顶部箭头开始
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 2000) {
            $(".fanhuidingbu").show();
        } else {
            $(".fanhuidingbu").hide();
        }
    });
    $(".fanhuidingbu").mouseenter(function () {
        $(this).stop().animate({"bottom": "180"}, 500);
    }).mouseleave(function () {
        $(this).stop().animate({"bottom": "164"}, 500);
    });
    $(".fanhuidingbu a").click(function () {
        $("html,body").animate({"scrollTop": 0}, 500);
    });


    //返回顶部箭头结束
});