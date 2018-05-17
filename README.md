### 实现商品五星评价功能

https://sunguangqing.github.io/fiveStars/evaluate.html

>直接在页面中插入如下HTML结构，引入CSS代码和JS代码即可

#### `HTML结构：`
```HTML
<div class="stars clearfix">
  <div class="wrap">
      <div class="default">
          <ul class="clearfix">
              <li class="item" title="很不好"></li>
              <li class="item" title="不好"></li>
              <li class="item" title="一般"></li>
              <li class="item" title="好"></li>
              <li class="item" title="很好"></li>
          </ul>
      </div>
      <div class="light" star="4.7"></div>
  </div>
  <span class="show"><i></i>分</span>
</div>
```


### `CSS代码：`
```CSS
/*包裹*/
.wrap{
    float: left;
    position: relative;
    width: 130px;
    height: 19px;
    cursor: pointer;
    margin-top: 6px;
}
/*默认*/
.default{
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 20px;
    background: url("../images/star.png") repeat-x;
}
.default li{
    float: left;
    position: relative;
    z-index: 3;
    width: 26px;
    height: 19px;
}
/*点亮*/
.light{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 0;
    height: 20px;
    background: url("../images/star.png") repeat-x 0 -21px;
}
/*显示评分*/
.show{
    width: 35px;
    color: #f60;
    font-size: 12px;
    margin-left: 15px;
    margin-top: 6px;
}

```

#### `JS代码：`
```Javascript
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
```

图片上传预览请点击这里 [图片上传预览](https://github.com/sunguangqing/imgUpload)


### JS校验输入框还可以输入多少个字

#### `HTML结构：`
```HTML
<div class="surplus-number">
  <textarea class="textarea" maxlength="" placeholder=""></textarea>
  <div class="num-wrap">还可以输入<span class="num">200</span>字</div>
</div>
```

#### `CSS代码： `
```CSS
/*剩余字数*/
.surplus-number{
    position: relative;
}
.surplus-number .num-wrap{
    position: absolute;
    bottom: 18px;
    right: 15px;
    color: #bfbfbf;
}
```
#### `JS代码：`
```Javascript
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
         //更改剩余数字数值
        $(txt).siblings().find(residue).text(residual_number);
    }
    $(txt).on("keyup", FXnumber);
    
    //页面初始化  判断是否需要调用该函数
    if(typeof $(txt).val() !== 'undefined'){
        FXnumber();
    }
}

//调用residualFigure函数
 residualFigure(".surplus-number .textarea", ".num", 200);
```

