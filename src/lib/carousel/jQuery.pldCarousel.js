;(function($){
    $.fn.pldCarousel = function(options){
        //默认属性
        var defaults = {
            width:810,
            height:320,
            imgs:[],

            ele:'.carousel',

            // 图片切换间隔时间
            duration:3000,

            // 滚动类型
            type:'vertical',//horizontal,fade

            // 自动轮播
            autoPlay:true,

            // 默认索引值
            index:0,

            // 是否显示前后按钮
            buttons:true,

            // 是否显示页码
            page:true,

            // 是否无缝滚动
            wufeng:false
        }
        // this => $('.box')
        // 这里的this为jquery对象（实例）
        return this.each(function(){
            var $self = $(this);
            //覆盖默认参数
            var opt = jQuery.extend({},defaults,options);

            var carousel = {
                //初始化
                init(opt){
                    //获取页面元素
                    // $self = this.ele
                    $self.addClass('carousel').css({
                        width:opt.width,
                        height:opt.height,

                    });

                    this.index = opt.index;
                    this.len = opt.imgs.length;
                    //创建ul
                    var $ul = $('<ul/>');
                    $ul[0].innerHTML = opt.imgs.map(item=>{
                        return `<li><img src="${item}"></li>`
                    }).join('');
                    $self.append($ul);
                    $ul.find('li').css({
                        width:opt.width,
                        height:opt.height,
                    })
                    $ul.find('img').css({
                        position:'absolute',
                        top:0,
                        left:'-250px',
                    })
                    // this.ul = $ul;

                    //判断轮播类型改变样式
                    if(opt.type === 'horizontal'){
                        $self.find('ul').css({width:this.len*opt.width});
                        // this.ul.style.width = this.len*this.opt.width + 'px';
                        // for(let i=0;i<this.len.length;i++){
                            //改变样式
                            $self.find('ul').children('li').css({float:'left'});
                            // this.ul.children[i].style.float = 'left';
                        // }
                    }else if(opt.type === 'fade'){
                        for(let i=0;i<this.len;i++){
                            //改变样式
                            $self.find('ul').children('li').eq(i).css({'position':'absolute','left':0,'top':0})
                            // this.ul.children[i].style.position = 'absolute';
                            // this.ul.children[i].style.left = 0;
                            // this.ul.children[i].style.top = 0;
                            // 隐藏除index外所有图片
                            if(i!==this.index){
                                $self.find('ul').children('li').eq(i).animate({opacity:0});
                                // animate(this.ul.children[i],{opacity:0});
                            }
                        }

                        this.lastIndex = 3;
                    }


                    if(opt.autoPlay){
                        this.start();
                        //鼠标移入移除事件
                        $self.on('mouseenter',function(){
                            this.stop();
                        }.bind(this));
                        $self.on('mouseleave',function(){
                            this.start();
                        }.bind(this)); 
                    }

                    //判断是否存在页码
                    if(opt.page){
                        //创建一个div
                        var $div = $('<div/>');
                        $self.append($div);
                        for(var i=0;i<this.len;i++){
                            var $span = $('<span/>');
                            $span.html(i+1);
                            $self.find('div').append($span);
                        }
                        $self.find('div').children('span').eq(this.index).addClass('active');
                        //页码点击事件
                       $self.find('div').on('click',function(e){
                            if(e.target.tagName.toLowerCase() === 'span'){
                                this.index = e.target.innerHTML -1;
                                this.move()
                            }
                        }.bind(this));
                        this.div = $div;

                    }

                    //判断是否存在前后按钮
                    if(opt.buttons){
                        //创建两个节点
                        var $prev = $('<span/>').html('&lt;').addClass('prev');
                        var $next = $('<span/>').html('&gt;').addClass('next');
                        $self.append($prev);
                        $self.append($next);
                        //按钮点击事件
                        $self.find($prev).on('click ',function(){
                            this.prev();
                        }.bind(this));
                        $self.find($next).on('click ',function(){
                            this.next();
                        }.bind(this));

                    }

                },
                move(){
                    if(this.index>this.len-1){
                        this.index = 0;
                    }else if(this.index<0){
                        this.index = this.len-1;
                    }

                    if(opt.page){
                        this.page();
                    }
                    var target = {};
                    if(opt.type === 'fade'){
                        $self.find('ul').children('li').eq(this.index).animate({opacity:1});
                        $self.find('ul').children('li').eq(this.lastIndex).animate({opacity:0});
                        // animate(this.ul.children[this.index],{opacity:1});
                        // animate(this.ul.children[this.lastIndex],{opacity:0});
                        this.lastIndex = this.index;

                    }else if(opt.type === 'vertical'){
                        target.top = -this.index * opt.height; 
                        $self.find('ul').animate(target);
                    }else if(opt.type === 'horizontal'){
                        target.left = -this.index * opt.width;
                        $self.find('ul').animate(target);
                        
                    }

                },
                start(){
                    this.timer = setInterval(()=>{

                        this.index ++;
                        this.move();
                    },opt.duration);
                },
                stop(){
                    clearInterval(this.timer);
                },
                page(){
                    for(var j=0;j<this.len;j++){
                        $self.find('div').children('span').eq(j).removeClass('active');
                        if(j===this.index){
                           $self.find('div').children('span').eq(j).addClass('active');
                        }
                    }
                },
                next(){
                    this.index ++;
                    this.move();
                },
                prev(){
                    this.index --;
                    this.move();
                }
            }

            carousel.init(opt);
        });  
    }
})(jQuery);