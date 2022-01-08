$(document).ready(function() {
    initReadingBar();
    initFancyBox();
});

function initReadingBar() {
    const $readingBarProgress =  $('#readingbar-progress');
    const $document = $(document);
    const $window = $(window);
    $(window).scroll(() => {
        const scrollPercent = 100 * $window.scrollTop() / ($document.height() - $window.height());
        $readingBarProgress.css('width', scrollPercent + '%');
    });
}

function initFancyBox() {
    let $fancyBoxes = $('.fancybox');
    if ($fancyBoxes.length > 0) {
        $fancyBoxes.fancybox({
            padding: 2,
            closeClick: true,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                thumbs: {
                    width: 75,
                    height: 50,
                    position: 'bottom'
                }
            },
            overlay : {
                closeClick : true
            },
            afterClose: function() {
                $fancyBoxes.each(function() {
                    $(this).find('img').css('visibility', "visible");
                });
            },
            onUpdate: function() {
                for (var i = 0; i < this.group.length; i++) {
                    $(this.group[i].element).find('img').css('visibility', "visible");
                }
                $(this.element[0]).find('img').css('visibility', "hidden");
            }
        });
        $fancyBoxes.click(function() {
            $(this).find('img').css('visibility', "hidden");
        });
    }
    $fancyBoxesMedia = $('.fancybox-media');
    if ($fancyBoxesMedia.length > 0) {
        $fancyBoxesMedia.fancybox({
            padding: 2,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers : {
                media : {}
            }
        });
    }
}