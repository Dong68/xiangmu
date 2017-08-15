/**
 * Created by 41737 on 2017/6/10.
 */

function my$(id) {  //获取ID
    return document.getElementById(id);
}

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

// function animate(element, json, fn) {  // 图片放大效果
//     clearInterval(element.timeId);//清理定时器
//     element.timeId = setInterval(function () {
//         var flag = true;//默认假设全部到达目标
//         //遍历每个属性及对应的目标值
//         for (var attr in json) {
//             if (attr == "opacity") {//透明度
//                 var current = getStyle(element, attr) * 100;//0.3*====30
//                 //某个属性对应的目标值
//                 var target = json[attr] * 100;
//                 //每次移动的步数
//                 var step = (target - current) / 10;
//                 step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                 //每次移动后的距离
//                 current += step;
//                 element.style[attr] = current / 100;
//                 //判断元素是否到达目标位置
//             } else if (attr == "zIndex") {//层级
//                 element.style[attr] = json[attr];
//             } else {//普通的属性
//                 //获取元素的当前的位置(距离左边的位置的坐标)
//                 var current = parseInt(getStyle(element, attr));
//                 //某个属性对应的目标值
//                 var target = json[attr];
//                 //每次移动的步数
//                 var step = (target - current) / 5;
//                 step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                 //每次移动后的距离
//                 current += step;
//                 element.style[attr] = current + "px";
//             }
//             if (current != target) {  //判断元素是否到达目标位置
//                 flag = false;
//             }
//         }
//         //全部到达目标
//         if (flag) {
//             clearInterval(element.timeId);
//             //如果效果都实现了,再执行回调函数
//             if (fn) {
//                 fn();
//             }
//         }
//         //测试使用的=====
//         console.log("目标:" + target + ",当前位置:" + current + ",每次移动的步数:" + step);
//     }, 13);
// }

// --------------------------------------------------------------

//底部的分享动态
$(function () {
    $(".NIE-share-iconBtn>li").mouseenter(function () {
        $(this).show(1000).css("color", "#A70D01");
        $(this).find("span").css("color", "#A70D01");
        $(this).find("em").css("color", "#A70D01");
        // console.log(this);
    })
    $(".NIE-share-iconBtn>li").mouseleave(function () {
        $(this).find("span").css("color", "");
        $(this).find("em").css("color", "");
    })
})

//底部更多的隐藏盒子
$(function () {
    $(".gd-in").mouseenter(function () {
        $(".geng-duo-in").show();
        // $(".geng-duo-in").fadeIn();
    })
    $(".geng-duo-in").mouseenter(function () {
        $(".geng-duo-in").show();
        // $(".geng-duo-in").fadeIn();
    })

    $(".geng-duo-in").mouseleave(function () {

        $(".geng-duo-in").fadeOut();
        // $(".geng-duo-in").hide();
    })
    $(".gd-in").mouseleave(function () {
        // $(".geng-duo-in").fadeOut();
        $(".geng-duo-in").hide();

    })
})















//玩家互动添加发布样式

$(function () {
    $(".fa-bu").click(function () {
        //克隆回复的样式

        // 新添加修改，空白检测与关键字屏蔽
        if ($("#hu-dong").val() != "" && /^[" "]*$/.test($("#hu-dong").val()) == false) {
            var pingluntext = $("#hu-dong").val();
            while (pingluntext.indexOf("傻逼") != -1) {
               pingluntext = pingluntext.replace("傻逼","**");
            }

            while (pingluntext.indexOf("sb") != -1) {
                pingluntext = pingluntext.replace("sb","**");
            }
            // 新添加修改结束

                $(".clone").children(0).clone()  //克隆样本
                .prependTo(".lyb-in").find("p") //更改克隆后的P标签文字
                .text(pingluntext).show();//显示效果
            // $("#hu-dong").val("")
            $("#hu-dong").val("")
        }

        if($("#ucontent").height()>$("#lyb").height()){
          var gdt = $("#lyb").height()*$(".dundongtiao").height()/$("#ucontent").height();
            $(".gun-dong-tiao").css("height",gdt);
            // ------------回复的滚动条----------------
            $(".dundongtiao").on("mousedown", function (e) {
                //获取鼠标点击的纵坐标
                var y = e.pageY - $(this).position().top;
                console.log(y);
                //在设置移动事件
                $(document).on("mousemove", function (e) {
                    //找到装滚动条的盒子高度
                    var gundongtiaohezi = $(".dundongtiao").height();
                    //找到装文字的盒子
                    var ZWZHZG = $(".liu-yan-ban").height();
                    //找到文字的盒子
                    var wenzihezigao = $(".lyb-in").height();
                    // console.log(gundonggao);
                    //在设置按下事件mousedown
                    //在求出滚动条的可移动距离  兼容代码
                    window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
                    var Topval = e.pageY - y;
                    //判断范围
                    Topval = Topval < 0 ? 0 : Topval;
                    //滚动条的最大移动距离
                    Topval = Topval > gundongtiaohezi - gdt ? gundongtiaohezi - gdt : Topval;
                    //在求文字的移动距离
                    //文字的移动距离=滚动条的移动距离*文字的最大移动距离/滚动条最大的移动距离
                    var wenziTopval=Topval*(wenzihezigao-ZWZHZG)/( gundongtiaohezi - gdt)
                    // $(".gun-dong-tiao").css("height", "200px");
                    $(".gun-dong-tiao").css("top", Topval);
                    $(".lyb-in").css("top",-wenziTopval)
                });
            });
            $(document).on("mouseup",function () {
                $(document).off("mousemove");
            })
        }
    })
    if ($("#hu-dong").val("")) {
        $(".clone").attr("click") //禁用
    } else {
        // $(".fa-bu").removeAttr("disabled") //启用
    }

    // 新添加修改，回车键发布
    $("#hu-dong").keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            $(".fa-bu").click();
        }
    })
    // 新添加修改结束



})



















