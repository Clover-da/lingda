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
        //创建ul
        $commodity.html($.map(datalist,function(item){
            return `<ul>
                        <li>
                            <div class="checkbox">
                                <input type="checkbox" id="radio"/>
                            </div>
                            <img src="${item.imgurl}" />
                            <span>${item.details}</span>
                        </li>
                        <li>
                            <span class="nowPrice">${item.price}</span><br />
                            <span class="outPrice">${item.outprice}</span>
                        </li>
                        <li>
                            <div class="sl">
                                <i class="jian">-</i>
                                <span>${item.qty}</span>
                                <i class="jia">+</i>
                            </div>
                            
                        </li>
                        <li>
                            <span>${(item.price*1*item.qty*1).toFixed(2)}</span>
                        </li>
                        <li>
                            <span>删除</span>
                        </li>
                    </ul>`
        }));
    })
})