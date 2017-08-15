/**
 * Created by 41737 on 2017/6/13.
 */
$(function () {
    var wenzi=$(".lyb-in").height();
    var keshuqu=$(".liu-yan-ban").height();
    var gundongtiaofuhezi=$(".dundongtiao").height();
    var gundongtiaoHeight=keshuqu*gundongtiaofuhezi/wenzi;
    $(".dundongtiao").on("mousedown",function (e) {
        var x=e.pageY-$(this).position().top;
        $(document).on("mousemove",function (e) {
            var Topval=e.pageY-x;
            Topval=Topval<0?0:Topval;
            Topval=Topval>gundongtiaofuhezi-gundongtiaoHeight?gundongtiaofuhezi-gundongtiaoHeight:Topval;
            var wenziTopval="";
            $(".dundongtiao").css("top",Topval);
            $(".lyb-in").css("top",-wenziTopval)
        })
    });
    $(document).on("mouseup",function () {
        $(document).off("mousemove");
    })
});