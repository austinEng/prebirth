<?php
if(empty($access)) {
    header("location:index.php");
    die();
}
?>
<div id="navbar_background"></div>
<div id="navbar_wrapper">
    <div id="navbar">
        <ul>
            <li id="expand-button"><a style="text-align: left">&#xf03a;</a></li>
            <li><a class="nav_link" id="home_link" href="#home">home</a></li>
            <li><a class="nav_link" id="cast_link" href="#cast">cast</a></li>
            <li><a class="nav_link" id="crew_link" href="#crew">crew</a></li>
            <li><a class="nav_link" id="gallery_link" href="#gallery">gallery</a></li>
            <li><a class="nav_link" id="videos_link" href="#videos">videos</a></li>
            <li><a class="nav_link" id="about_link" href="#about">about</a></li>
        </ul>
    </div>
</div>