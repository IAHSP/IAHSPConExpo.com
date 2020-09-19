import { Component, OnInit } from "@angular/core";

import { astList, cdeList, ksList } from './shared/data';

@Component({
  selector: "app-2020-home",
  template: `
    <app-shared-2020-header>Loading...</app-shared-2020-header>

    <!-- <span id="header_shadow"></span> -->

    <div id="wrapper" class="padding-bottom-0">

      <div class="container">
        <p class="lead color-black font-weight-400 line-height-1-5 space-top-28">Our LIVE IAHSP CONFERENCE and EXPO has been CANCELED DUE TO COVID19 and inability to have large group gatherings in 
        Colorado. Please watch for details regarding our <a href="https://iahspvirtualconexpo.com/" target="_blank" rel="noopener noreferrer">Virtual Conference</a> for 2020 coming soon!</p>
      </div>

      <!-- Hero REVOLUTION SLIDER -->
      <section class="fullscreenbanner-container">
        <div class="fullscreenbanner">
          <ul>
            <!-- SLIDE  -->
            <li
              data-transition="fade"
              data-slotamount="1"
              data-masterspeed="1500"
            >
              <!-- MAIN IMAGE -->
              <img
                src="https://d3oaxt0bwkjnjn.cloudfront.net/images/denver-colorado-where-to-stay-luxury-skyline.jpg"
                alt="IAHSP Conference and Expo Denver Colorado 2020"
                data-bgfit="cover"
                data-bgposition="left top"
                data-bgrepeat="no-repeat"
              />

              <!-- LAYER NR. 1 -->
              <div
                id="revolution-layer-0"
                class="tp-caption large_bold_white customin customout"
                data-x="center"
                data-hoffset=""
                data-y="-15"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="890"
                data-start="800"
                data-easing="Back.easeOut"
                data-endspeed="500"
                data-endeasing="Power4.easeIn"
                style="z-index: 2"
              >
                <img
                  src="https://d3oaxt0bwkjnjn.cloudfront.net/images/iahsp-conference-and-expo-2020.jpg"
                  alt="IAHSP Conference and Expo 2020"
                  width="390px"
                  class="img-responsive center-block"
                />
              </div>

              <!-- LAYER NR. 4 -->
              <div
                id="revolution-layer-3"
                class="tp-caption small_text customin customout text-center"
                data-x="center"
                data-hoffset=""
                data-y="315"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1000"
                data-start="1055"
                data-easing="Power4.easeInOut"
                data-endspeed="500"
                data-endeasing="Power4.easeInOut"
              >
                <h1 style="line-height: 60px; font-weight: 500;">2020 IAHSP Conference has gone VIRTUAL</h1>
                Please go to <a href="https://iahspvirtualconexpo.com/" target=”_blank” rel="oopener noreferrer">www.IAHSPVirtualConEXPO.com</a> for more information on all we have planned!
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- IAHSP 2019 Promo -->
      <section class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Please enjoy this montage from our IAHSP Conference & EXPO 2019 - Nashville</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

            </div>
            <div class="col-md-offset-1 col-md-10 space-bottom-40">
              <video width="100%" controls="" controlslist="nodownload">
                <source src="https://d3oaxt0bwkjnjn.cloudfront.net/videos/iahsp-con-expo-2019.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </section>     

    <app-shared-2020-footer></app-shared-2020-footer>
  `,
  styles: [
    `
      .no-bullets {
        list-style: none;
      }
      .bs-callout.styleBackground {
        padding: 50px 15px;
      }
      .countdown {
        text-align: center;
        background: #2d2926 !important;
      }
      .fullscreenbanner-container {
        margin-bottom: 0 !important;
      }
      .largegreenbg {
        background-color: #008bcc;
      }
    `
  ]
})
export class Home2020Component implements OnInit {

  asts = astList;
  cdes = cdeList;
  kss = ksList;
  
  constructor() {}

  ngOnInit() {}
}
