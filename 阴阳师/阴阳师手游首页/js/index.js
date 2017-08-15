/**
 * Created by Administrator on 2017/6/12.
 */

// 新版本情报部分页面滚动效果
$(function () {
    var flag = true;
    $(window).scroll(function () {
        if (flag) {
            if ($(window).scrollTop() >= 700) {
                $(".newcopy").animate({
                    top: 0,
                    opacity: 1
                }, 1000);
                flag = false;
            }
        }
    });
});

// 游戏特色部分页面滚动效果
$(function () {
    var flag = true;
    $(window).scroll(function () {
        if (flag) {
            if ($(window).scrollTop() >= 1350) {
                $(".gamegood").animate({
                    top: 0,
                    opacity: 1
                }, 1000);
                flag = false;
            }
        }
    });
});


//新版本内容部分的动画效果

var $lis = $("#new_con").find("li");
$lis.mouseenter(function () {
    $(this).children("a").stop().animate({
        marginTop: "-10px"
    }, 200)

    // 新版本内容的外框动画效果
    $(this).find("i").css("display", "block");
    $(this).find("i").animate({width: 400}, "fast").animate({height: 183}, "fast", function () {
        $(this).next().css("display", "block");
        $(this).next().animate({width: 400}, "fast").animate({height: 183}, "fast");
    });

});
$lis.mouseleave(function () {
    $(this).children("a").animate({
        marginTop: "0px"
    }, 200)

    $(this).find("i").stop(true).css({display: "none", width: "0", height: "0"});
    $(this).find("span").stop(true).css({display: "none", width: "0", height: "0"});
});


// 点击新版本内容广告弹窗显示
var links = $("#new_con a");
var pics = $("#banner_pic_con .pic");
var ps = $("#banner_pic_con  .ps");
var scrolls = $("#banner_pic_con  .scroll");

for (var i = 0; i < links.length; i++) {
    links[i].index = i;
    links[i].onclick = function () {
        my$("banner").style.display = "block";
        my$("banner_pic").style.display = "block";
        my$("main").style.position = "fixed";
        for (var i = 0; i < pics.length; i++) {
            if (this.index == i) {
                count = this.index;
                pics[this.index].style.display = "block";
                ps[this.index].style.display = "block";
                scrolls[this.index].style.display = "block";
                scrolls[this.index].onmouseover = function () {
                    this.style.opacity = 1;
                };
                scrolls[this.index].onmouseout = function () {
                    this.style.opacity = 0;
                };


                // 获取所有的元素
//获取最外面的div
                var box = my$("box_content");
//获取装文字的div
                var content = ps[this.index];
// //装滚动条的div
                var scroll = scrolls[this.index];
// //滚动条的div
                var bar = scrolls[this.index].getElementsByClassName("bar");
//目的:求滚动条的高
//滚动条的高/装滚动条的高=装文字的高/文字的高
//滚动条的高=装滚动条的高*装文字的box高/文字的高
                var height = scrolls[this.index].offsetHeight * box.offsetHeight / content.scrollHeight;
//设置滚动条的高度
                bar[0].style.height = height + "px";

//为滚动条注册鼠标按下事件
                bar[0].onmousedown = function (e) {
                    //仍然不考虑兼容问题
                    var spaceY = e.clientY - bar[0].offsetTop;
                    //注册鼠标移动事件

                    document.onmousemove = function (e) {
                        var y = e.clientY - spaceY;
                        console.log(y);
                        y = y < 0 ? 0 : y;
                        y = y > scroll.offsetHeight - bar[0].offsetHeight ? scroll.offsetHeight - bar[0].offsetHeight : y;
                        bar[0].style.top = y + "px";
                        // console.log(y);

                        //设置滚动的时候,不让文字内容被选中
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

                        //计算比例
                        //滚动条的移动距离/文字的移动距离=滚动条最大的移动距离/文字的最大移动距离
                        //文字的移动距离=滚动条的移动距离*文字的最大移动距离/滚动条最大的移动距离
                        //文字的最大移动的距离=文字的高-装文字的高
                        var textMaxMove = content.scrollHeight - box.offsetHeight;
                        var textMoveTop = y * textMaxMove / (scroll.offsetHeight - bar[0].offsetHeight);
                        content.style.marginTop = -textMoveTop + "px";
                    };
                };

                //干掉鼠标移动事件
                document.onmouseup = function () {
                    document.onmousemove = null;
                };


            } else {
                pics[i].style.display = "none";
                ps[i].style.display = "none";
                scrolls[i].style.display = "none";

            }

        }
    }

}

