require(['config'],function(){
    require(['jquery','zoom'],function($){
        //加载头尾部
        $('#header_pld').load('header.html',function(){
            require(['header'],function(){
                //二级菜单隐藏
                $('.all dl').css({
                    'background-color':'#fff',
                }).hide();
                $('.all').on('mouseover',function(){
                    $('.all dl').show();
                }).on('mouseleave',function(){
                    setTimeout(function(){
                        $('.all dl').hide();
                    },500)   
                })

                fly($('.cart'),$('.num'));
            });
        });
        $('#footer_pld').load('footer.html');
        
        //对评论区进行操作
        //获取页面元素
        var $discuss = $('.pl_b');
        var $dis_btn = $('.pl_t');
        //初始化
        $dis_btn.find('li').eq(0).addClass('active_dj');
        $discuss.children('div').eq(0).addClass('show');
        $discuss.css({
            height:$discuss.children('div').eq(0).height()+10,
        });
        //点击切换
        $dis_btn.find('ul').on('click','li',function(e){
            $dis_btn.find('li').removeClass('active_dj');
            $discuss.children('div').removeClass('show');
            if(e.target.tagName.toLowerCase() === 'li'){
                $(e.target).addClass('active_dj');
                $discuss.children('div').eq($(e.target).index()).addClass('show');
                $discuss.css({
                    height:$discuss.children('div').eq($(e.target).index()).height()+10,
                });
            }
        })
        
        //放大镜
        console.log($('.xx_l'));
        $('.xx_l').EdZoom({
            height:400,
            width:400,
            multiple:5,
        })

        //规格选择
        var $spec = $('.xx_r').find('ul');
        //套餐选择
        $spec.eq(0).on('click','span',function(e){
            $spec.eq(0).find('span').removeClass('active').find('i').css({
                display:'none',
            });
            $(e.target).addClass('active').find('i').css({
                display:'block',
            });
        })
        //样式选择
        $spec.eq(1).on('click','img',function(e){
            $spec.eq(1).find('span').removeClass('active').find('i').css({
                display:'none',
            });
            $(e.target).parent('span').addClass('active').find('i').css({
                display:'block',
            });
        })
        //点击数量
        var $shul = $('.sl_tj');
        $shul.on('click','i',function(e){
            if(e.target.innerHTML == '-'){
                $(e.target).siblings('span').html($(e.target).siblings('span').html()*1-1);
                if($(e.target).siblings('span').html()<=1){
                    $(e.target).siblings('span').html(1);
                }
            }
            if(e.target.innerHTML == '+'){
                $(e.target).siblings('span').html($(e.target).siblings('span').html()*1+1);
            }
            e.preventDefault();
        })

        //飞入购物车
        function fly(e1,e2){
            var $fly_btn = $('.fly_gwc');
            var $cart = e1;
            var $num = e2;

            $fly_btn.on('click',function(){
                //获取图片,复制图片,放在原来的图片的上面改变left和top值
                var $img = $('.xx_l').children('img');
                var $copy = $img.clone();
                //写入到原来的地方
                $('.xx_l').append($copy);
                $copy.css({
                    position:'absolute',
                    left:0,
                    top:0,
                })

                console.log($cart);
                // 获取需要飞到的目标值
                $copy.animate({
                    left:$cart.offset().left-150,
                    top:-($('.xx_l').offset().top-$cart.offset().top-$cart.height()),
                    width:20,
                    height:20,
                },function(){
                    $copy.remove();
                })
            })
        }

        //接受传来的参数
        
    })
})

