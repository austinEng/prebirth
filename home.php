<?php
    if(empty($access)) {
        header("location:index.php");
        die();
    }
?>
<div id="home" class="content">
    <img id="main_background" class="background" src="images/prebirthHome_l.jpg" />
    <div id="title_floater"></div>
    <div id="title_wrapper">
        <a id="home_link_lg" href="#home">
            <div id="title_glow"></div>
            <div id="title">PREBIRTH</div>
            <div id="subtitle">The Eternal War</div>
        </a>
        <br />
        <div id="comingsoon">Coming Soon</div>
    </div>
</div>