//输入框的文字改变和背景变色
$(function () {
    $("textarea").keyup(function () {
        var sum = 163 - $(this).val().length;
        if (sum > -1) {
            $(".fb>span").text(sum);
            $("textarea").css("backgroundColor", "#fff");
        } else {
            $("textarea").css("backgroundColor", "pink");
        }

    })
})


//导航顶部向下卷曲特效

$(function () {
    $(".top-bar").animate({top: 0}, 800);    //导航向下渐渐
    $(".side-bar").animate({left: 0}, 800);  //左侧向右渐渐
    $(".title").animate({left: 0}, 800);      //左侧向右渐渐
    $(".bg img").animate({width: 1920, height: 1084, top: 0, left: 0,}, 1500) //背景渐渐
    // $(".role-title").fadeIn(2000);
    $(".role>img").animate({left: 0}, 1500).delay(1500);  //右侧人物像左渐渐
})
var timer = null;  //龙的缓动效果
timer = setInterval(function () {
    // $(".soul").css("display", "block");
    $(".soul").fadeIn();
}, 1500);
// ------------------------简介小视屏----------------------
var sp = null;
var top = $(".role-title").position().top;
sp = setInterval(function () {

    $(".role-title").fadeIn(200);
    if (top > 155) {
        clearInterval(sp);
    } else {
        $(".role-title").animate({top: 155}, 400);
    }
}, 2000);
// ------------------简介文字---------------------
$(function () {
    var jianjie = null;
    var top = $(".role-cont").position().top;
    jianjie = setInterval(function () {

        $(".role-cont").fadeIn(300);
        if (top > 402) {
            clearInterval(jianjie);
        } else {
            $(".role-cont").animate({top: 402}, 400);
            //简介黑色边框
            $(".border-top").animate({width: "100%"}, 200, function () {
                $(".border-right").animate({height: "100%"}, 150, function () {
                    $(".border-bottom").animate({width: "100%"}, 100, function () {
                        $(".border-left").animate({height: "100%"}, 100, function () {

                        });
                    });
                });
            });
        }
    }, 2500);
})


// ------------------------------精选同人轮播图---------------------------------------

$(function () {
    $(".pic-next").click(function () {
        $("#Lbt2").show().siblings().hide();
    })
    $(".pic-prev").click(function () {
        $("#Lbt1").show().siblings().hide();
    })
})


// -------------------左侧人物显示效果---------------------------------------------------------

$(function () {
    $(window).scroll(function () {
        // 当滑动  卷去高度大于等于1000   显示小火箭
        if ($(window).scrollTop() >= 510) {
            $("#shaoma").stop().fadeIn(500);
            $(".side-bar").addClass("fixed");
        } else {
            $("#shaoma").hide().fadeIn(500);
            $(".side-bar").removeClass("fixed");
        }
    });
})


// -*-----------------简介下面的鼠标流线-------------------------------------------

