<?php
$access = true;
?>
<!DOCTYPE html>
<html>
<head>
<title>Prebirth: The Eternal War</title>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all" />
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<?php
function isMobile() {
return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
if (isMobile()) {
    //echo '<link rel="stylesheet" type="text/css" href="css/mobile.css" />';
} else {
}
?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="script/bootstrap.min.js" type="text/javascript"></script>
<script src="script/jquery.tinyscrollbar.min.js" type="text/javascript"></script>
<script src="script/packery.pkgd.min.js" type="text/javascript"></script>

<script>
    $(window).load(function() {
        onLoad();
        $('#loading_wrapper > span').delay(100).fadeOut(500);
        $('#loading_wrapper').delay(400).fadeOut(1000, function(){
            var mobile=<?php
                if (isMobile()) {
                    echo 'true';
                } else {
                    echo 'false';
                }
            ?>;
            if (!(mobile)) {
                $('.background').each(function() {
                    var src = $(this).attr('src').slice(0,-5);
                    $(this).attr('src',src+'m.jpg');
                    /*$(this).load(function(){
                     $(this).attr('src',src.slice(0,-1)+'.jpg');
                     })*/
                });
            }

            var videoContent = '<iframe class="visi" id="A5iP_0LOWvo_v" width="100%" src="//www.youtube.com/embed/A5iP_0LOWvo" frameborder="0" allowfullscreen></iframe> \
            <iframe id="XY8cB9Cc1yg_v" width="100%" src="//www.youtube.com/embed/XY8cB9Cc1yg" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1UY_e5PlfS4_v" width="100%" src="//www.youtube.com/embed/1UY_e5PlfS4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="X3hoBCOb6C8_v" width="100%" src="//www.youtube.com/embed/X3hoBCOb6C8" frameborder="0" allowfullscreen></iframe> \
            <iframe id="1U9zygLoBw4_v" width="100%" src="//www.youtube.com/embed/1U9zygLoBw4" frameborder="0" allowfullscreen></iframe> \
            <iframe id="cEKiGw5EIqk_v" width="100%" src="//www.youtube.com/embed/cEKiGw5EIqk" frameborder="0" allowfullscreen></iframe>';
            //$('#viewer').html(videoContent);
            sizeElements();
        });
    });
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>



</head>
<body onresize="sizeElements()" unselectable="on">
    <div class="col-width"></div>
    <div id="loading_wrapper">
        <span>entering the spiritual realm...</span>
    </div>
    <?php
    include 'about.php';
    include 'gallery.php';
    include 'videos.php';
    include 'cast.php';
    include 'crew.php';
    include 'home.php';
    include 'navbar.php';
    ?>
    <script>
        <?php
            $imagesDir = 'images/gallery/thumb/';
            $images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

            echo 'var image_array = ' . json_encode($images) . ";\n";
        ?>
        for (image in image_array) {
            var width = parseInt(Math.random()*2+1);
            $('#gallery_packery').append('<div id="' + image_array[image] + '"class="item w' + width + '"><img class="gallery_thumb" src="' + image_array[image] + '" /></div>');
        }

        var colWidth= parseInt($('.col-width').css('width'));
        var rowHeight = parseInt($('.col-width').css('height'));
        var mainContainer=$('#gallery_packery');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight
        });
    </script>
<script src="script/main.js" type="text/javascript"></script>
</body>
</html>