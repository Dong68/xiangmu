/**
 * Created by Stitch on 2017/6/12 0012.
 */

$(function () {

    // 分页导航栏

    // 渐隐渐出效果与移动效果

    $("#top_bar ul li").eq(0).nextAll().on("mouseenter", function () {
        $(this).children().children("em").stop().animate({opacity: 1}, 300).next().stop().animate({left: "20px"}, 300).children().stop().animate({opacity: 1});
    }).on("mouseleave", function () {
        $(this).children().children("em").stop().animate({opacity: ""}, 300).next().stop().animate({left: ""}, 300).children().stop().animate({opacity: ""});
    });

    // 页面主体1

    // 关门动画
    $("#first_page").children().eq(0).delay(500).animate({right: "50%"}, 500).next().delay(500).animate({left: "50%"}, 500, function () {
        $("#first_page .person").fadeIn(700, function () {
            $("#first_page .slogon, .download_part").fadeIn(700);
        });
    });

    // 云花移动动画
    $("#main").on("mousemove", function (e) {
        $(".cloud1").stop().css({
            left: (-34 - e.pageX / $(this).width() * 40) + "px",
            bottom: (268 - e.pageY / $(this).width() * 120) + "px"
        }, 50);
        $(".cloud2").stop().css({
            left: (1596 - e.pageX / $(this).width() * 40) + "px",
            bottom: (600 - e.pageY / $(this).width() * 120) + "px"
        }, "slow");
        $(".flowers_float").css({
            left: (64 - e.pageX / $(this).width() * 60) + "px",
            bottom: (14 + e.pageY / $(this).width() * 140) + "px"
        }, "slow")
    });

    // 播放按钮呼吸动画
    setInterval(function () {
        $(".video_btn em").animate({
            width: "69px",
            height: "69px",
            left: "-2px",
            top: "-3px"
        }, 750, "linear", function () {
            $(this).animate({width: "57px", height: "57px", left: "3px", top: "3px"}, 750, "linear");
        })
    }, 1500);

    // 二维码扫描效果
    setInterval(function () {
        $(".NIE-qrcode .line").animate({top: "100px"}, 2500, "linear", function () {
            $(this).css("top", "0");
        });
    }, 2500);


    // 页面主体2

    // 侧边栏按钮总体
    $(".com_circle_tabs.jq_tabs .circle_tab").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).attr("class") === "circle_tab tab1 active") {
            $(".shijieguan").css({display: "block"}).animate({
                top: 0,
                opacity: 1
            }, 1000).siblings(".thirdpage_container.zhujue, .wutaiju").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
        else if ($(this).attr("class") === "circle_tab tab2 active") {
            $(".thirdpage_container.zhujue").css({display: "block"}).animate({
                top: 0,
                opacity: 1
            }, 1000).siblings(".shijieguan, .wutaiju").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
        else if ($(this).attr("class") === "circle_tab tab3 active") {
            $(".wutaiju").css({display: "block"}).animate({
                top: 0,
                opacity: 1
            }, 1000).siblings(".thirdpage_container.zhujue, .shijieguan").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
    }).on("mouseenter", function () {
        $(this).children().stop().fadeIn(200);
    }).on("mouseleave", function () {
        $(this).children().stop().fadeOut(200);
    });

    // 页面滚动效果
    $(function () {
        var flag = true;
        $(window).scroll(function () {
            if (flag) {
                if ($(window).scrollTop() >= 640) {
                    $(".com_circle_tabs.jq_tabs .circle_tab.tab1").click();
                    $(".com_title.title1").animate({
                        top: 0,
                        opacity: 1
                    }, 1000);
                    flag = false;
                }
            }
        });
    });
    
    // 主角部分切换

    $(".com_tab a").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".js_change.thirdpage_container.zhujue .com_tab .tab1").on("click", function () {
        $(".zj_container").css("display", "block").next().css("display", "none");
    }).next().on("click", function () {
        $(".ss_container").css("display", "block").prev().css("display", "none");
    });
    
    // 主角介绍移入效果
    $(".zj_container .zj_item").on("mouseenter", function () {
        $(this).children(".intro").stop().animate({bottom: 0});
    }).on("mouseleave", function () {
        $(this).children(".intro").stop().animate({bottom: "-100%"});
    });

    // 式神技能移入效果
    $(".shishen_list .skill .skill_item").on("mouseenter", function () {
        $("#ss_tips").css({
            display: "block",
            left: $(this).offset().left - 30 +"px",
            top: "1719px"
        }).children("p").text($(this).children(".tips").text());
    }).on("mouseleave", function () {
        $("#ss_tips").css({display: "none"});
    });

    // 式神轮播图
    $(function () {
        var count = 0;

        // 右箭头
        $(".ss_nav_wrap .next").on("click", function () {
            count++;
            count %= $(".ss_nav").children().length;
            $(".shishen_list").stop().animate({left: -309 * count},1000);
            $(".ss_nav").children().eq(count).addClass("on").siblings().removeClass("on");
        });

        // 左箭头
        $(".ss_nav_wrap .prev").on("click", function () {
            count--;
            if (count == -1) {
                count = $(".ss_nav").children().length - 1;
            };
            $(".shishen_list").stop().animate({left: -309 * count},1000);
            $(".ss_nav").children().eq(count).addClass("on").siblings().removeClass("on");
        });

        // 中间小点
        $(".ss_nav").children().on("mouseenter", function () {
            count = $(this).text() - 1;
            $(".shishen_list").stop().animate({left: -309 * count},1000);
            $(this).addClass("on").siblings().removeClass("on");
        });
    });



    // 页面主体3

    // 侧边栏按钮总体
    $(".com_circle_tabs.ms_tabs .circle_tab").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).attr("class") === "circle_tab tab1 active") {
            $(".jietu").css({display: "block"}).animate({
                top: "215px",
                opacity: 1
            }, 1000).siblings(".yuanhua, .forthpage_container.tongren").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
        else if ($(this).attr("class") === "circle_tab tab2 active") {
            $(".yuanhua").css({display: "block"}).animate({
                top: 0,
                opacity: 1
            }, 1000).siblings(".jietu").css({
                top: "515px",
                opacity: 0,
                display: "none"
            }).siblings(".forthpage_container.tongren").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
        else if ($(this).attr("class") === "circle_tab tab3 active") {
            $(".forthpage_container.tongren").css({display: "block"}).animate({
                top: 0,
                opacity: 1
            }, 1000).siblings(".jietu").css({
                top: "515px",
                opacity: 0,
                display: "none"
            }).siblings(".yuanhua").css({
                top: "300px",
                opacity: 0,
                display: "none"
            });
        }
    }).on("mouseenter", function () {
        $(this).children().stop().fadeIn(200);
    }).on("mouseleave", function () {
        $(this).children().stop().fadeOut(200);
    });

    // 页面滚动事件
    $(function () {
        var flag = true;
        $(window).scroll(function () {
            if (flag) {
                if ($(window).scrollTop() >= 1480) {
                    $(".com_circle_tabs.ms_tabs .circle_tab.tab1").click();
                    $(".com_title.title2").animate({
                        top: 0,
                        opacity: 1
                    }, 1000);
                    flag = false;
                }
            }
        });
    });

    // 截图部分轮播图
    $(function () {
        var count = 0;

        // 右箭头
        $("#forth_page .picScroll_nav .next").on("click", function () {
            count++;
            count %= $("#forth_page .picScroll_nav .pic_btn_container").children().length - 4;
            $("#forth_page .picScroll_nav .pic_btn_container").stop().animate({left: -74 * count},400);
        });

        // 左箭头
        $("#forth_page .picScroll_nav .prev").on("click", function () {
            count--;
            if (count == -1) {
                count = $("#forth_page .picScroll_nav .pic_btn_container").children().length - 5;
            };
            $("#forth_page .picScroll_nav .pic_btn_container").stop().animate({left: -74 * count},400);
        });

    });

    // 按钮点击事件
    $("#forth_page .picScroll_nav .pic_btn").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#forth_page .pic_list .active").css({display: "none", opacity: 0}).removeClass("active");
        $("#forth_page .pic_list").children().eq($(this).index()).addClass("active").css({display: "block"}).animate({opacity: 1}, 400);
    });
    
    // 原画部分轮播图
    $(function () {
        var count = 0;

        // 右箭头
        $("#forth_page .yuanhuaScroll_nav .next").on("click", function () {
            count++;
            count %= $(".yuanhuaScroll_nav .yh_btn_container").children().length - 4;
            $(".yuanhuaScroll_nav .yh_btn_container").stop().animate({left: -74 * count},400);
        });

        // 左箭头
        $("#forth_page .yuanhuaScroll_nav .prev").on("click", function () {
            count--;
            if (count == -1) {
                count = $(".yuanhuaScroll_nav .yh_btn_container").children().length - 5;
            }
            $(".yuanhuaScroll_nav .yh_btn_container").stop().animate({left: -74 * count},400);
        });

    });

    // 按钮点击事件
    $(".yuanhuaScroll_nav .yh_btn").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".yuanhua_wrap .big_pic").attr("src", "images/yuanhua/" + ($(this).index() + 1) + ".png").delay(200).animate({left: 0});
    });

    // 原画移动效果
    $(".yuanhua_container .to_left").on("mouseenter", function () {
        $(".yuanhua_wrap .big_pic").stop().animate({left: 235}, (235 - parseInt($(".yuanhua_wrap .big_pic").css("left"))) * 15,"linear")
    }).on("mouseleave", function () {
        $(".yuanhua_wrap .big_pic").stop();
    })

    $(".yuanhua_container .to_right").on("mouseenter", function () {
        $(".yuanhua_wrap .big_pic").stop().animate({left: -235}, (255 + parseInt($(".yuanhua_wrap .big_pic").css("left"))) * 15,"linear")
    }).on("mouseleave", function () {
        $(".yuanhua_wrap .big_pic").stop();
    })

    // 同人作品页

    // 版面切换
    $(".js_change.forthpage_container.tongren .com_tab .tab2").on("click", function () {
        $(".com_tongren_container.tongren_container").css("display", "block").prev().css("display", "none");
    }).prev().on("click", function () {
        $(".com_tongren_container.tongren_container").prev().css("display", "block").next().css("display", "none");
    });

    // 鼠标移入移出事件
    $(".com_tongren_container .pic_box").on("mouseenter", function () {
        $(this).children(".cover").stop().fadeIn(200);
    }).on("mouseleave", function () {
        $(this).children(".cover").stop().fadeOut(200);
    });

    // 页面固定导航

    // 移入移出事件
    $("#nav_wrap .nav_item").on("mouseenter", function () {
        $(this).children("span").stop().fadeIn(200, "linear");
    }).on("mouseleave", function () {
        if ($(this).attr("class") != "nav_item active") {
            $(this).children("span").stop().fadeOut(200, "linear");
        }
    });

    // 点击事件
    $("#nav_wrap .nav_item").on("click", function () {
        $(this).addClass("active").siblings().children("span").stop().fadeOut(200, "linear", function () {
            $(this).parent().removeClass("active");
        });
    });

    $("#nav_wrap .nav_item").eq(0).on("click", function () {
        $("html, body").animate({scrollTop: 55}, 300);
    })

    $("#nav_wrap .nav_item").eq(2).on("click", function () {
        $("html, body").animate({scrollTop: 967}, 300);
    })

    $("#nav_wrap .nav_item").eq(3).on("click", function () {
        $("html, body").animate({scrollTop: 1858}, 300);
    })

    $("#nav_wrap .nav_item").eq(4).on("click", function () {
        $("html, body").animate({scrollTop: 2749}, 300);
    })

    $("#nav_wrap .nav_item").eq(5).on("click", function () {
        $("html, body").animate({scrollTop: 3640}, 300);
    })

    // 页面滚动事件
    $(function () {
        $("#nav_wrap .nav_item").attr("flag", true);
        $(window).on("scroll", function () {
            if ($(window).scrollTop() >= 3290) {
                if ($("#nav_wrap .nav_item").eq(5).attr("flag")) {
                    $("#nav_wrap .nav_item").eq(5).attr("flag", true).siblings().attr("flag", false);
                    $("#nav_wrap .nav_item.active").removeClass("active").children("span").stop().fadeOut(200, "linear");
                    $("#nav_wrap .nav_item").eq(5).addClass("active").children("span").stop().fadeIn(200, "linear");
                }
            }
            else if ($(window).scrollTop() >= 2399) {
                if ($("#nav_wrap .nav_item").eq(4).attr("flag")) {
                    $("#nav_wrap .nav_item").eq(4).attr("flag", true).siblings().attr("flag", false);
                    $("#nav_wrap .nav_item.active").removeClass("active").children("span").stop().fadeOut(200, "linear");
                    $("#nav_wrap .nav_item").eq(4).addClass("active").children("span").stop().fadeIn(200, "linear");
                }
            }
            else if ($(window).scrollTop() >= 1570) {
                if ($("#nav_wrap .nav_item").eq(3).attr("flag")) {
                    $("#nav_wrap .nav_item").eq(3).attr("flag", true).siblings().attr("flag", false);
                    $("#nav_wrap .nav_item.active").removeClass("active").children("span").stop().fadeOut(200, "linear");
                    $("#nav_wrap .nav_item").eq(3).addClass("active").children("span").stop().fadeIn(200, "linear");
                }
            }
            else if ($(window).scrollTop() >= 616) {
                if ($("#nav_wrap .nav_item").eq(2).attr("flag")) {
                    $("#nav_wrap .nav_item").eq(2).attr("flag", true).siblings().attr("flag", false);
                    $("#nav_wrap .nav_item.active").removeClass("active").children("span").stop().fadeOut(200, "linear");
                    $("#nav_wrap .nav_item").eq(2).addClass("active").children("span").stop().fadeIn(200, "linear");
                }
            }
            else if ($(window).scrollTop() >= 0) {
                if ($("#nav_wrap .nav_item").eq(0).attr("flag")) {
                    $("#nav_wrap .nav_item").eq(0).attr("flag", true).siblings().attr("flag", false);
                    $("#nav_wrap .nav_item.active").removeClass("active").children("span").stop().fadeOut(200, "linear");
                    $("#nav_wrap .nav_item").eq(0).addClass("active").children("span").stop().fadeIn(200, "linear");
                }
            }
        })
    })

    // 二维码显示
    $(function () {
        var flag = true;
        $(window).on("scroll", function (){
            if ($(window).scrollTop() >= 400) {
                if (flag) {
                    flag = false;
                    $(".code_wrap").stop().fadeIn(300);
                }
            }
            else {
                flag = true;
                $(".code_wrap").stop().css({display: "none",opacity: ""});
            }
        });
    })

});