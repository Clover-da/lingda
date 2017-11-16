;(function($){
    var $nav_dt= $('.all dl dt');console.log($nav_dt);
    $nav_dt.on('mouseover',function(e){
        var tagname = ['dt','h5','p','span','a']
        if(tagname.indexOf(e.target.tagName.toLowerCase())>0){
            $('<div/>').addClass('san_nav').html(function(){
                return `<ul class="clearfix type1">
                            <h5>婴儿奶粉</h5>
                            <li><a href="#">幼儿奶粉</a></li>
                            <li><a href="#">成长奶粉</a></li>
                        </ul>
                        <ul class="clearfix brand1">
                            <h5>品牌</h5>
                            <li><a href="#">新西兰原装</a></li>
                            <li><a href="#">爱他美</a></li>
                            <li><a href="#">牛栏</a></li>
                            <li><a href="#">雅培小安素</a></li>
                            <li><a href="#">惠氏</a></li>
                        </ul>`
            }).appendTo($(this).closest('dt'));
        }
        if($(this).index()>3){
            $('.san_nav').css({
                top:-($(this).index()-3)*78,
            })
        }
    }).on('mouseleave',function(e){
        $('.san_nav').remove();
    })
})(jQuery);