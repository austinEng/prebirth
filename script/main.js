/**
 * Turns off loading screen on load
 */


function onLoad(callback) {
    hash=window.location.hash;
    if (hash=="") {
        hash="#home"
    }
    hash=hash.slice(1,hash.length);
    $("div.content").each(function () {
        if (this.id!=hash) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    var bg = '#'+hash+' .background';
    $(bg).each(function(){
        $(this).attr('src',$(this).attr('src').slice(0,-5)+'m.jpg');
    });

    if (hash=="gallery") {
        $('.gallery_thumb').each(function(){
            $(this).attr('src',$(this).attr('data-orig'));
        });
        var colWidth= parseInt($('.col-width').css('width'));
        var rowHeight = parseInt($('.col-width').css('height'));
        var mainContainer=$('.pack');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight,
            stamp: ".stamp"
        });
    }

    /*if(hash=="videos") {
        var videoContent = '<iframe class="visi" id="A5iP_0LOWvo_v" width="100%" src="//www.youtube.com/embed/A5iP_0LOWvo" frameborder="0" allowfullscreen></iframe> \
            <iframe id="XY8cB9Cc1yg_v" width="100%" src="//www.youtube.com/embed/XY8cB9Cc1yg" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1UY_e5PlfS4_v" width="100%" src="//www.youtube.com/embed/1UY_e5PlfS4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="X3hoBCOb6C8_v" width="100%" src="//www.youtube.com/embed/X3hoBCOb6C8" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1U9zygLoBw4_v" width="100%" src="//www.youtube.com/embed/1U9zygLoBw4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="cEKiGw5EIqk_v" width="100%" src="//www.youtube.com/embed/cEKiGw5EIqk" frameborder="0" allowfullscreen></iframe>';
        $('#viewer').html(videoContent);
    }*/

    sizeElements();

    callback();
}

function manageNavHighlights(page) {
    $('.nav_link').each(function(){
        $(this).removeClass('active-nav');
    });
    var link = window.location.hash+'_link';
    if (typeof(page)!="undefined") {
        link='#'+page+'_link';
    }
    if (link=="_link") {link="#a"}
    $(document.getElementById(link.slice(1))).addClass('active-nav');
}

