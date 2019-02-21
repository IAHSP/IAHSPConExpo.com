import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-hero',
  template: 
  `

    <!-- REVOLUTION SLIDER -->
    <section class="fullscreenbanner-container">
      <div class="fullscreenbanner">
        <ul>

          <!-- SLIDE  -->
          <li data-transition="fade" data-slotamount="1" data-masterspeed="1500" >                 

            <!-- MAIN IMAGE -->
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-hero-background.jpg" alt="Nashville, TN" data-bgfit="cover" data-bgposition="left top" 
            data-bgrepeat="no-repeat">

            <!-- LAYER NR. 1 -->
            <div id="revolution-layer-0" class="tp-caption large_bold_white customin customout"
              data-x="center" data-hoffset=""
              data-y="25" data-voffset=""
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="890"
              data-start="800"
              data-easing="Back.easeOut"
              data-endspeed="500"
              data-endeasing="Power4.easeIn"
              style="z-index: 2">

              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-conference-and-expo-2019-logo.png" alt="IAHSP Conference and Expo 2019" 
              width="390px" class="img-responsive center-block" />
            </div>

            <!-- LAYER NR. 2 -->
            <div id="revolution-layer-1" class="tp-caption large_bold_white customin customout"
              data-x="center" data-hoffset=""
              data-y="340" data-voffset=""
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="900"
              data-start="950"
              data-easing="Back.easeOut"
              data-endspeed="500"
              data-endeasing="Power4.easeIn"
              style="z-index: 2">

              2019 Educational Conference & EXPO!
            </div>

            <!-- LAYER NR. 3 -->
            <div id="revolution-layer-2" class="tp-caption largegreenbg customin customout"
              data-x="center" data-hoffset=""
              data-y="410" data-voffset=""
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="900"
              data-start="1050"
              data-easing="Back.easeOut"
              data-endspeed="500"
              data-endeasing="Power4.easeIn"
              style="z-index: 3">
              
              Oct 3-5, 2019 – Nashville, TN
            </div>

            <!-- LAYER NR. 4 -->
            <div id="revolution-layer-3" class="tp-caption small_text customin customout"
              data-x="center" data-hoffset=""
              data-y="500" data-voffset=""
              data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="1000"
              data-start="1055"
              data-easing="Power4.easeInOut"
              data-endspeed="500"
              data-endeasing="Power4.easeInOut">

                The International Association of Home Staging Professionals<sup>®</sup> (IAHSP<sup>®</sup>) is excited to host this
                high level educational event for top Home Staging business owners worldwide! Join colleagues to learn, share
                and grow a successful business that has longevity and profitability. We have planned two power-packed days
                full of vital information as well as opportunities for you to network with colleagues from all over. Our
                vendor-sponsors play a key role in our business success and we are excited to welcome them to the EXPO portion
                of our event. Sign up NOW to secure your spot!
              
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="bg-white padding100">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">Check out some of the highlights of our 2018 Conference & EXPO!</h2>
          </div>
          <div class="col-md-6">
            <div class="space-bottom-15">
              <video width="100%" controls="" controlslist="nodownload">
                  <source src="https://d3oaxt0bwkjnjn.cloudfront.net/web/videos/iahsp-2018-montage-sessions-and-awards-dinner.mp4" type="video/mp4">
              </video>
            </div>
          </div>
          <div class="col-md-6">
            <div class="space-bottom-15">
              <video width="100%" controls="" controlslist="nodownload">
                  <source src="https://d3oaxt0bwkjnjn.cloudfront.net/web/videos/2018-iahsp-conference-set-and-expo.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .fullscreenbanner-container {
        margin-bottom: 0 !important;
    }

    .largegreenbg {
        background-color: #D99A33;
    }
  `]

})
export class Hero2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
