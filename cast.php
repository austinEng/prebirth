<?php
if(empty($access)) {
    header("location:index.php");
    die();
}
?>
<div id="cast" class="content">
    <img id="karissa_bg" class="cast-bg background bg-in" src="images/cast/jaclyn.jpg" />
    <img id="matt_bg" class="cast-bg background" src="images/cast/matthias.jpg" />
    <img id="alex_bg" class="cast-bg background" src="images/cast/saihttam.jpg" />
    <div class="row" style="height:100%">
        <div class="col-sm-3" id="sidebar">
            <div class="person_tag active-side" id="karissa">
                Karissa Ong
            </div>
            <div class="person_tag" id="matt">
                Matthew Przywara
            </div>
            <div class="person_tag" id="alex">
                Alex Mendelson
            </div>
        </div>
        <div class="col-sm-9" style="height:100%">
            <div class="actor avisi" id="karissa_a">
                <div class="row">
                    <div class="col-sm-3" style="text-align: center">
                        <img src="images/cast/karissaOng.jpg" style="width:100%"/>
                    </div>
                    <div class="col-sm-9 bio">
                        I am creeping on facebook.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                    </div>
                </div>
            </div>
            <div class="actor" id="matt_a">
                <div class="row">
                    <div class="col-sm-3" style="text-align: center">
                        <img src="images/cast/matthewPrzywara.jpg" style="width:100%"/>
                    </div>
                    <div class="col-sm-9 bio">
                        This is fantastic picture.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                    </div>
                </div>
            </div>
            <div class="actor" id="alex_a">
                <div class="row">
                    <div class="col-sm-3" style="text-align: center">
                        <img src="images/cast/alexMendelson.jpg" style="width:100%"/>
                    </div>
                    <div class="col-sm-9 bio">
                        More facebook creeping.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                        This is some text. This is some text.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="scroll_wrapper">
        <div class="actor actor-left" id="matthew_przywara">
            <div class="actor_name"><div>Matthew <br/>Przywara</div></div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_pic">
                <img src="images/cast/matthewPrzywara.jpg" />
            </div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_spacer"></div>
        </div>
        <div class="actor actor-right" id="matthew_przywara">
            <div class="actor_spacer"></div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_pic">
                <img src="images/cast/matthewPrzywara.jpg" />
            </div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_name"><div>Matthew <br/>Przywara</div></div>
        </div>
        <div class="actor actor-left" id="matthew_przywara">
            <div class="actor_name"><div>Matthew <br/>Przywara</div></div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_pic">
                <img src="images/cast/matthewPrzywara.jpg" />
            </div>
            <div class="bio">
                <div>
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                    This is some text. This is some text.
                </div>
            </div>
            <div class="actor_spacer"></div>
        </div>
    </div>-->
</div>