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
<link rel="shortcut icon" href="images/prebirth_favicon.ico" />
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
    <meta name="description" content="The Official Movie Site for Prebirth: The Eternal War - a short film by Josh Jackson and Brian Tang"/>
    <meta name="keywords" content="prebirth, prebirth movie, prebirth film, movie, film, short film, epic, intense, guns, gun, Matthias, Jaclyn, Jackie, guardian angel, angels, demons, spirits, soul, action movie, action, fight, eternal, war, eternal war, martial arts, soldiers, battle, good, evil, warfare, spiritual warfare, gunfire, fire, Saihttam, Darren, Heidi, parents, newborn, baby, unborn, stillborn, miscarriage, life, death, portal, earth, door, military, inception, dark knight, interstellar, film noir, warehouse, spiritual realm, physical realm, realms, destiny, purpose, warrior, fall, failure, fallen world, child, children, killed, murder, murdered, human souls, Matthew Przywara, Karissa Ong, Alex Mendelson, Timmy Chan, Kristen Yu-Um, Josh Jackson, Brian Tang, Faith Liu, Austin Eng, Austin the freaking Genius Eng, Danielle Leung, Marcus Cheung, Justin Tang, wound, wounds, bandage, healing, grenade, machine guns, pistols, filmmakers, filmmaking, Asians, independent, indie, indie film, independent film, high concept, SVD Dargunov, Colt M14, Mossberg M500, FAMAS, AK47, Enfield L85A2, Sig SG552, TEC-9, Sig P228, Walther P99, Glock 17, Colt M1911, heck yea baby guns, movie production, behind the scenes, making of, production, studio, movie studio, music, score, dark, intense, scary, humor, funny, muzzle flares, VFX, spiritual world, spirit world, Christopher Nolan, Chris Nolan, testimony, God, Jesus, Christianity, love, revival, color correction, car crash, car, car accident, reckless, wreck less, pot hole, shaken, Adrien, boy, dies, close, breathe, last breath, tired, game, repeated, over and over, unending, never ending, cycle, never win, tumble, collapse, shoot, glance, pregnant, pregnancy, hospital, car ride, urgent, quick, fast, sweaty, nervous, bad luck, shaking, gut, stomach, honda, driving, drive, speed, speeding, collecting, weapons, weapon, storing, storage, not dead, never die, everlasting, everlasting life, attack, attacking, alive, name, naming child, naming baby, baby names, boy names, girl names, bump, afraid, night, day, demon army, demon, earrings, teaching, hide, hiding, leap, punch, kick, combat, hand to hand, block, side kick, roundhouse, uppercut, trip, deflect, gloves, elbow, fists, fist, choke, chokehold, strangle, forget, pain, hate, anger, suffering, hell, heaven, hell on earth, heaven not so much, bullet hit, bleed, blood, bleeding, direct fire, rescue, save, protect, savior, guarding, help, mission, protection, life saver, last chance, table cloth, bake sale, second chance, victory, success, winning, cookies, chocolate, ALS, cure, watching, overseeing, overwatch">
    <meta name="author" content="Austin Eng"/>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-45537846-1', 'prebirthmovie.com');
    ga('send', 'pageview');

</script>
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