$(function () {
    // var timer = null;
    // //定时器 interval 每间隔一段时间，执行一次函数内的代码
    // //设置方式 ： setInterval(函数,时间)
    // timer = setInterval(function () {
    //     console.log("今天天气不错");
    // }, 1000);
    //
    // //清除方式 ： clearInterval(定时器的标识);
    // btn.onclick = function () {
    //     clearInterval(timer);
    // };

     var timer = null,timer2=null;
    // timer2=setInterval(function () {
    //     $(".icon-mouse-line").css({opacity: 1,top:13});
    //     $(".icon-mouse-line").animate({opacity: 0,top:18}, 800)
    // },1000);
    timer = setInterval(function () {
        $(".icon-mouse-line").css({top:13}).animate({opacity: 1,top:15},480).animate({opacity: 0,top:19}, 640);

            // $(".icon-mouse-arrow1").css({opacity: 1});
            $(".icon-mouse-arrow1").animate({opacity: 1}, 320).animate({opacity: 0}, 640)
                // $(".icon-mouse-arrow2").css({opacity: 1});
                $(".icon-mouse-arrow2").delay(240).animate({opacity: 1}, 320).animate({opacity: 0}, 640)
                    // $(".icon-mouse-arrow3").css({opacity: 1});
                    $(".icon-mouse-arrow3").delay(480).animate({opacity: 1}, 320).animate({opacity: 0}, 640)

    }, 1600);
    // btn.onclick = function () {
    //         clearInterval(timer);
    //     };

})









// ---------------------技能的切换-----------------------------------------------------*
$(function () {
    $(".skill-btn a").mouseenter(function () {
        //用$(".skill-cont").eq($(this).index())来判断索引值
        if ($(".skill-cont").eq($(this).index())) {
            // console.log($(this).index());
            //用所以值来改变 $(".skill-wrap")中left的值
            $(".skill-wrap").stop().animate({left: (-480 * $(this).index())});
        }
    });
});


// ---------------导航同人专区移入移出事件-----------------------------

$(function () {
    // -------------第一个-----------------------------

    $("#dongren").on("mouseenter", function () {
        $(".dongren").css({opacity: 1}, 1000);
    })
    $("#dongren").on("mouseleave", function () {
        $(".dongren").css({opacity: 0}, 1000);
    })

// ---------------------第二个----------------------------------

    $("#guanfang").on("mouseenter", function () {
        $(".guanfang").css({opacity: 1}, 1000);
    })
    $("#guanfang").on("mouseleave", function () {
        $(".guanfang").css({opacity: 0}, 1000);
    })
})

// ---------------------------回复框滚动条事件----------------------------------------------------------------

// $(function () {
//     //获取所有的元素
//     //获取最外面的div
//    /* var box = my$("box");
//     //获取装文字的div
//     var content = my$("content");
//     //装滚动条的div
//     var scroll = my$("scroll");
//     //滚动条的div
//     var bar = my$("bar");*/
//     //目的:求滚动条的高
//     //滚动条的高/装滚动条的高=装文字的高/文字的高
//     //滚动条的高=装滚动条的高*装文字的box高/文字的高
//     var height = $(".dundongtiao").height() * $("#lyb").height() / $("#ucontent").height();
//
//     var gdt = $("#lyb").height()*$(".dundongtiao").height()/$("#ucontent").height();
//     //设置滚动条的高度
//   /*  bar.style.height = height + "px";*/
//     var gundongtheight = $(".gun-dong-tiao").height();
//     var gudongtiaohezi =  $(".dundongtiao").height();
//     var contentheigth = $(".liu-yan-ban").height();
//     var ulheight = $(".lyb-in").height();
//     //为滚动条注册鼠标按下事件
//     my$("gdtt").onmousedown = function (e) {
//         //仍然不考虑兼容问题
//         var spaceY = e.clientY - gundongtheight;
//         //注册鼠标移动事件
//         document.onmousemove = function (e) {
//             var y = e.clientY - spaceY;
//             y = y < 0 ? 0 : y;
//             y = y > $("#lyb").height() - gdt ? $("#lyb").height() - gdt: y;
//             my$("gdtt").style.top = y + "px";
//
//             //设置滚动的时候,不让文字内容被选中
//             window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
//
//             //计算比例
//             //滚动条的移动距离/文字的移动距离=滚动条最大的移动距离/文字的最大移动距离
//             //文字的移动距离=滚动条的移动距离*文字的最大移动距离/滚动条最大的移动距离
//             //文字的最大移动的距离=文字的高-装文字的高
//             var textMaxMove=$(".lyb-in").scrollHeight-contentheigth;
//             var textMoveTop=y*textMaxMove/(gudongtiaohezi - gundongtheight);
//             my$("ucontent").style.marginTop=-textMoveTop+"px";
//         };
//     };
//
//     //干掉鼠标移动事件
//     document.onmouseup = function () {
//         document.onmousemove = null;
//     };
// })
$(function () {

});








