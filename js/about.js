/**
 *
 * @authors fly
 * @email   942093888@qq.com
 * @date    2016-09-09 05:18:53
 * @version 1.0
 */

;$(function(){
    var infoWindow;
    var map = new AMap.Map("a_map_con", {
        resizeEnable: true,
        center: [112.876772,28.230178],
        zoom: 13
    });

    //构建信息窗体中显示的内容
    var info = [];
    info.push("<div style=\"padding:0px 0px 0px 4px;\"><b style='font-size:20px;color:red;'>潭州教育科技集团</b>");
    info.push("<span style='font-size:14px;'>潭州教育成立的初衷就是希望每一个想学习的人都能找到适合自己的老师。为了这个目标，我们以付出不亚于任何人的努力，传道、授业、解惑。我们一直兢兢业业奋战在在线教育领域，深耕九年，抵御外来各种诱惑，苦练内功，深入积累，深深扎根于潭州的经营理念，在追求全体小伙伴精神和物质两方面幸福的同时，通过教学激发学员学习的兴趣，唤醒学员的良知，为社会的进步和发展做贡献！</span></div>");
    infoWindow = new AMap.InfoWindow({
        content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
    });
    infoWindow.open(map, map.getCenter());

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
            // 先停一次 再滚动
            $(this).find("span").stop().animate({"top":-48});
        },function(){
            // 当前a标签
            var _this = $(this);
            // 回来
            _this.find("span").animate({"top":0},function(){
                _this.css({"background":"none"});
            });
        });
    });
});