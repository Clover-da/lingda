

(function($){
    //获取页面元素
    var $username = $('#username');
    var $password = $('#pwd');
    var $btn_dl = $('#btn');

    $btn_dl.on('click',function(){
        $.ajax({
            type:'get',
            url:'../api/logIn.php',
            data:{username:$username.val(),password:$password.val()},
            success:function(data){
                if(data == 'ok'){
                    $btn_dl.val('登陆成功');
                }else if(data == 'fail'){
                    $btn_dl.val('用户名或者密码有误');
                }
            }
        })
    })
    $username.on('focus',function(){
        $btn_dl.val('登陆');
    });
    $password.on('focus',function(){
        $btn_dl.val('登陆');
    });
})(jQuery)