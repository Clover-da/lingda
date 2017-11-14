(function(){
    var btn = document.querySelector('#btn');

    var pwd1 = document.querySelector('#pwd1');
    var pwd2 = document.querySelector('#pwd2');
    var div = document.createElement('div');
    div.classList.add('pwdyz');
    div.classList.add('hidden');
    pwd1.onkeydown = function(){
        div.classList.add('hidden');
        if(!/^[^\s]{6,19}$/.test(pwd1.value)){
            div.classList.remove('hidden')
            div.innerHTML = '密码不低于6位以及不包含空格';
            pwd1.parentNode.parentNode.insertBefore(div,pwd1.parentNode.nextElementSibling);
        }
    }
    
    pwd2.onblur = function(){
        if(pwd2.value != pwd1.value){
            div.classList.remove('hidden')
            div.innerHTML = '密码不一致';
            pwd2.parentNode.parentNode.insertBefore(div,pwd2.parentNode.nextElementSibling);
        }
    }
    pwd2.onfocus = function(){
        div.classList.add('hidden');
    }

    var username = document.querySelector('#username');
    var btn1 = document.querySelector('#btn1');
    btn1.onclick = function(){
        var _username = username.value;

        // 创建一个异步请求对象
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                var res = xhr.responseText;

                console.log(res);

                if(res === 'no'){
                    //用户名已经存在
                    var i = document.createElement('i');
                    i.innerHTML = '&times;'
                    i.setAttribute('style','float:right;color:red;');
                    username.parentNode.appendChild(i);
                }else if(res == 'yes'){
                    var i = document.createElement('i');
                    i.innerHTML = '√'
                    i.setAttribute('style','float:right;color:green;');
                    username.parentNode.appendChild(i);
                }
            }
        }

        xhr.open('get','http://localhost:168/api/signIn.php?username=' + _username,true);
        xhr.send();
    }

})();