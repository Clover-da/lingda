require(['config'],function(){
    require(['jquery','common'],function($,com){
        $('#footer_pld').load('../html/footer.html');


        //获取页面元素
        var $commodity = $('.commodity');

        //获取cookie的数据
        var datalist = com.Cookie.get('datalist');

        if(datalist){
            datalist = JSON.parse(datalist);
        }
        console.log(datalist);
        scHtml(datalist);
        //创建ul
        function scHtml(datalist){
            $commodity.html($.map(datalist,function(item){
                return `<ul data-id="${item.id}">
                            <li>
                                <div class="checkbox">
                                    <input type="checkbox" class="radio"/>
                                </div>
                                <img src="${item.imgurl}" />
                                <span>${item.details}</span>
                            </li>
                            <li>
                                <i>￥</i><span class="nowPrice">${item.price}</span><br />
                                <i>￥</i><span class="outPrice">${item.outprice}</span>
                            </li>
                            <li>
                                <div class="sl">
                                    <i class="jian">-</i>
                                    <span class="qty_sp">${item.qty}</span>
                                    <i class="jia">+</i>
                                </div>
                                
                            </li>
                            <li>
                                <i>￥</i><span class="xj_sp">${(item.price*1*item.qty*1).toFixed(2)}</span>
                            </li>
                            <li>
                                <span class="shanc">删除</span>
                            </li>
                        </ul>`
            }));
        }


        //点击修改数量
        var $sl_btn = $('.sl');
        $sl_btn.on('click','i',function(){
            var id_sp = $(this).closest('ul').attr('data-id');
            var price_sp = $(this).closest('ul').find('.nowPrice').html()*1;
            if($(this).html() == '+'){
                $(this).siblings('span').html($(this).siblings('span').html()*1+1);
                //修改每件商品的小计
                $(this).closest('ul').find('.xj_sp').html(($(this).siblings('span').html()*1*price_sp).toFixed(2));
            }
            if($(this).html() == '-'){
                $(this).siblings('span').html($(this).siblings('span').html()*1-1);
                if($(this).siblings('span').html()<=1){
                    $(this).siblings('span').html(1);
                }
                $(this).closest('ul').find('.xj_sp').html(($(this).siblings('span').html()*1*price_sp).toFixed(2));
            }

            //修改的数量写入cookie
            var currentIdx;
            var res = datalist.some(function(goods,idx){
                currentIdx = idx;
                return goods.id == id_sp;
            });
            if(res){
                // 如果商品已经存在
                datalist[currentIdx].qty = $(this).siblings('span').html();
            }

            com.Cookie.set('datalist',JSON.stringify(datalist));

            //改变总额和总量
            total();
        })


        //点击删除商品
        var $sc_btn = $('.shanc');
        $sc_btn.on('click',function(){
            var id_sp = $(this).closest('ul').attr('data-id');
            var $curul = $(this).closest('ul');
            console.log($curul);
            $curul.remove();

            //修改的商品重新写入cookie
            var currentIdx;
            var res = datalist.some(function(goods,idx){
                currentIdx = idx;
                return goods.id == id_sp;
            });
            
            if(res){
                datalist.splice(currentIdx,1);
            }

            com.Cookie.set('datalist',JSON.stringify(datalist));

        });

        var $all_radio = $('.all_radio');
        var $radio = $('.radio');
        //总额和总数量
        var $total = $('.total_qsp');
        var $gross = $('.sl_qsp');

        total();
        //获取总额和总量，并写入相应位置
        function total(){
            var gro = 0;
            var tot = 0;
            for(var i=0;i<$radio.length;i++){
                if($radio.eq(i).prop('checked')){
                    gro += $radio.eq(i).closest('ul').find('.qty_sp').html()*1;
                    tot += $radio.eq(i).closest('ul').find('.xj_sp').html()*1;
                }
            }
            console.log(gro,tot)
            $total.html((tot).toFixed(2));
            $gross.html(gro);
        }

        //点击全选
        console.log($radio);
        $all_radio.on('click',function(){
            if($(this).prop('checked')){
                $all_radio.prop('checked',$(this).prop('checked'));
                $radio.prop('checked',$(this).prop('checked'));
                //全选加上样式
                $all_radio.parent().addClass('checked');
                //商品单个选框加样式
                $radio.parent().addClass('checked');

                

            }else{
                $all_radio.prop('checked',$(this).prop('checked'));
                $radio.prop('checked',$(this).prop('checked'));
                $all_radio.parent().removeClass('checked');
                $radio.parent().removeClass('checked');
            }

            //改变总额和总量
            total();
        })
        $all_radio.prop('checked',true);

        //选择单个商品，取消全选
        for(var i=0;i<$radio.length;i++){
            $radio.eq(i).on('click',function(){
                if($(this).prop('checked')){
                    $(this).parent().addClass('checked');
                }else{
                    $(this).parent().removeClass('checked');
                }
                //改变总额和总量
                total();
                //所有商品选择，就全选
                $all_radio.prop('checked',isCheckAll());
                if($all_radio.prop('checked')){
                    //全选加上样式
                    $all_radio.parent().addClass('checked'); 
                }else{
                    $all_radio.parent().removeClass('checked');
                }
            })
            
        }

        // 封装#all勾选状态函数          
        // * 如果所有的商品勾选，则#all勾选            
        // * 只有有一个商品未勾选，则#all取消勾选
        function isCheckAll(){
            // 假设商品全部勾选
            var res = true;
            for(var i=0;i<$radio.length;i++){
                if(!$radio.eq(i).prop('checked')){
                    res = false;
                    break;
                }
            }
            return res;
        }
            
    })
})

