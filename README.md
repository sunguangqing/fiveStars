### 实现商品五星评价功能

https://sunguangqing.github.io/fiveStars/evaluate.html

#### `HTML结构：`
```HTML
<dd class="stars">
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
</dd>
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
