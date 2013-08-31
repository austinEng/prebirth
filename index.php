<?php
$access = true;
?>
<!DOCTYPE html>
<html>
<head>
<title>Prebirth: The Eternal War</title>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" type="text/css" media="all">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="script/bootstrap.min.js" type="text/javascript"></script>
<script src="script/jquery.tinyscrollbar.min.js" type="text/javascript"></script>
<script src="script/packery.pkgd.min.js" type="text/javascript"></script>

<meta name="viewport" content="width=device-width, user-scalable=false, initial-scale=1;" />

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
        /*$('#gallery_wrapper').append('<img id="gallery_pic" src="' + image_array[0] + '" />');
        $('#gallery_wrapper_left').append('<img id="gallery_pic_left" src="' + '" />');
        $('#gallery_wrapper_right').append('<img id="gallery_pic_right" src="' + image_array[1] + '" />');*/
    </script>
<script src="script/main.js" type="text/javascript"></script>
</body>
</html>