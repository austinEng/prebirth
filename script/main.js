/**
 * Turns off loading screen on load
 */


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

    if(hash=="videos") {
        var videoContent = '<iframe class="visi" id="A5iP_0LOWvo_v" width="100%" src="//www.youtube.com/embed/A5iP_0LOWvo" frameborder="0" allowfullscreen></iframe> \
            <iframe id="XY8cB9Cc1yg_v" width="100%" src="//www.youtube.com/embed/XY8cB9Cc1yg" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1UY_e5PlfS4_v" width="100%" src="//www.youtube.com/embed/1UY_e5PlfS4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="X3hoBCOb6C8_v" width="100%" src="//www.youtube.com/embed/X3hoBCOb6C8" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1U9zygLoBw4_v" width="100%" src="//www.youtube.com/embed/1U9zygLoBw4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="cEKiGw5EIqk_v" width="100%" src="//www.youtube.com/embed/cEKiGw5EIqk" frameborder="0" allowfullscreen></iframe>';
        $('#viewer').html(videoContent);
    }

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

    $('.item img').click(function(event){
        if ($(this).parent().hasClass('noclick')) {
            $(this).parent().removeClass('noclick');
        }
        else {
            $('#image-viewer').modal('show');
        }
    });

    $('.vid_tag').click(function(){
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
        var source=$(this).attr('src');
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
    });

});

$("#gallery_link").click(function(){
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

    var vheight = $('#viewer iframe').width()/1.7777777777;
    $('#viewer iframe').height(vheight);
    $('#viewer').height(vheight);
    $('#viewer-floater').css('margin-bottom',vheight / -2 - 58 / 2);

    if ($(window).width()<=767) {
        $('#crew-title').css('font-size',($(window).width()-50)*100/262);
    } else {
        $('#crew-title').css('font-size',(($(window).height()-50)*200/263/2));
    }

    if ($('#image-viewer').hasClass('in')) {
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
}



function switchPage(state) {
    var newPage = $(document.getElementById(state));
    newPage.css('z-index','500').css('opacity',0).show();

    if(newPage.attr('id')=='gallery') {
        var colWidth= parseInt($('.col-width').css('width'));
        var rowHeight = parseInt($('.col-width').css('height'));
        var mainContainer=$('#gallery_packery');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight
        });
    }

    if(newPage.attr('id')=='videos') {
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
    }

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