//点击关闭按钮广告弹窗关闭
var closeBtn = my$("closeBtn");
var im = closeBtn.children[0].children[0];
var timer = null;

closeBtn.onclick = function () {
    my$("banner").style.display = "none";
    my$("banner_pic").style.display = "none";
    my$("main").style.position = "static";
}
//鼠标进入
closeBtn.onmouseover = function () {
    getDeg(im, 180, 0)
};
//鼠标移出
closeBtn.onmouseout = function () {
    getDeg(im, 0, 180);
}


//封装一个函数
function getDeg(element, targetDeg, startDeg) {
    clearInterval(timer);
    var deg = startDeg;
    var step = 10;
    step = targetDeg > startDeg ? step : -step;
    timer = setInterval(function () {
        if (Math.abs(targetDeg - deg) > 0) {
            deg += step;
            element.style.transform = "rotate(" + deg + "deg)";
        } else {
            clearInterval(timer);
        }
        console.log(deg);
    }, 20)
}


//设置左右箭头的动作


$("#arrow_right").mouseenter(function () {
    for (var i = 0; i < 20; i++) {
        $(this).stop().animate({marginRight: -30}, 500).animate({marginRight: 0}, 500);
    }
})
$("#arrow_right").mouseleave(function () {
    $(this).stop(true, false).css("marginRight", "0");
})

$("#arrow_left").mouseenter(function () {
    for (var i = 0; i < 20; i++) {
        $(this).stop().animate({marginLeft: -30}, 500).animate({marginLeft: 0}, 500);

    }
})
$("#arrow_left").mouseleave(function () {
    $(this).stop(true, false).css("marginLeft", "0");
})


var count = 0;
my$("arrow_right").onclick = function () {

    count++;
    if (count == pics.length) {
        count = 0;
    }
    pics[count].style.display = "block";
    ps[count].style.display = "block";
    scrolls[count].style.display = "block";
    scrolls[count].onmouseover = function () {
        this.style.opacity = 1;
    };
    scrolls[count].onmouseout = function () {
        this.style.opacity = 0;
    };


    // 获取所有的元素
//获取最外面的div
    var box = my$("box_content");
//获取装文字的div
    var content = ps[count];
// //装滚动条的div
    var scroll = scrolls[count];
// //滚动条的div
    var bar = scrolls[count].getElementsByClassName("bar");
//目的:求滚动条的高
//滚动条的高/装滚动条的高=装文字的高/文字的高
//滚动条的高=装滚动条的高*装文字的box高/文字的高
    var height = scrolls[count].offsetHeight * box.offsetHeight / content.scrollHeight;
//设置滚动条的高度
    bar[0].style.height = height + "px";

//为滚动条注册鼠标按下事件
    bar[0].onmousedown = function (e) {
        //仍然不考虑兼容问题
        var spaceY = e.clientY - bar[0].offsetTop;
        //注册鼠标移动事件

        document.onmousemove = function (e) {
            var y = e.clientY - spaceY;
            console.log(y);
            y = y < 0 ? 0 : y;
            y = y > scroll.offsetHeight - bar[0].offsetHeight ? scroll.offsetHeight - bar[0].offsetHeight : y;
            bar[0].style.top = y + "px";
            // console.log(y);

            //设置滚动的时候,不让文字内容被选中
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

            //计算比例
            //滚动条的移动距离/文字的移动距离=滚动条最大的移动距离/文字的最大移动距离
            //文字的移动距离=滚动条的移动距离*文字的最大移动距离/滚动条最大的移动距离
            //文字的最大移动的距离=文字的高-装文字的高
            var textMaxMove = content.scrollHeight - box.offsetHeight;
            var textMoveTop = y * textMaxMove / (scroll.offsetHeight - bar[0].offsetHeight);
            content.style.marginTop = -textMoveTop + "px";
        };
    };

    //干掉鼠标移动事件
    document.onmouseup = function () {
        document.onmousemove = null;
    };


    for (var i = 0; i < pics.length; i++) {
        if (i != count) {
            pics[i].style.display = "none";
            ps[i].style.display = "none";
            scrolls[i].style.display = "none";
        }

    }
}

