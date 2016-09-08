/**
 *
 * @authors fly
 * @email   942093888@qq.com
 * @date    2016-09-09 05:27:52
 * @version 1.0
 */
$(function(){
    var yy = 1;

    // 循环执行hover部分
    $(".t_share a").each(function(index){
        $(this).hover(function(){
            if(index == 0){
                $(this).css({"background":"#E6162D"});
            } else if(index == 1){
                $(this).css({"background":"#0e71b7"});
            } else if(index == 2){
                $(this).css({"background":"#666"});
            }
            // 添加背景区域为圆角
            $(this).css({"border-radius":4});
            // 先停一次
            $(this).find("span").stop();
            // 滚动
            $(this).find("span").animate({"top":-48});
        },function(){
            // 当前a标签
            var _this = $(this);
            // 回来
            _this.find("span").animate({"top":0},function(){
                _this.css({"background":"none"});
            });
        });
    });

    // banner切换效果
    $(".b_btn").find("li").mouseover(function(){
        // 获取自定义属性元素的值
        var num = $(this).attr("num");
        $(this).addClass("b_no").siblings().removeClass("b_no");
        $("#banner").fadeOut(500,function(){
            $(this).css("background","url(images/"+num+".jpg) no-repeat top center").fadeIn(500);
        });
    });

    // 课程左侧切换
    $(".c_pre").click(function(){
        if(!$(".c_all").is(":animated")){
            if(yy == 1){
                return;
            } else{
                $(".c_all").animate({left:"+="+304});
                yy--;
            }
        }
    });

    // 课程右侧切换
    $(".c_next").click(function(){
        if(!$(".c_all").is(":animated")){
            // 课程列表list个数
            var list_len = $("#course_box .c_list").length;
            if(yy == list_len-2){
                return;
            } else {
                $(".c_all").animate({left:"-="+304});
                yy++;
            }
        }
    });
});