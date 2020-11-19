import { Component, OnInit } from "@angular/core";

import { astList, cdeList, ksList } from "./shared/data";

@Component({
  selector: "app-2020-home",
  template: `
    <app-shared-2020-header>Loading...</app-shared-2020-header>

    <!-- <span id="header_shadow"></span> -->

    <div id="wrapper" class="padding-bottom-0">
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
                alt="IAHSP Conference and Expo Denver Colorado 2021"
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
                data-y="-25"
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
                  src="https://d3oaxt0bwkjnjn.cloudfront.net/images/2021-iahsp-conference-expo.png"
                  alt="IAHSP Conference and Expo 2021"
                  width="390px"
                  class="img-responsive center-block"
                />
              </div>

              <!-- LAYER NR. 2 -->
              <div
                id="revolution-layer-1"
                class="tp-caption large_bold_white customin customout text-center"
                data-x="center"
                data-hoffset=""
                data-y="300"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="900"
                data-start="950"
                data-easing="Back.easeOut"
                data-endspeed="500"
                data-endeasing="Power4.easeIn"
                style="z-index: 2"
              >
                2021 Educational Conference & EXPO!
              </div>

              <!-- LAYER NR. 3 -->
              <div
                id="revolution-layer-1"
                class="tp-caption large_bold_white customin customout text-center"
                data-x="center"
                data-hoffset=""
                data-y="342"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="900"
                data-start="1000"
                data-easing="Back.easeOut"
                data-endspeed="500"
                data-endeasing="Power4.easeIn"
                style="z-index: 2"
              >
                <small style="font-size: 47%; font-weight: 600;"
                  >The Home Staging Industry's Largest Educational Event &
                  Vendor EXPO of the Year!</small
                >
              </div>

              <!-- LAYER NR. 4 -->
              <div
                id="revolution-layer-2"
                class="tp-caption largegreenbg customin customout"
                data-x="center"
                data-hoffset=""
                data-y="418"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="900"
                data-start="1050"
                data-easing="Back.easeOut"
                data-endspeed="500"
                data-endeasing="Power4.easeIn"
                style="z-index: 3"
              >
                Sept 24-26, 2021 – Denver, CO
              </div>

              <!-- LAYER NR. 5 -->
              <div
                id="revolution-layer-3"
                class="tp-caption small_text customin customout text-center"
                data-x="center"
                data-hoffset=""
                data-y="512"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1000"
                data-start="1055"
                data-easing="Power4.easeInOut"
                data-endspeed="500"
                data-endeasing="Power4.easeInOut"
              >
                We are bringing IAHSP Conference & EXPO to HEADQUARTERS in the
                heart of the Rocky Mountains - Denver! The 2021 IAHSP®
                Conference and EXPO brings together top Home Staging Industry
                business owners and Real Estate professionals, with key
                Affiliate Vendors for high-level teaching and networking.
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
              <h1 class="text-center">
                <strong
                  >Please enjoy this montage from our IAHSP Conference & EXPO
                  2019 - Nashville</strong
                >
              </h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>
            </div>
            <div class="col-md-offset-1 col-md-10 space-bottom-40">
              <video width="100%" controls="" controlslist="nodownload">
                <source
                  src="https://d3oaxt0bwkjnjn.cloudfront.net/videos/iahsp-con-expo-2019.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      <!-- Speakers -->
      <section id="ks" class="padding100 special-row">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Speakers</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <ul class="no-bullets padding-left-0">
                <ng-container *ngFor="let ks of kss; let i = index">
                  <div *ngIf="ks % 3 == 0" class="clearfix visible-md"></div>

                  <!-- kss -->
                  <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                    <div class="item-box bg-light-gray">
                      <figure>
                        <img
                          class="img-responsive center-block"
                          src="{{ ks.image }}"
                          alt="{{ ks.name }}"
                        />
                      </figure>
                      <div class="item-box-desc">
                        <h4 class="space-bottom-8 text-center">
                          {{ ks.name }}<br />
                          <small class="text-center">{{ ks.company }}</small>
                        </h4>
                        <h5 class="text-center">{{ ks.title }}</h5>

                        <!-- modal trigger -->
                        <div class="text-center">
                          <a
                            href="{{ '#' + ks.modelId }}"
                            class="btn btn-primary"
                            data-toggle="modal"
                            >View Info</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- /kss -->

                  <!-- modal dialog -->
                  <div
                    class="modal fade"
                    id="{{ ks.modelId }}"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <!-- modal header -->
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            &times;
                          </button>
                          <h4 class="modal-title" id="myModalLabel">
                            <strong>{{ ks.name }}</strong> {{ "- " + ks.title }}
                          </h4>
                        </div>
                        <!-- /modal header -->

                        <!-- modal body -->
                        <div class="modal-body">
                          <div [innerHTML]="ks.description"></div>
                        </div>
                        <!-- /modal body -->

                        <!-- modal footer -->
                        <div class="modal-footer">
                          <button class="btn btn-default" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                        <!-- /modal footer -->
                      </div>
                    </div>
                  </div>
                  <!-- /modal dialog -->

                  <div
                    class="clearfix visible-sm visible-md"
                    *ngIf="(i + 1) % 3 == 0"
                  ></div>
                  <div
                    class="clearfix visible-lg"
                    *ngIf="(i + 1) % 4 == 0"
                  ></div>
                </ng-container>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Countdown -->
      <section class="countdown padding100 parallax">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                <a routerLink="/register"><strong>Register</strong></a> By The
                Deadline - unless we are SOLD OUT
              </h2>
              <h3 class="line-height-32">Sept 24, 2020 11:59 PM</h3>
              <div id="demo"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Us -->
      <app-2020-contact id="contactus"></app-2020-contact>
    </div>

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
    `,
  ],
})
export class Home2020Component implements OnInit {
  asts = astList;
  cdes = cdeList;
  kss = ksList;

  constructor() {}

  ngOnInit() {
    // Set the date we're counting down to
    var countDownDate = new Date("Sept 23, 2021 23:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        "<div class='col-xs-6 col-sm-offset-2 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" +
        days +
        "</h1><p class='lead font-weight-400'>Days</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" +
        hours +
        "</h1><p class='lead font-weight-400'>Hours</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" +
        minutes +
        "</h1><p class='lead font-weight-400'>Minutes</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" +
        seconds +
        "</h1><p class='lead font-weight-400'>Second</p></div>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}
