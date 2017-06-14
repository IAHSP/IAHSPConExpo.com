import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-hero',
    template: `
        <!-- REVOLUTION SLIDER -->
        <section class="fullscreenbanner-container">
            <div class="fullscreenbanner" >
                <ul>
                    <!-- SLIDE  -->
                    <li data-transition="fade" data-slotamount="1" data-masterspeed="1500" >
                        <!-- MAIN IMAGE -->
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/charlotte-nc.jpg" alt="Ft. Lauderdale, FL" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
                        <!-- LAYERS -->

                        <!-- LAYER NR. 1 -->
                        <div id="revolution-layer-0" class="tp-caption large_bold_white customin customout"
                            data-x="center" data-hoffset=""
                            data-y="-35" data-voffset=""
                            data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="1000"
                            data-start="800"
                            data-easing="Back.easeOut"
                            data-endspeed="500"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 2">

                            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/2018-conference-expo-logo.png" alt="Journey to the Top" class="img-responsive center-block logo-raisethebar" />
                        </div>

                        <!-- LAYER NR. 1 -->
                        <div id="revolution-layer-1" class="tp-caption large_bold_white customin customout"
                            data-x="center" data-hoffset=""
                            data-y="330" data-voffset=""
                            data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="1000"
                            data-start="800"
                            data-easing="Back.easeOut"
                            data-endspeed="500"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 2">

                            2018 Educational Conference and EXPO!
                        </div>

                        <!-- LAYER NR. 2 -->
                        <div id="revolution-layer-2" class="tp-caption largegreenbg customin customout"
                            data-x="center" data-hoffset=""
                            data-y="420" data-voffset=""
                            data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="1000"
                            data-start="900"
                            data-easing="Back.easeOut"
                            data-endspeed="500"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 3">
                            
                            Oct 19-21, 2018 – Charlotte, NC
                        </div>

                        <!-- LAYER NR. 3 -->
                        <div id="revolution-layer-3" class="tp-caption small_light_white customin customout"
                            data-x="center" data-hoffset=""
                            data-y="520" data-voffset=""
                            data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="1000"
                            data-start="1000"
                            data-easing="Power4.easeInOut"
                            data-endspeed="500"
                            data-endeasing="Power4.easeInOut">

                            <p class="text-bold text-white">
                                The International Association of Home Staging Professionals® (IAHSP®) is excited to host this
                                high level educational event for top Home Staging business owners worldwide!  Join colleagues to learn, share
                                and grow a successful business that has longevity and profitability.  We have planned two power-packed days
                                full of vital information as well as opportunities for you to network with colleagues from all over.  Our
                                vendor-sponsors play a key role in our business success and we are excited to welcome them to the EXPO portion
                                of our event.  Sign up NOW to secure your spot!
                            </p>

                            <div class="text-center">
                                <a class="btn btn-success text-bold" onclick="fnRevolutionNext();"><i class="fa fa-play" aria-hidden="true"></i>IAHSP Conference Video</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="tp-bannertimer"></div>
            </div>
        </section>
    `,
    styles: [`
        /* Phone */
        @media only screen and (max-width : 767px) {
            #revolution-layer-0 {
                top: 25px !important;
            }

            #revolution-layer-1 {
                top: 175px !important;
            }

            #revolution-layer-2 {
                top: 200px !important;
            }

            #revolution-layer-3 {
                top: 228px !important;
            }

            #revolution-layer-3 > p {
                margin-bottom: 10px;
                line-height: 11px;
            }
        }

        /* Desktop */
        @media only screen and (min-width : 1200px) {
            #revolution-layer-0 {
                top: 50px !important;
            }

            #revolution-layer-0 img {
                width: 300px !important;
                height: 268px !important;
            }

            #revolution-layer-1 {
                top: 318px !important;
                font-size: 40px;
            }

            #revolution-layer-2 {
                top: 380px !important;
                font-size: 45px;
            }

            #revolution-layer-3 {
                top: 467px !important;
            }

            #revolution-layer-3 > p {
                font-size: 18px;
                line-height: 22px;
            }
        }
    `]
    
})
export class Hero2018Component {

}