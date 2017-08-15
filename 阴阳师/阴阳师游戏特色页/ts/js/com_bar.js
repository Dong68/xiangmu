/**
 * Created by Stitch on 2017/6/17 0017.
 */

$(function () {


    // 新游介绍显示
    $("#NIE-topBar-news").stop().on("mouseenter", function (e) {
        $(this).addClass("NIE-topBar-news-hover");
    }).stop().on("mouseleave", function () {
        $(this).removeClass("NIE-topBar-news-hover");
    })


    // 中部导航导航栏鼠标移出效果
    $("#global_gp_mid a").on("mouseenter", function (e) {
        $(this).css({backgroundColor: "#F3F3F3"})
        e.stopPropagation();
    }).on("mouseleave", function (e) {
        colorAnimate($(this)[0], "backgroundColor", [251, 251, 251], 50);
        e.stopPropagation();
    })


    // 右部导航栏

    // 滚动效果
    setInterval(function () {
        $("#NIE-topBar-right a").animate({top: "-70%", opacity: 0}, 500, "swing", function () {
            $(this).css({top: "70%"}).text(function () {
                if ($(this).text() == "领取网易严选宝箱") {
                    return "安卓充值9.8折"
                }
                else {
                    return "领取网易严选宝箱"
                }
            });
        }).animate({top: "0", opacity: 1}, 500)
    }, 5000)

    // 移入移出效果
    $("#NIE-topBar-right a").on("mouseenter", function () {
        $(this).css({backgroundColor: "#F3F3F3"}).animate({borderBottomWidth: 3}, 500)
    }).on("mouseleave", function () {
        $(this).css("borderBottomWidth", 0);
        colorAnimate($(this)[0], "backgroundColor", [251, 251, 251], 50, function () {
            $("#global_gp_right a").css({backgroundColor: ""})
        })
    })


    // 顶部导航栏菜单栏

    // 移入移出效果
    $("#NIE-topBar-menu").on("mouseenter", function () {
        $(this).addClass("NIE-topBar-menu-hover").children("span").css({backgroundColor: "#F3F3F3"});
        $("#NIE-table").slideDown(400);
    }).on("mouseleave", function () {
        $("#NIE-table").css("display", "none");
        $(this).removeClass("NIE-topBar-menu-hover");
        colorAnimate($(this).children("span")[0], "backgroundColor", [251, 251, 251], 50, function () {
            $("#NIE-topBar-menu span").css({backgroundColor: ""})
        })
    })

    // 更多按钮
    $("#NIE-topBar-more").on("click", function () {
        if ($(this).text() === "更多热门手游") {
            $(this).text(">>");
            $("#NIE-table").addClass("moreAni");
            $("#NIE-topBar-menu .moreAni .NIE-nav .mobi").stop().animate({left: "30px", width: "823px"}, 300);
            $("#NIE-topBar-menu .moreAni .NIE-list .hot").stop().animate({left: "30px"}, 300);
            $("#NIE-topBar-menu .moreAni .NIE-list .news").stop().animate({left: "189px", width: "651px"}, 300);
        }
        else {
            $(this).text("更多热门手游");
            $("#NIE-table").removeClass("moreAni");
            $("#NIE-topBar-menu .NIE-nav .mobi").stop().animate({left: "248px", width: "603px"}, 300);
            $("#NIE-topBar-menu .NIE-list .hot").stop().animate({left: "263px"}, 300);
            $("#NIE-topBar-menu .NIE-list .news").stop().animate({left: "421px", width: "416px"}, 300);
        }
    })

})
