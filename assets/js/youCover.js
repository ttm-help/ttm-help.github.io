window.addEventListener("load", function(){

    const $wrapper = $('#video-play');
    if(!$wrapper)
        return;

    $wrapper.click(function(){
        var youtubeCover = $("<iframe />");

        const $iframe = document.createElement("iframe");
        $iframe.width = youtubeCover.width();
        $iframe.height = youtubeCover.height();


        const attributes = $("#video-wrapper").data();
        $(attributes).each(function(idx, attr){
            for(var key in attr){
                $iframe.setAttribute(key, attr[key]);
            }
        });

        $wrapper.parent().append($iframe);
        $wrapper.remove();
    });
});