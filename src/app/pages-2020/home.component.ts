import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-2020-home",
  template: `
    <app-shared-2020-header>Loading...</app-shared-2020-header>

    <span id="header_shadow"></span>

    <div id="wrapper" class="padding-bottom-0">
      <!-- REVOLUTION SLIDER -->
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
                src="https://d3oaxt0bwkjnjn.cloudfront.net/images/iahsp-conference-expo-denver.jpg"
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
                data-y="25"
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

              <!-- LAYER NR. 2 -->
              <div
                id="revolution-layer-1"
                class="tp-caption large_bold_white customin customout"
                data-x="center"
                data-hoffset=""
                data-y="340"
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
                2020 Educational Conference & EXPO!
              </div>

              <!-- LAYER NR. 3 -->
              <div
                id="revolution-layer-2"
                class="tp-caption largegreenbg customin customout"
                data-x="center"
                data-hoffset=""
                data-y="410"
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
                Sept 25-27, 2020 – Denver, CO
              </div>

              <!-- LAYER NR. 4 -->
              <div
                id="revolution-layer-3"
                class="tp-caption small_text customin customout"
                data-x="center"
                data-hoffset=""
                data-y="500"
                data-voffset=""
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 0%;"
                data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-speed="1000"
                data-start="1055"
                data-easing="Power4.easeInOut"
                data-endspeed="500"
                data-endeasing="Power4.easeInOut"
              >
                The International Association of Home Staging Professionals<sup
                  >®</sup
                >
                (IAHSP<sup>®</sup>) is excited to host this high level
                educational event for top Home Staging business owners
                worldwide! Join colleagues to learn, share and grow a successful
                business that has longevity and profitability. We have planned
                two power-packed days full of vital information as well as
                opportunities for you to network with colleagues from all over.
                Our vendor-sponsors play a key role in our business success and
                we are excited to welcome them to the EXPO portion of our event.
                Sign up NOW to secure your spot!
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="countdown padding100 parallax">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                <a href="/register"><strong>Register</strong></a> By The
                Deadline - unless we are SOLD OUT
              </h2>
              <h3>Sept 24, 2020 11:59 PM</h3>
              <div id="demo"></div>
            </div>
          </div>
        </div>
      </section>

      <app-2020-contact id="contact"></app-2020-contact>
    </div>

    <app-shared-2020-footer></app-shared-2020-footer>
  `,
  styles: [
    `
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
  constructor() {}

  ngOnInit() {
    // Set the date we're counting down to
    var countDownDate = new Date("Sept 24, 2020 23:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
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
