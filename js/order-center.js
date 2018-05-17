$(function () {
    // 剩余字数
    function residualFigure(txt, residue, max){
        function FXnumber() {
            var content = $(txt).val(),
                len = content.length,
                residual_number = max - len;
            if(residual_number < 0){
                residual_number = 0;
            }
            if(len > max){
                len = max;
            }
            $(txt).siblings().find(residue).text(residual_number);
        }
        $(txt).on("keyup", FXnumber);
        if(typeof $(txt).val() !== 'undefined'){
            FXnumber();
        }
    }
    residualFigure(".evaluate-list .textarea_01", ".num", 200);
    residualFigure(".evaluate-list .textarea_02", ".num", 300);

    // 商品评价
    (function(){
        var starItem = $(".wrap .item");
        // 默认星级
        $(".wrap .light").each(function(){
            var default_star = $(this).attr("star");
            $(this).css("width", default_star*26);
            $(this).parents(".stars").find(".show i").html(default_star);
        });

        // 鼠标移上
        starItem.hover(function(){
            var _index = $(this).index() + 1;
            $(this).parents(".wrap").find(".light").css("width", 26*_index);
        },function(){
            var _light = $(this).parents(".wrap").find(".light"),
                _star = _light.attr("star");
            _light.css("width", _star*26);
        });

        // 点击
        starItem.on("click", function(){
            var _index = $(this).index() + 1;
            $(this).parents(".wrap").find(".light").attr("star", _index);
            $(this).parents(".stars").find(".show i").html(_index);
        });
    })();
});