// 左侧按钮
my$("arrow_left").onclick = function () {

    count--;
    console.log(count);
    if (count == -1) {
        count = pics.length - 1;
        console.log(count);
    }
    pics[count].style.display = "block";
    ps[count].style.display = "block";
    scrolls[count].style.display = "block";
    scrolls[count].onmouseover = function () {
        this.style.opacity = 1;
    };
    scrolls[count].onmouseout = function () {
        this.style.opacity = 0;
    };


    // 获取所有的元素
//获取最外面的div
    var box = my$("box_content");
//获取装文字的div
    var content = ps[count];
// //装滚动条的div
    var scroll = scrolls[count];
// //滚动条的div
    var bar = scrolls[count].getElementsByClassName("bar");
//目的:求滚动条的高
//滚动条的高/装滚动条的高=装文字的高/文字的高
//滚动条的高=装滚动条的高*装文字的box高/文字的高
    var height = scrolls[count].offsetHeight * box.offsetHeight / content.scrollHeight;
//设置滚动条的高度
    bar[0].style.height = height + "px";

//为滚动条注册鼠标按下事件
    bar[0].onmousedown = function (e) {
        //仍然不考虑兼容问题
        var spaceY = e.clientY - bar[0].offsetTop;
        //注册鼠标移动事件

        document.onmousemove = function (e) {
            var y = e.clientY - spaceY;
            console.log(y);
            y = y < 0 ? 0 : y;
            y = y > scroll.offsetHeight - bar[0].offsetHeight ? scroll.offsetHeight - bar[0].offsetHeight : y;
            bar[0].style.top = y + "px";
            // console.log(y);

            //设置滚动的时候,不让文字内容被选中
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

            //计算比例
            //滚动条的移动距离/文字的移动距离=滚动条最大的移动距离/文字的最大移动距离
            //文字的移动距离=滚动条的移动距离*文字的最大移动距离/滚动条最大的移动距离
            //文字的最大移动的距离=文字的高-装文字的高
            var textMaxMove = content.scrollHeight - box.offsetHeight;
            var textMoveTop = y * textMaxMove / (scroll.offsetHeight - bar[0].offsetHeight);
            content.style.marginTop = -textMoveTop + "px";
        };
    };

    //干掉鼠标移动事件
    document.onmouseup = function () {
        document.onmousemove = null;
    };

    for (var i = 0; i < pics.length; i++) {
        if (i != count) {
            pics[i].style.display = "none";
            ps[i].style.display = "none";
            scrolls[i].style.display = "none";
        }

    }
}


// 分享链接的样式
my$("more").onmouseover = function () {
    my$("new_share").style.display = "block";
}
my$("more").onmouseout = function () {
    my$("new_share").style.display = "none";
}


// 游戏内容的动画效果
var config = [
    {
        width: 368,
        top: 0,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        width: 552,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },//1
    {
        width: 776,
        top: 150,
        left: 200,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 552,
        top: 70,
        left: 558,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 368,
        top: 0,
        left: 692,
        opacity: 0.2,
        zIndex: 2
    }//4

];

//设置所有的图片全部散开(li散开,每个li标签都应该设置对应的json格式中的数据)
//获取所有的li标签
var listcon = my$("game_con_in").children[0].children;


//散开图片
function assign() {
    for (var i = 0; i < listcon.length; i++) {
        animate(listcon[i], config[i], function () {
            flag = true;//打开锁
        });
    }
}
assign();

//右边按钮点击事件
my$("arr_Right").onclick = function () {
    if (flag) {
        flag = false;
        //调换数组中元素的位置
        config.push(config.shift());

        //外框线的隐藏
        $("#game_con_in i").stop(true).css({width: "0", height: "0"});

        $("#game_con_in span").stop(true).css({width: "0", height: "0"});

        assign();

        //外框线的显示
        $("#game_con_in i").css("display", "block");
        $("#game_con_in i").stop().animate({width: 740},500).animate({height: 407}, 500, function () {
            $("#game_con_in span").css("display", "block");
            $("#game_con_in span").stop().animate({width: 738}, 500).animate({height: 405}, 500)
        })

    }

};

//左边按钮点击事件
my$("arr_Left").onclick = function () {
    if (flag) {
        flag = false;
        //调换数组中元素的位置
        config.unshift(config.pop());

        $("#game_con_in i").stop(true).css({width: "0", height: "0"});

        $("#game_con_in span").stop(true).css({width: "0", height: "0"});


        assign();

        $("#game_con_in i").css("display", "block");
        $("#game_con_in i").stop().animate({width: 740},"fast").animate({height: 407}, "fast", function () {
            $("#game_con_in span").css("display", "block");
            $("#game_con_in span").stop().animate({width: 738}, "fast").animate({height: 405}, "fast")
        })
    }


};

//显示左右焦点的按钮
//鼠标进入事件
my$("game_content").onmouseover = function () {
    animate(my$("arr"), {"opacity": 1});
};
//鼠标离开事件
my$("game_content").onmouseout = function () {
    animate(my$("arr"), {"opacity": 0});
};

