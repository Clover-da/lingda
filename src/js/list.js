/* 
* @Author: Marte
* @Date:   2017-11-17 09:37:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 19:02:48
*/

require(['config'],function(){
    require(['jquery'],function($){
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
            });
        });
        $('#footer_pld').load('footer.html');
        

        var $goods = $('.goods');
        var $fenye = $('.fenye');
        var $shaixuan = $('.sx_list');
        var $type = $('.type');
        var $brand = $('.brand');
        var $place = $('.place');


        var pageNo = 1;
        var qty = 16;

        $.ajax({
            type:'get',
            url:'http://localhost:168/api/list.php',
            data:{pageNo:pageNo,qty:qty},
            success:function(data){
                var res = JSON.parse(data);
                data_cl(res);
            }
        })

        var obj = {pageNo:pageNo,qty:qty};
        
        


        //筛选
        $shaixuan.on('click',function(e){
            var target = e.target;

            if(target.tagName.toLowerCase() === "i"){
                //点击选择奶粉类型
                if(target.parentNode.className == 'type'){
                    for(var i=0;i<$type.children('i').length;i++){
                        $type.children('i').eq(i).removeClass('dianji');
                    }
                    target.className = 'dianji';
                    obj = Object.assign({},obj,{pageNo:1,qty:16,type:target.innerText});
                }
                //点击选择品牌
                if(target.parentNode.className == 'brand'){
                    for(var i=0;i<$brand.children('i').length;i++){
                        $brand.children('i').eq(i).removeClass('dianji');
                    }
                    target.className = 'dianji';
                    obj = Object.assign({},obj,{pageNo:1,qty:16,brand:target.innerText});
                }
                //点击选择产地
                if(target.parentNode.className == 'place'){
                    for(var i=0;i<$place.children('i').length;i++){
                        $place.children('i').eq(i).removeClass('dianji');
                    }
                    target.className = 'dianji';
                    obj = Object.assign({},obj,{pageNo:1,qty:16,place:target.innerText});
                }

                $.ajax({
                    type:'get',
                    url:'http://localhost:168/api/list.php',
                    data:obj,
                    success:function(data){
                        var res = JSON.parse(data);
                        data_cl(res);
                    }
                })

            }
        });

        //数据处理
        function data_cl(res){
            //商品数据加载
            var $goodsul = $('<ul/>').addClass('clearfix');
            var html1 = $.map(res.data,function(item){
                return `<li>
                    <a href="#" data-id="${item.id}">
                        <img src="../${item.imgurl}" alt="" />
                        <p><span>￥${item.price}</span><span>￥${item.outprice}</span></p>
                        <p>${item.details}</p>
                    </a>
                </li>`
            });
            $goodsul.html(html1);
            $goods.html('');
            $goods.append($goodsul);
            //分页
            var page_len = Math.ceil(res.total/obj.qty);
            $ul_page = $('<ul/>');
            for(var i=0;i<page_len;i++){
                $li_page = $('<li/>').html(i+1);
                if(i+1 === obj.pageNo){
                    $li_page.addClass('active_d');
                }
                $ul_page.append($li_page);
            }
            $fenye.html('');
            $fenye.append($ul_page);

            

            //分页切换
            $fenye.find('ul').on('click',function(e){
                if(e.target.tagName.toLowerCase() === 'li'){
                    pageNo1 = e.target.innerHTML*1;
                    obj = Object.assign({},obj,{pageNo:pageNo1})
                    $.ajax({
                        type:'get',
                        url:'http://localhost:168/api/list.php',
                        data:obj,
                        success:function(data){
                            var res = JSON.parse(data);
                            data_cl(res);
                        }
                    })
                }
            }); 
        }


    })
})