$(document).ready(function() {
    manageNavHighlights();
    /**
     * retrieves column width variable
     */
    var colWidth= parseInt($('.col-width').css('width'));
    var rowHeight = parseInt($('.col-width').css('height'));

    /**
     * initializes packery
     */
    /*var mainContainer=$('.pack');
    mainContainer.packery({
        columnWidth: colWidth,
        rowHeight: rowHeight,
        stamp: ".stamp"
    });*/

    /**
     * makes tiles draggable
     */
    var mainContainer;

    mainContainer=$('#gallery_packery1');
    var $itemElems = $( mainContainer.packery('getItemElements') );
    $itemElems=$itemElems.slice(0);
    $itemElems.draggable({
        start: function(event, ui) {
            $(this).addClass('noclick');
        }
    });
    mainContainer.packery( 'bindUIDraggableEvents', $itemElems );

    mainContainer=$('#gallery_packery2');
    $itemElems = $( mainContainer.packery('getItemElements') );
    $itemElems=$itemElems.slice(0);
    $itemElems.draggable({
        start: function(event, ui) {
            $(this).addClass('noclick');
        }
    });
    mainContainer.packery( 'bindUIDraggableEvents', $itemElems );

    mainContainer=$('#gallery_packery3');
    $itemElems = $( mainContainer.packery('getItemElements') );
    $itemElems=$itemElems.slice(0);
    $itemElems.draggable({
        start: function(event, ui) {
            $(this).addClass('noclick');
        }
    });
    mainContainer.packery( 'bindUIDraggableEvents', $itemElems );

    mainContainer=$('#gallery_packery4');
    $itemElems = $( mainContainer.packery('getItemElements') );
    $itemElems=$itemElems.slice(0);
    $itemElems.draggable({
        start: function(event, ui) {
            $(this).addClass('noclick');
        }
    });
    mainContainer.packery( 'bindUIDraggableEvents', $itemElems );

    $('.item img').click(function(event){
        if ($(this).parent().hasClass('noclick')) {
            $(this).parent().removeClass('noclick');
        }
        else {
            $('#image-viewer').modal('show');
        }
    });

    /*$('.vid_tag').click(function(){
        var old = $('#videos .active-side').attr('id')+'_v';
        var thisEl = $(document.getElementById($(this).attr('id')));

        if ($(window).width()<=767) {
            var link = 'http://www.youtube.com/watch?v='+thisEl.attr('id');
            window.location=link;
        }

        $('.vid_tag').each(function(){
            if($(this).attr('id')!=thisEl) {$(this).addClass('active-side-whiting');}
        });
        thisEl.addClass('active-side-changing');
        $('.vid_tag').each(function(){
            $(this).removeClass('active-side').removeClass('active-side-whiting');
        });
        thisEl.removeClass('active-side-changing');
        thisEl.addClass('active-side');

        var id = $(this).attr('id')+'_v';
        $('.col-hide iframe').each(function(){
            if ($(this).attr('id')==id) {
                $(this).addClass('visi');
            } else {
                $(this).removeClass('visi');
                if ($(this).attr('id')==old) {
                    var src = $(this).attr('src');
                    $(this).attr('src','');
                    $(this).attr('src',src);
                }

            }
        });

    });*/

    $('.gal_tag').click(function() {
        var link = $(this).attr('id').slice(0,-5);
        var offset = $(document.getElementById(link)).offset();
        var gal_wrap=$('#gallery_wrapper');
        var scroll = offset.top+gal_wrap.scrollTop();
        gal_wrap.animate({
            scrollTop: scroll
        });
        if ($(window).width()<768) {
            $('#gallery #sidebar').animate({scrollLeft: $('#gallery #sidebar').scrollLeft()+$(this).offset().left-$(this).width()/2}, 300);
        }
    });

    $('.person_tag').click(function(){
        if (!($(this).hasClass('active-side'))) {
            var thisEl = $(document.getElementById($(this).attr('id')));
            var id = $(this).attr('id')+'_a';
            var bg = $(this).attr('id')+'_bg';
            var nbg = $(document.getElementById(bg));

            $('.person_tag').each(function(){
                if($(this).attr('id')!=thisEl) {$(this).addClass('active-side-whiting');}
            });
            thisEl.addClass('active-side-changing');

            nbg.css('width','').css('height','');
            sizeBG(nbg.width()/nbg.height(),nbg);

            nbg.addClass('new-bg')
                .addClass('bg-in', 500, function() {
                    $('.cast-bg').each(function() {
                        if ($(this).attr('id')!=bg) {
                            $(this).removeClass('bg-in');
                        }
                    });
                    nbg.removeClass('new-bg');

                    $('.person_tag').each(function(){
                        $(this).removeClass('active-side').removeClass('active-side-whiting');
                    });
                    thisEl.removeClass('active-side-changing');
                    thisEl.addClass('active-side');
                });

            $('.actor').each(function(){
                if ($(this).attr('id')==id) {
                    $(this).removeClass('a-fade').addClass('avisi', 400);
                } else {
                    var thing = $(this);
                    $(this).addClass('a-fade', 400, function(){
                        thing.removeClass('avisi', 400);
                    });
                }
            });
        }
        if ($(window).width()<768) {
            $('#cast #sidebar').animate({scrollLeft: $('#cast #sidebar').scrollLeft()+$(this).offset().left-$(this).width()/2}, 300);
        }
    });

    $('#image-viewer').modal('hide')
   .on('shown.bs.modal', function () {
        sizeElements();
    });
    window.onpopstate = function(event) {
        try{
            var state = event.state.state;
            if (state=="") {
                state="home";
            }
            if (state!="gallery") {
                $('#image-viewer').modal('hide');
            }
            switchPage(state);
        } catch(e) {}
    };


    $('img.gallery_thumb').click(function(){
        var source=$(this).attr('src').slice(0,-10)+".jpg";
        $('#gallery_pic').attr('src',source);
        manageGalleryButtons();
    });
    $('#gallery-left').click(function() {
        var gal_pic=$('#gallery_pic');
        var source = gal_pic.attr('src');
        if (source.indexOf("_thumb") == -1) {
            source = source.slice(0,-4)+"_thumb.jpg";
        }
        var prev = $(document.getElementById(source)).prev().attr('id');
        gal_pic.attr('src',prev.slice(0,-10)+".jpg");
        manageGalleryButtons();
    });
    $('#gallery-right').click(function() {
        var gal_pic=$('#gallery_pic');
        var source = gal_pic.attr('src');
        if (source.indexOf("_thumb") == -1) {
            source = source.slice(0,-4)+"_thumb.jpg";
        }
        var next = $(document.getElementById(source)).next().attr('id');
        gal_pic.attr('src',next.slice(0,-10)+".jpg");
        manageGalleryButtons();
    });

    $('#gallery_pic').load(function() {
        sizeImageViewer();
    });

    $('.accordion-toggle').click(function() {
        $('.panel-heading').removeClass('crew-pic-hidden');
        if ($(this).hasClass('collapsed')) {
            $(this).parent().parent().addClass('crew-pic-hidden');
        }
    });

    $('#expand-button').click(function(){
        $('#navbar').toggleClass('navbar-up');
    });

    $(document).bind('click', function (e) {
        $('#navbar').removeClass('navbar-up');
    });

    $('#navbar > ul > li').bind('click', function(e) {
        e.stopPropagation();
    });

    /**
     * manages switching of pages
     */
    $("a.nav_link").click(function(event){
        if (!($(event.target).hasClass('active-nav'))) {
            if ($('.nav-link-changing').length==0) {
                $(event.target).addClass('nav-link-changing');
                $('.nav_link').each(function(){
                    if (!($(this).hasClass('nav-link-changing'))) {
                        $(this).addClass('nav-link-whiting');
                    }
                });

                var keep_id=$(this).attr('id').slice(0,-5);
                if (!(keep_id==window.location.hash.substring(1))) {
                    var win_id = window.location.hash.substring(1);
                    if (win_id=="") {win_id="home"}
                    var stateObj = {"state": win_id};
                    history.replaceState(stateObj, win_id);
                    switchPage(keep_id);
                }
                $('#navbar').removeClass('navbar-up');
            } else {
                event.preventDefault();
            }
        }
    });
});

