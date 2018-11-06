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
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/nashville-tennessee.png" alt="Nashville, TN" data-bgfit="cover" data-bgposition="left top" 
            data-bgrepeat="no-repeat">
            
            <div></div>

            <!-- LAYER NR. 1 -->
            <div id="revolution-layer-0" class="tp-caption large_bold_white customin customout"
              data-x="center" data-hoffset=""
              data-y="-35" data-voffset=""
              data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
              data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              data-speed="890"
              data-start="800"
              data-easing="Back.easeOut"
              data-endspeed="500"
              data-endeasing="Power4.easeIn"
              style="z-index: 2">

              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logo-iahsp-footer.png" alt="" class="img-responsive center-block" />
            </div>

            <!-- LAYER NR. 2 -->
            <div id="revolution-layer-1" class="tp-caption large_bold_white customin customout"
              data-x="center" data-hoffset=""
              data-y="330" data-voffset=""
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
              data-y="420" data-voffset=""
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
              data-y="520" data-voffset=""
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
  `,
  styles: [`
    .fullscreenbanner-container {
        margin-bottom: 0 !important;
    }

    .largegreenbg {
        background-color: #D99A33;
    }

    /* Phone 1 */
    @media only screen and (max-width : 767px) {
        #revolution-layer-0 {
            top: 80px !important;
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
        }
    }

    /* Phone 2 */
    @media (min-width: 426px) and (max-width: 767px) {
        #revolution-layer-2 {
            top: 220px !important;
        }

        #revolution-layer-3 {
            top: 275px !important;
        }

        #revolution-layer-3 > p {
            line-height: 14px;
        }
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1199px) {
        #revolution-layer-0 {
            top: 280px !important;
        }
    }

    /* Desktop */
    @media only screen and (min-width : 1200px) {
        #revolution-layer-0 {
            top: 170px !important;
        }

        #revolution-layer-1 {
            top: 318px !important;
        }

        #revolution-layer-2 {
            top: 380px !important;
        }

        #revolution-layer-3 {
            top: 467px !important;
        }

        #revolution-layer-3 {
            line-height: 28px !important;
        }
    }
  `]

})
export class Hero2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
