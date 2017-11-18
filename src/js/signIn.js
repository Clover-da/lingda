// (function(){
//     var btn = document.querySelector('#btn');

//     var pwd1 = document.querySelector('#pwd1');
//     var pwd2 = document.querySelector('#pwd2');
//     var div = document.createElement('div');
//     div.classList.add('pwdyz');
//     div.classList.add('hidden');
//     pwd1.onkeydown = function(){
//         div.classList.add('hidden');
//         if(!/^[^\s]{6,19}$/.test(pwd1.value)){
//             div.classList.remove('hidden')
//             div.innerHTML = '密码不低于6位以及不包含空格';
//             pwd1.parentNode.parentNode.insertBefore(div,pwd1.parentNode.nextElementSibling);
//         }
//     }
    
//     pwd2.onblur = function(){
//         if(pwd2.value != pwd1.value){
//             div.classList.remove('hidden')
//             div.innerHTML = '密码不一致';
//             pwd2.parentNode.parentNode.insertBefore(div,pwd2.parentNode.nextElementSibling);
//         }
//     }
//     pwd2.onfocus = function(){
//         div.classList.add('hidden');
//     }

//     var username = document.querySelector('#username');
//     var btn1 = document.querySelector('#btn1');
//     btn1.onclick = function(){
//         var _username = username.value;

//         // 创建一个异步请求对象
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 var res = xhr.responseText;

//                 console.log(res);

//                 if(res === 'no'){
//                     //用户名已经存在
//                     var i = document.createElement('i');
//                     i.innerHTML = '&times;'
//                     i.setAttribute('style','float:right;color:red;');
//                     username.parentNode.appendChild(i);
//                 }else if(res == 'yes'){
//                     var i = document.createElement('i');
//                     i.innerHTML = '√'
//                     i.setAttribute('style','float:right;color:green;');
//                     username.parentNode.appendChild(i);
//                 }
//             }
//         }

//         xhr.open('get','http://localhost:168/api/signIn.php?username=' + _username,true);
//         xhr.send();
//     }

// })();
// 
(function($){
    //获取页面元素
    var $username = $('#username');
    var $btn_yz = $('.p3 #btn1');
    var $pwd1 = $('#pwd1');
    var $btn_zc = $('.p8 #btn');
    var $pwd2 = $('#pwd2');
    var $checkbox = $('.checkbox');

    
    //点击验证用户名是否存在
    $btn_yz.on('click',function(){
        var _username = $username.val();
        //输入手机用户验证手机号符不符合规则
        if(!/^1[3,5,8]\d{9}$/.test(_username)){
            $btn_yz.html('请输入正确的手机号').css({
                color:'red',
                'font-weight':'bold',
            });
        }else{
            $.ajax({
                type:'get',
                url:'http://localhost:168/api/signIn.php',
                data:{username:_username},
                success:function(data){
                    console.log(data);
                    if(data == 'fail'){console.log(666);
                        //用户已经存在
                        $btn_yz.html('&times; &nbsp;用户已经存在').css({
                            color:'red',
                        })
                    }else{

                        $btn_yz.html('√ &nbsp;用户可以使用').css({
                            color:'#58bc58',
                        })
                    }
                }
            })
        }
    })

    //失去焦点时验证密码
    var $div1 = $('<div/>').addClass('pwdyz').addClass('hidden');
    $pwd1.on('blur',function(){
        if(!/^[^\s][\S]{5,19}$/.test($pwd1.val())){
            console.log(66)
            $div1.removeClass('hidden');
            $div1.html('密码不低于6位以及不包含空格');
            $pwd1.parent().after($div1);
        }
    }).on('focus',function(){
        $pwd1.val('');
        $div1.addClass('hidden');
    })
    //验证二次密码
    var $div = $('<div/>').addClass('pwdyz').addClass('hidden');
    $pwd2.on('blur',function(){
        if($pwd2.val() != $pwd1.val()){
            $div.removeClass('hidden');
            $div.html('两次密码不一致');
            $pwd2.parent().after($div);
        }
    }).on('focus',function(){
        $div.addClass('hidden');
    })
    //勾选协议，注册起作用
    
    //点击注册
    $btn_zc.on('click',function(){
        var _username = $username.val();
        var _pwd1 = $pwd1.val();console.log(_username,_pwd1);
        //勾选协议，注册起作用
        if(!$checkbox.prop('checked')){
            $btn_zc.val('勾选协议');
            return;
        }else{
            $btn_zc.val('点击注册');
        }
        $.ajax({
            type:'get',
            url:'http://localhost:168/api/signIn.php',
            data:{username:_username,password:_pwd1},
            success:function(data){
                console.log(data);
                var res = data;
                if(res == 'ok'){
                    $btn_zc.val('注册成功');
                }
            }

        })
    })
})(jQuery)