var scroll = 0;
$('.stamp').each(function(){
    var $this = $(this);
    $.data(this, 'offset', {offset: $this.offset().top});
});
$('#gallery_wrapper').scroll(function(){
    //var dir = scroll - $('#gallery_wrapper').scrollTop();
    scroll = $('#gallery_wrapper').scrollTop();
    $('.stamp').each(function(){
        var orig = $.data(this, 'offset');
        if (orig.offset / $(this).offset().top < 0 || $(this).offset().top==0) {
            /*if (dir <= 0) {
                $('.gal_tag').removeClass('active-side');
                $('#'+$(this).children('span').attr('id')+'_link').addClass('active-side');
            } else {
                $('.gal_tag').removeClass('active-side');
                $('#'+$(this).children('span').attr('id')+'_link').prev().addClass('active-side');
                if ($(this).children('span').attr('id')=='production1') {
                    $('#'+$(this).children('span').attr('id')+'_link').addClass('active-side');
                }
            }*/
            $('.gal_tag').removeClass('active-side');
            $('#'+$(this).children('span').attr('id')+'_link').addClass('active-side');
        }
        var $this = $(this);
        $.data(this, 'offset', {offset: $this.offset().top});
    });
});


$("#gallery_link").click(function(){
    $('.gallery_thumb').each(function(){
        $(this).attr('src',$(this).attr('data-orig'));
    });
    var col=$('.col-width');
    var colWidth= parseInt(col.css('width'));
    var rowHeight = parseInt(col.css('height'));
    var mainContainer=$('.pack');
    mainContainer.packery({
        columnWidth: colWidth,
        rowHeight: rowHeight,
        stamp: ".stamp"
    });
});

/*$("#videos_link").click(function(){
    var vheight = $('#viewer iframe').width()/1.7777777777;
    $('#viewer iframe').height(vheight);
    $('#viewer').height(vheight);
    $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);
});*/

