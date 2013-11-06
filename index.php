<?php
$access = true;
?>
<!DOCTYPE html>
<html>
<head>
<title>Prebirth: The Eternal War</title>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all" />
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/style.min.css" />
<link href='http://fonts.googleapis.com/css?family=Titillium+Web:200,400' rel='stylesheet' type='text/css'>
<?php
function isMobile() {
return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
if (isMobile()) {
    //echo '<link rel="stylesheet" type="text/css" href="css/mobile.css" />';
} else {
}
?>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</head>
<body onresize="limitedSizeElements()" unselectable="on">
    <div class="col-width"></div>
    <div id="loading_wrapper">
        <span id="loading_text">entering the spiritual realm...</span>
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
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script src="script/bootstrap.min.js" type="text/javascript"></script>
    <script src="script/jquery.tinyscrollbar.min.js" type="text/javascript"></script>
    <script src="script/packery.pkgd.min.js" type="text/javascript"></script>
    <script>
        <?php
            $imagesDir = 'images/gallery/prod1/';
            $images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

            echo 'var image_array = ' . json_encode($images) . ";\n";
        ?>
        for (image in image_array) {
            var width = parseInt(Math.random()*2+1);
            if (image_array[image].indexOf("_thumb") != -1 ){
                $('#gallery_packery1').append('<div id="' + image_array[image] + '"class="item w' + width + '"><img class="gallery_thumb" src="" data-orig="' + image_array[image] + '" /></div>');
            }
        }
        <?php
            $imagesDir = 'images/gallery/prod2/';
            $images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

            echo 'var image_array = ' . json_encode($images) . ";\n";
        ?>
        for (image in image_array) {
            var width = parseInt(Math.random()*2+1);
            if (image_array[image].indexOf("_thumb") != -1 ){
                $('#gallery_packery2').append('<div id="' + image_array[image] + '"class="item w' + width + '"><img class="gallery_thumb" src="' + image_array[image] + '" /></div>');
            }
        }
        <?php
            $imagesDir = 'images/gallery/prod3/';
            $images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

            echo 'var image_array = ' . json_encode($images) . ";\n";
        ?>
        for (image in image_array) {
            var width = parseInt(Math.random()*2+1);
            if (image_array[image].indexOf("_thumb") != -1 ){
                $('#gallery_packery3').append('<div id="' + image_array[image] + '"class="item w' + width + '"><img class="gallery_thumb" src="' + image_array[image] + '" /></div>');
            }
        }

        var colWidth= parseInt($('.col-width').css('width'));
        var rowHeight = parseInt($('.col-width').css('height'));
        var mainContainer=$('#gallery_packery1');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight,
            stamp: ".stamp"
        });
        mainContainer=$('#gallery_packery2');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight,
            stamp: ".stamp"
        });
        mainContainer=$('#gallery_packery3');
        mainContainer.packery({
            columnWidth: colWidth,
            rowHeight: rowHeight,
            stamp: ".stamp"
        });
    </script>
    <script>
        function fade_loader() {
            $('#loading_wrapper').fadeOut(500, function(){
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
                sizeElements();
            });
            $('.gallery_thumb').each(function(){
                $(this).attr('src',$(this).attr('data-orig'));
            });
        }

        $(window).load(function() {
            onLoad(function() {
                $('#loading_text').delay(100).animate({opacity: 0}, 500, function(){
                    fade_loader();
                });
            });
        });
    </script>
    <script src="script/main.min.js" type="text/javascript"></script>
</body>
</html>