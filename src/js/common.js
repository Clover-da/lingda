define(function(){
    return {
        randomNumber: function(min,max){
            return  parseInt(Math.random()*(max-min+1)+min);
        },
        NumberAndAlphabet:function(){
            let first = randomNumber(0,9);
            let third = randomNumber(0,9)
            let second = String.fromCharCode(randomNumber(0,25)+65);
            let fourth = String.fromCharCode(randomNumber(0,25)+65);
            return first + second + third + fourth;
        },
        Cookie:{
            set:function(name,val,expires,path){
            
                var str = name + '=' + val;

                if(expires){
                    str += ';expires=' + expires.toUTCString();
                }

                //同理将path写入
                if(path){
                    str += ';path=' + path;
                }
                //最后将str的值输入到cookie内即写入cookie
                document.cookie = str;
            },

            remove:function(name,path){
                //获取有效期:即创建当前日期即可
                var date = new Date();

                //获取日期,减去有效期(有效期的天数一般为1或者7),然后将其减少后的日期添加到传进去的值
                date.setDate(date.getDate() - 7);

                //将其减少后的日期添加到传进去的值,写入cookie的有效期,通过调用对象内的方法将其写入
                this.set(name,null,date,path);     
            },

            get:function(name){
                //定义空的字符串接收cookie名内的值
                var res = '';

                // 接收目录下的能访问的所有cookie
                var cookies = document.cookie;

                //获取cookie属于字符串,通过split()方法将其变成数组,而获取的字符串以('; ')分号+空格隔开
                cookies = cookies.split('; ');

                //遍历数组,找到name下对应的cookie值,不用forEach的原因是因为兼容原因ES5
                for(var i=0;i<cookies.length;i++){
                    //定义变量获取cookie内的名和值
                    var attr = cookies[i].split('=');

                    //对获取的名进行判断
                    if(attr[0]=== name){
                        res = attr[1];
                        //获取到值后就没必要继续寻找了即跳出
                        break;
                    }
                }
                return res;
            }
        }
    }
})