function manageGalleryButtons() {
    var pic = $('#gallery_pic');
    var left = $('#gallery-left .gallery-arrow');
    var right = $('#gallery-right .gallery-arrow');
    if (typeof($(document.getElementById(pic.attr('src').slice(0,-4)+"_thumb.jpg")).prev().attr('id'))=="undefined") {
        left.css('display', 'none');
    } else {
        left.css('display', 'table');
    }
    if (typeof($(document.getElementById(pic.attr('src').slice(0,-4)+"_thumb.jpg")).next().attr('id'))=="undefined") {
        right.css('display', 'none');
    } else {
        right.css('display', 'table');
    }
}

function sizeBG(imgRatio, el) {
    var ratio=$(window).width()/$(window).height();
    if (ratio < imgRatio) {
        var height=$(window).height();
        var width=$(window).height()*imgRatio;
        var marginL=(width-$(window).width())/-2;
        el.css('height',height)
            .css('width',width)
            .css('marginLeft', marginL)
            .css('marginTop', 0);

    } else {
        height=$(window).width()*(1/imgRatio);
        width=$(window).width();
        var marginT = (height-$(window).height())/-2;
        el.css('width',width)
            .css('height',height)
            .css('marginTop', marginT)
            .css('marginLeft', 0);
    }
}

var canBeCalled = true;
function limitedSizeElements(){
    if(!canBeCalled) return;
    sizeElements();
    canBeCalled = false;
    setTimeout(function(){
        canBeCalled = true;
    }, 80);
}


/**
 * Resizes everything
 */
function sizeElements() {
    var ratio=$(window).width()/$(window).height();
    var background=$('.content:visible .background');
    if (background.length > 1) {
        background = $('.content:visible .bg-in');
    }
    background=background[0];
    $(background).css('width','').css('height','');
    var imgRatio = $(background).width()/$(background).height();
    if (ratio < imgRatio) {
        var height=$(window).height();
        var width=$(window).height()*imgRatio;
        var margin= (width-$(window).width())/-2;
        $('img.background').css('height',height)
            .css('width',width)
            .css('marginLeft', margin)
            .css('marginTop', 0);

        var backgroundHeight=$("#main_background").height();
        $('#title_floater').css('height',backgroundHeight/2);
    } else {
        var height=$(window).width()*(1/imgRatio);
        var width=$(window).width();
        var margin = (height-$(window).height())/-2;
        $('img.background').css('width',width)
            .css('height',height)
            .css('marginTop', margin)
            .css('marginLeft', 0);

        var backgroundHeight=$("#main_background").height();
        $('#title_floater').css('height',backgroundHeight/2);
    }

    /*var vheight = $('#viewer iframe').width()/1.7777777777;
    $('#viewer iframe').height(vheight);
    $('#viewer').height(vheight);
    $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);*/

    if ($(window).width()<=767) {
        $('#crew-title').css('font-size',($(window).width()-50)*100/262);
    } else {
        $('#crew-title').css('font-size',(($(window).height()-50)*200/263/2));
    }

    if ($('#image-viewer').hasClass('in')) {
        sizeImageViewer();
    }
}

function sizeImageViewer() {
    var galWrapper = $('#gallery_pic_wrapper');
    var viewerRatio = galWrapper.width()/galWrapper.height();
    var galPic = $('#gallery_pic');
    galPic.css('width','').css('height','');
    var picRatio = galPic.width()/galPic.height();
    if (picRatio > viewerRatio) {
        galPic.css('width', '100%');
        galPic.css('height', galPic.width()/picRatio);
    } else {
        galPic.css('height', '100%');
        galPic.css('width', galPic.height()*picRatio);
    }
}

