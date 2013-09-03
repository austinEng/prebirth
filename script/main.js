function onLoad() {
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

    sizeElements();

    var colWidth= parseInt($('.col-width').css('width'));
    var rowHeight = parseInt($('.col-width').css('height'));
    var mainContainer=$('#gallery_packery');
    mainContainer.packery({
        columnWidth: colWidth,
        rowHeight: rowHeight
    });
}

function manageNavHighlights(page) {
    $('.nav_link').each(function(){
        $(this).removeClass('active-nav');
    });
    var link = window.location.hash+'_link';
    if (typeof(page)!="undefined") {
        link='#'+page+'_link';
    }
    if (link=="_link") {link="#home_link"}
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
    var mainContainer=$('#gallery_packery');
    mainContainer.packery({
        columnWidth: colWidth,
        rowHeight: rowHeight
    });

    /**
     * makes tiles draggable
     */
    var $itemElems = $( mainContainer.packery('getItemElements') );
    $itemElems.draggable({
        start: function(event, ui) {
            $(this).addClass('noclick');
        }
    });
    mainContainer.packery( 'bindUIDraggableEvents', $itemElems );

    /**
     * If a resizeable handle is clicked, packery is called on mouse move and the position of the clicked element is kept
     */
    /*$('.item').mousedown(function(event){
        if($(event.target).hasClass('ui-resizable-handle')){
            var tile=this;
            $(document).bind('mousemove', tile, function(){
                mainContainer.packery('fit', tile);
            });
        }
    })
        .mouseup(function(){
            $(document).unbind('mousemove');
        })*/
    $('.item img').click(function(event){
        if ($(this).parent().hasClass('noclick')) {
            $(this).parent().removeClass('noclick');
        }
        else {
            /*var par = document.getElementById($(event.target).parent().attr('id'));
            var has = $(this).parent().hasClass('w3');
            $(this).parent().siblings().removeClass('w3');
            if (!has) {
                $(this).parent().addClass('w3');
            } else {
                $(this).parent().removeClass('w3');
            }
            mainContainer.packery('fit', par);*/
            $('#image-viewer').modal('show');
        }
    });

    $('.vid_tag').click(function(){
        //$('#viewer iframe').attr('src', '//www.youtube.com/embed/'+$(this).attr('id'));
        var old = $('#videos .active-side').attr('id')+'_v';
        var thisEl = $(document.getElementById($(this).attr('id')));

        if($(window).width()<=767) {
            var link = 'http://www.youtube.com/watch?v='+thisEl.attr('id');
            console.log(link);
            window.location = link;
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
    });

    $('#image-viewer').modal('hide');

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
        source=$(this).attr('src');
        $('#gallery_pic').attr('src',source);
        manageGalleryButtons();
    });
    $('#gallery-left').click(function() {
        var prev = $(document.getElementById($('#gallery_pic').attr('src'))).prev().attr('id');
        $('#gallery_pic').attr('src',prev);
        manageGalleryButtons();
    });
    $('#gallery-right').click(function() {
        var next = $(document.getElementById($('#gallery_pic').attr('src'))).next().attr('id');
        $('#gallery_pic').attr('src',next);
        manageGalleryButtons();
    });

    $('.accordion-toggle').click(function() {
        /*$('.panel-heading > div > img').removeClass('shifted-down',300);
        if ($(this).hasClass('collapsed')) {
            $(this).parent().siblings('div').children('img').addClass('shifted-down',{duration:300});
        }*/
        $('.panel-heading').css('margin-left','');
        if ($(this).hasClass('collapsed')) {
            $(this).parent().parent().css('margin-left','-60px');
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

});

function manageGalleryButtons() {
    var pic = $('#gallery_pic');
    if (typeof($(document.getElementById(pic.attr('src'))).prev().attr('id'))=="undefined") {
        $('#gallery-left .gallery-arrow').css('display', 'none');
    } else {
        $('#gallery-left .gallery-arrow').css('display', 'table');
    }
    if (typeof($(document.getElementById(pic.attr('src'))).next().attr('id'))=="undefined") {
        $('#gallery-right .gallery-arrow').css('display', 'none');
    } else {
        $('#gallery-right .gallery-arrow').css('display', 'table');
    }
}


/**
 * adjusts gallery pictures
 */
function adjust_gallery_pics() {
    var height=$('#gallery_wrapper').height();
    var gallery_pic=$('#gallery_pic');
    var ratio=gallery_pic.width()/gallery_pic.height();
    gallery_pic.css('height',height)
        .css('width',height*1.5);
    var currentIndex=jQuery.inArray(gallery_pic.attr('src'),image_array);
    var small_height=$('#gallery_wrapper_right').height();
    if (currentIndex > 0) {
        $('#gallery_pic_left').fadeIn()
            .attr('src',image_array[currentIndex-1])
            .css('height',small_height)
            .css('width',small_height*1.5);
    } else {
        $('#gallery_pic_left').fadeOut();
    }
    if (currentIndex < image_array.length-1) {
        $('#gallery_pic_right').fadeIn()
            .attr('src',image_array[currentIndex+1])
            .css('height',small_height)
            .css('width',small_height*1.5);
    } else {
        $('#gallery_pic_right').fadeOut();
    }
}

/**
 * Turns on gallery scrollbar
 */
function galleryScrollbar() {
    $('#scrollbar2').tinyscrollbar({ axis: 'x', wheel: 40});
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
    /*scrollerHeight= parseInt($('div.scrollpanel_wrapper').css('height'))+ parseInt($('div.scrollpanel_wrapper').css('bottom'));
    viewerWidth=1.5*($(window).height()-scrollerHeight-40);
    $('div.viewer_wrapper').css('width',viewerWidth)
        .css('bottom',scrollerHeight+20)
        .css('left', $(window).width()/2-viewerWidth/2);

    $('div.viewer_wrapper_small').css('width',viewerWidth/2)
        .css('height',viewerWidth/3)
        .css('top',viewerWidth/5.333333);

    $('#scrollbar2').tinyscrollbar({ axis: 'x', wheel: 40});
    adjust_gallery_pics();*/

    var vheight = $('#viewer iframe').width()/1.7777777777;
    $('#viewer iframe').height(vheight);
    $('#viewer').height(vheight);
    $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);

    if ($(window).width()<=767) {
        $('#crew-title').css('font-size','');
    } else {
        $('#crew-title').css('font-size',(($(window).height()-50)*200/263/2));
    }
}

