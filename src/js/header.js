(function($){
    $('.all dl').on('mouseover',function(e){
        
        if(e.target.tagName.toLowerCase() == 'a'){
            $('.san_nav').show();
        }
    })
})(jQuery)