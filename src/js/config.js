/*
    requirejs配置
 */
require.config({
    // baseUrl:'js'
    paths:{
        jquery:'../lib/JQ/jquery-3.2.1',
        // jqueryUI:'../lib/jquery-ui-1.12.1/jquery-ui'
        pldCarousel:'../lib/carousel/jQuery.pldCarousel',
        header:'header',
        zoom:'../lib/jquery-EdZoom/jquery-EdZoom'
    },
    shim:{
        pldCarousel:['jquery'],
        header:['jquery'],
        zoom:['jquery']
    }
});