/**
 * manages switching of pages
 */
$("a.nav_link").click(function(event){

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
    //$(event.target).removeClass('nav-link-changing');
});

function switchPage(state) {
    var newPage = $(document.getElementById(state));
    newPage.css('z-index','500').css('opacity',0).show();

    var bg = newPage.children('.background');
    if (bg.length > 1) {
        bg = newPage.children('.bg-in');
    }
    bg=bg[0];
    $(bg).css('width','').css('height','');
    var imgRatio = $(bg).width()/$(bg).height();
    sizeBG(imgRatio, $(bg));

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
    });


}

/**
 * turns on scrolling in gallery tab on click
 */
$("#gallery_link").click(function(){
    /*$('#scrollbar2').tinyscrollbar({ axis: 'x', wheel: 40});
    adjust_gallery_pics();*/
    var colWidth= parseInt($('.col-width').css('width'));
    var rowHeight = parseInt($('.col-width').css('height'));
    var mainContainer=$('#gallery_packery');
    mainContainer.packery({
        columnWidth: colWidth,
        rowHeight: rowHeight
    });
});

$("#videos_link").click(function(){
    var vheight = $('#viewer iframe').width()/1.7777777777;
    $('#viewer iframe').height(vheight);
    $('#viewer').height(vheight);
    $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);
});
/**
 * Turns off loading screen on load
 */
$(window).load(function() {
    onLoad();
    $('#loading_wrapper > span').delay(500).fadeOut(500);
    $('#loading_wrapper').delay(800).fadeOut(1000);
});