function switchPage(state) {
    var newPage = $(document.getElementById(state));
    newPage.css('z-index','500').css('opacity',0).show(function() {
        if(newPage.attr('id')=='gallery') {
            var colWidth= parseInt($('.col-width').css('width'));
            var rowHeight = parseInt($('.col-width').css('height'));
            var mainContainer=$('.pack');
            mainContainer.packery({
                columnWidth: colWidth,
                rowHeight: rowHeight,
                stamp: ".stamp"
            });
        }

        /*if(newPage.attr('id')=='videos') {
             var vheight = $('#viewer iframe').width()/1.7777777777;
             $('#viewer iframe').height(vheight);
             $('#viewer').height(vheight);
             $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);
         }

         if(newPage.attr('id')!='videos') {
             $('#viewer iframe').each(function() {
             var src = $(this).attr('src');
             $(this).attr('src','');
             $(this).attr('src',src);
         });
         }*/

        var bg = newPage.children('.background');
        if (bg.length > 1) {
            bg = newPage.children('.bg-in');
        }
        bg=bg[0];
        $(bg).css('width','').css('height','');
        var imgRatio = $(bg).width()/$(bg).height();
        sizeBG(imgRatio, $(bg));

        animateOut(state, function() {
            newPage.fadeTo(500, 1, function() {
                $("div.content").each(function() {
                    id=$(this).attr('id');
                    if (id!=state) {
                        $(this).hide();
                    }
                });
                newPage.css('z-index','');
                manageNavHighlights(state);

                $('.nav_link').each(function(){
                    $(this).removeClass('nav-link-whiting').removeClass('nav-link-changing');
                });
                animateIn(state);
            });
        });
    });
}

function animateOut(state, callback) {
    if (state!='home') {
        $('#title_wrapper').animate({opacity: 0}, 300);
    }
    if (state!='cast') {
        $('.avisi').css('overflow', 'hidden').each(function() {
            var $this = $(this);
            $.data(this, 'css', {height: $this.css('height'), paddingTop: $this.css('paddingTop'), paddingBottom: $this.css('paddingBottom'), bottom: $this.css('bottom')});
            $this.animate({bottom: 160, height: 0, paddingTop: 0, paddingBottom: 0}, 300);
        });
        $('.person_tag').each(function(i) {
            var $item = $(this);
            setTimeout(function() {
                $item.animate({left: -400, opacity: 0}, 300);
            }, 120*i);
        });
    }
    if (state!='crew') {
        $('#accordion').css('overflow','hidden').each(function() {
            var $this = $(this);
            $.data(this, 'css', {height: $this.css('height')});
            $this.animate({height: 0, opacity: 0}, 500);
        });
        $('#crew-title').animate({opacity: 0}, 300);
    }
    if (state!='gallery') {
        $('.gal_tag').each(function(i) {
            var $item = $(this);
            setTimeout(function() {
                $item.animate({left: -400, opacity: 0}, 300);
            }, 120*i);
        });
        $('.stamp').each(function(){
            $(this).animate({opacity: 0}, 300);
        });
        $('.gallery_thumb').each(function(){
            $(this).animate({opacity: 0}, 300);
        });
    }
    if (state!='videos') {
        $('.temp').animate({opacity: 0}, 300);
    }
    callback();
}
function animateIn(state) {
    if (state=='home') {
        $('#title_wrapper').animate({opacity: 1}, 300);
    }
    if (state=='cast') {
        $('.avisi').each(function() {
            var orig = $.data(this, 'css');
            try {
                $(this).animate({bottom: orig.bottom, height: orig.height, paddingTop: orig.paddingTop, paddingBottom: orig.paddingBottom}, 300, function(){
                    $('.avisi').css('overflow', 'auto').css('bottom','').css('height','').css('padding','');
                });
            } catch(e){
                $('.avisi').css('overflow', 'auto').css('bottom','').css('height','').css('padding','');
            }
        });
        $('.person_tag').each(function(i) {
            var $item = $(this);
            setTimeout(function() {
                $item.animate({left: 0, opacity: 1}, 300);
            }, 120*i);
        });
    }
    if (state=='crew') {
        $('#accordion').each(function() {
            var orig = $.data(this, 'css');
            try {
                $(this).animate({height: orig.height, opacity: 1}, 500, function() {
                    $('#accordion').css('overflow','').css('height','');
                });
            } catch(e){
                $('#accordion').css('overflow','').css('height','');
            }
        });
        $('#crew-title').animate({opacity: 1}, 300);
    }
    if (state=='gallery') {
        $('.gal_tag').each(function(i) {
            var $item = $(this);
            setTimeout(function() {
                $item.animate({left: 0, opacity: 1}, 300);
            }, 120*i);
        });
        $('.stamp').each(function(){
            $(this).animate({opacity: 1}, 300);
        });
        $('.gallery_thumb').each(function(){
            $(this).animate({opacity: 1}, 300);
        });
    }
    if (state=='videos') {
        $('.temp').animate({opacity: 1}, 300);
    }
}