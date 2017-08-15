/**
 * Created by mingxia on 2017/6/12.
 */


// jquery
$(function () {
    //头部区域
    $(".index-head").show(1000);
    $(".smallpic").mouseenter(function () {
        $(".bigtu").show();
    });
    $(".index-head").mouseleave(function () {
        $(".bigtu").hide();
    })
    //logo区域
    setTimeout(function () {
        $(".bg1 .logo").animate({left:35},1000);
        $(".bg1 .top-pic").animate({left:90},1000);
        $(".bg1 .guanwang").animate({right:45},1000)
    },1000);
    //集结
    setTimeout(function () {
        $(".bg1 .jijie").animate({top:90,right:50,opacity:1},1000)
    },500);
   setTimeout(function () {
       $(".bg1 .download").animate({bottom:360,right:126,opacity:1},1000)
   },1000);
    //小鼠标
    var mouseHeight=document.getElementById("mouse").offsetHeight;
    var mousepic=document.getElementById("dbtn").offsetHeight;
    var num=mouseHeight-mousepic;
    setInterval(function () {
        $("#dbtn").animate({top:num,opacity:0},1500,"linear",function () {
            $("#dbtn").css({top:0,opacity:1});
        })
    },1500)
   //二维码线
        var erboxHeight=document.getElementById("erweima").offsetHeight;
        var lineHeight=document.getElementById("line1").offsetHeight;
        var num=erboxHeight-lineHeight;
    setInterval(function () {
        $("#line1").animate({top:num},2000,"linear",function () {
            $("#line1").css({top:0})
        } )
    },2000)
    //进入官网
    $(".guanwang").mouseenter(function () {
        $(this).css("cursor","pointer");
    })
    //视频播放按钮
    $(".btn").mouseenter(function () {
        console.log(1);
        $(this).css("cursor","pointer");
        $(this).click(function () {
            $("audio")[0].play();
            $(".blackBox").fadeIn(600)
            $(".niuyiniu").fadeIn(600)
        })
    })
    $(".cha").on("click",function () {
        $("audio")[0].pause();
        $(".blackBox").fadeOut(500)
        $(this).parent().fadeOut(500);
        return false;

        
    })

    
    
    
    
    

})



