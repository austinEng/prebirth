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
                    <div class="col-sm-12 bio">
                        <p><span class="first-word">Jaclyn</span> is a soul, physically manifested as a person who she may or may not become. She has no memories, just her personality. Small and petite on the outside, she encompasses the heart of a warrior, showing extreme courage when needed.</p>
                        <p>The opposition is heavy. It is obvious that the demons will do whatever it takes to prevent her from going to earth. At times, she has her doubts, wondering if the physical realm is actually worth entering. Her guardian angel, Matthias, promises her that she has a great destiny on earth, even though she can't see it yet.</p>
                    </div>
                </div>
            </div>
            <div class="actor" id="matt_a">
                <div class="row">
                    <div class="col-sm-12 bio">
                        <p><span class="first-word">Matthias</span> has witnessed the fall of man. He's seen millions of souls die at the hands of demons. No one understands the darkness better than him; no one hates it as passionately as he does either.</p>
                        <p>Before meeting Jaclyn, Matthias had been assigned to another soul in prebirth, a boy named Adrien. When Adrien was ruthlessly killed, the pain of seeing another child gone was too much for the angel. He had been overexposed to the evil, making him numb to it. He hates it when angels lose, but has begun to accept the reality of a fallen world.</p>
                    </div>
                </div>
            </div>
            <div class="actor" id="alex_a">
                <div class="row">
                    <div class="col-sm-12 bio">
                        <p><span class="first-word">Saittham</span> was once an angel named Sabael. He served in heaven alongside Matthias, his closest friend. Then came the Fall. Sabael chose one side; his best friend chose the other. Now, they are locked in a never-ending battle over human souls.</p>
                        <p>All demons know their ultimate fate: eternal damnation in the Lake of Fire. It has been predestined and cannot change. Drained of all hope and joy, Saihttam's only purpose in life is to take it from others. Cunning, strategic, and menacing, he'll do whatever it takes to bring down as many souls as possible. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>