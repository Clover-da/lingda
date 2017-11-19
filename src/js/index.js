/* 
* @Author: Marte
* @Date:   2017-11-16 10:48:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-19 17:24:44
*/

//首页
require(['config'],function(){
    require(['jquery','pldCarousel','common'],function($,p,com){
        $('#header_pld').load('html/header.html',function(){
            require(['header'],function(){
                $('.header_pld').find('ol').children('li').find('a').on('click',function(e){
                    console.log(e.target);
                    if(e.target.innerHTML == '登陆'){
                        e.target.href = '../html/logIn.html';
                    }
                    if(e.target.innerHTML == '免费注册'){
                        e.target.href = '../html/signIn.html';
                    }
                })

                $('.cart').on('click',function(){
                        location.href = '../html/cart.html';
                })

                //购物车数量
                //获取cookie的数据
                var datalist = com.Cookie.get('datalist');

                if(datalist){
                    datalist = JSON.parse(datalist);
                }
                console.log(datalist);
                $('.num').html(datalist.length);
            });
        });
        $('#footer_pld').load('html/footer.html');

        $('#banner_pld .container').pldCarousel({
            imgs:["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg","img/banner6.jpg","img/banner7.jpg"],
            type:'fade',
            width:1400,
            height:480,
            buttons:false,
        })

        $.ajax({
            type:'get',
            url:'../api/index.php',
            success:function(data){
                var res = JSON.parse(data);
                //为你推荐板块
                var $ul = $('<ul/>').addClass('clearfix');
                var html = $.map(res,function(item){
                    if(item.recom){
                        return `<li>
                                    <a href="#" data-id="${item.id}">
                                        <img src="${item.imgurl}" alt="" />
                                        <div class="details">
                                            <p>${item.details}</p>
                                            <div class="price">
                                                <span>现价：￥<i>${item.price}</i></span><br />
                                                <span>原价：￥<i>${item.outprice}</i></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>`
                    }
                });
                $ul.html(html);
                $('.recommend').append($ul);
                //今日热卖板块
                //板块1
                var $UK = $('<ul/>').addClass('maidian');
                var html1 = $.map(res,function(item){
                    if(item.originplace=='英国' && item.hot == 'ture'){
                        return `<li>
                            <a href="#" class="clearfix" data-id="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <div class="part">
                                    <p>${item.details}</p>
                                    <p><span>¥${item.price}</span><span>¥${item.outprice}</span></p>
                                </div>
                            </a>
                        </li>`
                    }
                })
                $UK.html(html1);
                $('.mold1').append($UK);
                // 板块2
                var $Nz = $('<ul/>').addClass('maidian');
                var html2 = $.map(res,function(item){
                    if(item.originplace=='新西兰' && item.hot == 'ture'){
                        return `<li>
                            <a href="#" class="clearfix" data-id="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <div class="part">
                                    <p>${item.details}</p>
                                    <p><span>¥${item.price}</span><span>¥${item.outprice}</span></p>
                                </div>
                            </a>
                        </li>`
                    }
                })
                $Nz.html(html2);
                $('.mold2').append($Nz);
                // 板块3
                var $Nl = $('<ul/>').addClass('maidian');
                var html3 = $.map(res,function(item){
                    if(item.originplace=='荷兰' && item.hot == 'ture'){
                        return `<li>
                            <a href="#" class="clearfix" data-id="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <div class="part">
                                    <p>${item.details}</p>
                                    <p><span>¥${item.price}</span><span>¥${item.outprice}</span></p>
                                </div>
                            </a>
                        </li>`
                    }
                })
                $Nl.html(html3);
                $('.mold3').append($Nl);
                //品牌尖货
                //板块1
                var $pinpai1 = $('<ul/>').addClass('clearfix');
                var html4 = $.map(res,function(item){
                    if(item.originplace=='德国' && item.type=='幼儿奶粉'){
                        return `<li>
                            <a href="#" data-id="${item.id}">
                                <img src="${item.imgurl}"/>
                                <p>${item.details}</p>
                                <p>￥${item.price}<span>￥${item.outprice}</span> </p>
                            </a>
                        </li>`
                    }
                })
                $pinpai1.html(html4);
                $('.trad1').append($pinpai1);
                //板块2
                var $pinpai2 = $('<ul/>').addClass('clearfix');
                var html5 = $.map(res,function(item){
                    if(item.originplace=='澳洲' && item.type=='幼儿奶粉'){
                        return `<li>
                            <a href="#" data-id="${item.id}">
                                <img src="${item.imgurl}"/>
                                <p>${item.details}</p>
                                <p>￥${item.price}<span>￥${item.outprice}</span> </p>
                            </a>
                        </li>`
                    }
                })
                $pinpai2.html(html5);
                $('.trad2').append($pinpai2);
                //板块3
                var $pinpai3 = $('<ul/>').addClass('clearfix');
                var html6 = $.map(res,function(item){
                    if(item.originplace=='新西兰' && item.type=='成长奶粉'){
                        return `<li>
                            <a href="#" data-id="${item.id}">
                                <img src="${item.imgurl}"/>
                                <p>${item.details}</p>
                                <p>￥${item.price}<span>￥${item.outprice}</span> </p>
                            </a>
                        </li>`
                    }
                })
                $pinpai3.html(html6);
                $('.trad3').append($pinpai3);

                //点击商品进入详情页
                $('#merchandise').find('ul').on('click','a',function(){
                    var id = this.dataset.id;
                    location.href = '../html/details.html?id='+id;
                })
                
            }
        })
    })
})
        

