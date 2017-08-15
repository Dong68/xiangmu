/**
 * Created by yangbin on 2017/6/15.
 */
$(function(){
    // 左侧切换的整体部分
    $(".side-tab").on("click", function(){
       $(this).addClass("current").siblings().removeClass("current");
    });
    // 声优左侧切换
    $(".side-tabs.cv-tab .side-tab").on("click", function(){
       $(".shengyou").children().removeClass("display-block");
       var index = $(this).index();
       for(var i = 1; i <= 3; i++) {
           if(i != (index+1)) {
               $(".shengyou").children().eq(i).css({opacity:0,top:407});
           }
       }
       $(".shengyou").children().eq(index+1).addClass("display-block").animate({opacity:1,top:207},1000);
    });
    // 玩法左侧切换
    $(".side-tabs.wanfa-tab .side-tab").on("click", function(){
        $(".wanfa").children().removeClass("display-block");
        var index = $(this).index();
        for(var i = 1; i <= 3; i++) {
            if(i != (index+1)) {
                $(".wanfa").children().eq(i).css({opacity:0,top:407});
            }
        }
        $(".wanfa").children().eq(index+1).addClass("display-block").animate({opacity:1,top:207},1000);
    });
    // 声优1部分主角与式神的切换
    $(".shengyou-1 .com-tab").children().on("click",function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".shengyou-1").children().eq($(this).index()+1).removeClass("display-none").siblings().addClass("display-none");
        $(".shengyou-1").children().eq(0).removeClass("display-none");
    });
    // 声优部分音效
    (function(){
        var allAudioBtn = $(".shengyou .play-audio-btn");
        allAudioBtn.on("click", function(){

            if($(this).hasClass("pause")) {
                allAudioBtn.removeClass("pause");
            }
            else {
                allAudioBtn.removeClass("pause");
                $(this).addClass("pause");
            }
        });
    })();

    // 声优1部分轮播图
    (function(){
        var navCount = 0;
        var navWidth = -309;
        // 左箭头
        $(".shengyou-1 .prev").on("click", function(){
            navCount--;
            if(navCount == -1) {
                navCount = 2;
            }
            $(".shishen-list").stop().animate({left:navCount*navWidth});
            $(".shengyou-1 .cv-nav").children().eq(navCount).addClass("on").siblings().removeClass("on");
        });
        // 右箭头
        $(".shengyou-1 .next").on("click", function(){
            navCount++;
            if(navCount == 3) {
                navCount = 0;
            }
            $(".shishen-list").stop().animate({left:navCount*navWidth});
            $(".shengyou-1 .cv-nav").children().eq(navCount).addClass("on").siblings().removeClass("on");
        });
        // 圆点
        $(".shengyou-1 .cv-nav").children().on("click", function(){
           $(this).addClass("on").siblings().removeClass("on");
           navCount = $(this).index();
           $(".shishen-list").stop().animate({left:navCount*navWidth});
        });
    })();

    // 玩法第一个特色玩法部分
    $(".special-btns").children().on("click", function(){
       $(".special-btns").children().removeClass("current");
       $(this).addClass("current");
    });
    $(".special-btns .left-btn1").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/dm.jpg");
        $(".wanfa-1 .pic-container p").text("看剧情发弹幕，营造二次元观影体验");
    });
    $(".special-btns .left-btn2").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/bgyx.jpg");
        $(".wanfa-1 .pic-container p").text("还原百鬼夜行，撒福豆趣味捉鬼，眼力加手力的终极考验");
    });
    $(".special-btns .left-btn3").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/LBS.jpg");
        $(".wanfa-1 .pic-container p").text("引入真实地理定位，建造近在咫尺的结界和家族神社");
    });
    $(".special-btns .right-btn1").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/dj.jpg");
        $(".wanfa-1 .pic-container p").text("经典PVP系统，玩家与玩家的阴阳术斗法");
    });
    $(".special-btns .right-btn2").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/sssj.jpg");
        $(".wanfa-1 .pic-container p").text("收集攒齐百种式神，精心培育顶级卡牌");
    });
    $(".special-btns .right-btn3").click(function(){
        $(".wanfa-1 .big-pic").attr("src", "images/ssfb.jpg");
        $(".wanfa-1 .pic-container p").text("不同主题多个副本，惊喜奖励掉不停");
    });

    // 页面滚动事件
    (function(){
        var shengyouFlag = true;
        var wanfaFlag = true;
        $(window).on("scroll", function(){
            if($(window).scrollTop() >= 2000 && shengyouFlag) {
                $(".shengyou").children().eq(1).animate({opacity:1,top:207}, 1000);
                $(".shengyou .shengyou-title h3").animate({opacity:1,top:0}, 800);
                shengyouFlag = false;
            }
            if($(window).scrollTop() >= 2900 && wanfaFlag) {
                $(".wanfa").children().eq(1).animate({opacity:1,top:207}, 1000);
                $(".wanfa .wanfa-title h3").animate({opacity:1,top:0}, 800);
                shengyouFlag = false;
            }
        });
    })();

});