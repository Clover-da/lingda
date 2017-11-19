;(function($){
    var $nav_dt= $('.all dl dt');
    $nav_dt.on('mouseover',function(e){
        var tagname = ['dt','h5','p','span','a']
        if(tagname.indexOf(e.target.tagName.toLowerCase())>0){
            $('<div/>').addClass('san_nav').html(function(){
                return `<ul class="clearfix type1">
                            <h4>婴儿奶粉</h4>
                            <li><i>幼儿奶粉</i></li>
                            <li><i>成长奶粉</i></li>
                        </ul>
                        <ul class="clearfix brand1">
                            <h4>品牌</h4>
                            <li><i>新西兰原装</i></li>
                            <li><i>爱他美</i></li>
                            <li><i>牛栏</i></li>
                            <li><i>雅培小安素</i></li>
                            <li><i>惠氏</i></li>
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

    //点击二级导航进入列表页
    $('.all dl').on('click','a',function(){
        location.href = '../html/list.html';
    });
    //点击三级导航进入列表页
    $('.all dl').on('click','i',function(){
        location.href = '../html/list.html';
    });

})(jQuery);