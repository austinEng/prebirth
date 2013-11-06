<?php
if(empty($access)) {
    header("location:index.php");
    die();
}
?>
<div id="gallery" class="content">
    <img id="main_background" class="background" src="images/black_l.jpg" />
    <!--<div class="viewer_wrapper_small" id="gallery_wrapper_left"></div>
    <div class="viewer_wrapper_small" id="gallery_wrapper_right"></div>
    <div class="viewer_wrapper" id="gallery_wrapper"></div>
    <div class="scrollpanel_wrapper">
        <div id="scrollbar2">
            <div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>
            <div class="viewport">
                <div class="overview" id="imageScroll">
                </div>
            </div>
        </div>
    </div>
    <div class="scrollpanel_background"></div>-->

    <div class="row" style="height:100%">
        <div class="col-sm-3" id="sidebar">
            <div class="gal_tag active-side" id="production1_link">
                Production Day 1
            </div>
            <div class="gal_tag" id="production2_link">
                Production Day 2
            </div>
            <div class="gal_tag" id="production3_link">
                Production Day 3
            </div>
        </div>
        <div class="col-sm-9" style="height:100%; padding-left:0;">
            <div id="gallery_wrapper">
                <div class="stamp"><span id="production1">Day 1</span></div>
                <div id="gallery_packery1" class="pack">
                </div>
                <div class="stamp"><span id="production2">Day 2</span></div>
                <div id="gallery_packery2" class="pack">
                </div>
                <div class="stamp"><span id="production3">Day 3</span></div>
                <div id="gallery_packery3" class="pack">
                </div>
                <br><br><br><br><br><br>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="image-viewer">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body" style="height:100%">
                <div class="row" style="height:100%">
                    <div class="col-sm-1" id="gallery-left" style="height:100%">
                        <div class="gallery-arrow"><div>&#xf104;</div></div>
                    </div>
                    <div class="col-sm-10" style="height:100%">
                        <div id="gallery_pic_wrapper">
                            <img id="gallery_pic"/>
                        </div>
                    </div>
                    <div class="col-sm-1" id="gallery-right" style="height:100%">
                        <div class="gallery-arrow"><div>&#xf105;</div></div>
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->