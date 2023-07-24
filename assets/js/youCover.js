window.addEventListener("load", function(){
    var youCover = function(el, attributes){
        const $el         = $(el), data = $el.data();
        const coverUrl    = "https://i3.ytimg.com/vi/%yid%/maxresdefault.jpg";
        const $wrapper    = $("<a href='javascript:void(0);'></a>");
        const $iframe     = $("<iframe />");
        const $cover      = $('<img id="youtube-cover" class="pt-1" style="z-index: 1"/>');

        attributes = $.extend( {}, attributes, data);
        $wrapper.addClass(attributes.wrapperclass);

        $(attributes).each(function(idx, attr){
            for(var key in attr){
                $iframe.attr(key, attr[key]);
            }
        });

        const coverImage  = coverUrl.replace("%yid%", youtube_parser(attributes.src));
        $cover.attr('src', coverImage);
        const $button = $('<img id="youtube-button" src="/assets/images/logo/youtube-button.png"/>');
        $wrapper.append($cover);
        $wrapper.append($button);

        $el.replaceWith($wrapper);
        $wrapper.addClass('loaded');
        
        $wrapper.click(function(){
            var youtubeCover = $('#youtube-cover');    

            $iframe.width = youtubeCover.width();
            $iframe.height = youtubeCover.height();

            $wrapper.parent().append($iframe);
            $wrapper.remove();

        });
       
        return $wrapper;
    };

    function youtube_parser(url){
        var regExp = /.*\/(.*)\?/;
        var match = url.match(regExp);
        return match[1];
    }

    $.fn.youCover = function(attributes) {
        attributes = $.extend( {}, $.fn.youCover.attributes, attributes );
        
        return $(this).each(function(){
            if($(this).hasClass('loaded')) return this;
            return new youCover(this, attributes);
        });
    };
    $("[data-youcover]").youCover();
});