import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-2020-home",
  template: `
    <app-shared-2020-header>Loading...</app-shared-2020-header>

    <span id="header_shadow"></span>

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
                The International Association of Home Staging Professionals<sup>&reg;</sup>
                (IAHSP<sup>&reg;</sup>) is excited to host this high level
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

      <!-- Vision for Success -->
      <section id="vfs" class="bg-white padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/iahsp-con-expo-2020-vision-for-success-logo.jpg" 
              alt="IAHSP Con Expo 2020 Vision for Success Logo"
              class="center-block img-responsive space-bottom-40"
              width="640" />
              
              <p class="lead">Join hundreds of Home Staging Industry Colleagues from around the world for the <strong>BIGGEST and most COMPREHENSIVE Educational Event of 
              the Year!</strong> We bring Expert Speakers teaching you not just WHAT you need but HOW to be Successful! Learn to implement processes, marketing 
              plans, business logistics and success strategies!  Our Conference is a complete resource for our attendees from Learning how to be more 
              successful to Connecting with key companies offering resources and services and Forming new friendships with colleagues from around the 
              world.</p>
              
              <p class="lead">We selected our 2020 theme carefully to provide our industry members clear expectations for what we will be putting together for our 
              Conference.  We want you to be able to have a clear vision for where your business is headed, and get the tools you need to make that 
              happen.</p>
              
              <p class="lead">We offer education for all levels of business owner:<br />
              <strong>Beginners – Experienced – Advanced</strong></p>
              
              <p class="lead"><strong>All speakers will be teaching on topics that help our members and industry grow.  There will be no sales pitches or inclusion of any 
              sales offerings allowed by any speaker.  We will require the speaker to share not just WHAT to do but HOW to do it.  Our attendees will 
              come away with USEFUL and ACTIONABLE information.</strong></p>

              <p class="lead"><strong>TOPICS ON OUR LIST:</strong></p>

              <ul class="lead">
                <li><strong>Marketing & Branding</strong> – Marketing and Branding are the core component of your business as marketing precedes any sales.  Learn what 
                  Marketing is most effective, resources to help you produce effective collateral materials, and how to stand out in your messaging.</li>
                <li><strong>Social Media</strong> – What platforms do you need to be using and why? Learn where to invest your time, how to maximize your time and which 
                  platforms are the most effective based on target demographics and your services.</li>
                <li><strong>Sales Strategies</strong> – From cold calling, follow-up, and relationship building – learn how to overcome objections, what to say, how and 
                  when to say it to gain business and establish long-term loyal clients.</li>
                <li><strong>Industry Trends</strong> – Real Estate, Investor, Builder – Learn what is happening within our industry and externally with industries we 
                  serve to understand how to position your services for a changing industry.</li>
                <li><strong>Staging Trends</strong> – What are the new trends for 2020 and beyond that we need to know about to continue to position ourselves as an 
                  EXPERT in our industry and with our clients?  Learn where we are now and where we are headed, colors, styles, and predictions for the coming years.</li>
                <li><strong>Market Niches</strong> – Staging Vacation Property Rentals, Color, Feng Shui, and Decorating – learn what to do to add these key market niches 
                  and services to your business.</li>
                <li><strong>Personal Growth</strong> – Learn WHO you are in this business and embrace the ROLE you have as the OWNER and CEO of your Company.  Mindset 
                  Strategies and Confidence Building Techniques, Scripts, and Resources/</li>
                <li><strong>Business Organization</strong> – Streamlining Systems and Time Management are essential for growth of your Business. Get recommended Business 
                  Apps, Online Resources, and understand HOW to use them – Trello, Monday, HoneyDo, 17 Hats, Slack and more!</li>
                <li><strong>Business Processes</strong> – From Proposals, Agreements, Consultations and Vacant Projects – Learn WHAT you need to do and receive forms and 
                  templates.</li>
                <li><strong>Warehousing – Process and Expansion, Moving Team and Trucks</strong> – Whether you are growing into your first warehouse or expanding into a 
                  larger space, learn HOW to make this happen and WHAT to know to make this process efficient and effective.</li>
              </ul>

              <p class="lead"><strong>PLUS!!</strong></p>
              <p class="lead"><strong>EDUCATIONAL AND MOTIVATIONAL KEYNOTE SPEAKERS!</strong> We plan on bringing KEYNOTE Business Speakers who will motivate and inspire 
                us to success!</p>
              <p class="lead"><strong>NEW Industry Designation to ADD to your Credentials!</strong>  We will be offering a Designation to help you position yourself in your 
                marketing and market to differentiate yourself from your competition.  Knowledge = Power and we want to EMPOWER YOU to be able to ADD to your success.</p>
              <p class="lead"><strong>CALL for SPEAKERS WILL BE RELEASED JAN 2020.</strong>  If you would like to share or know someone we need to learn about, please 
                email <a href="mailto:jennie@iahsp.com">Jennie@iahsp.com</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Great Gatsby Gala -->
      <section id="ggg" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center"><strong>Great Gatsby Gala Dinner</strong></h2>
              <h3 class="line-height-32 text-center">Join us for our ROARING 2020's Great Gatsby Gala Dinner and Party!</h3>
            </div>
            <div class="col-md-offset-3 col-md-6 space-bottom-40">
              <video width="100%" controls="" controlslist="nodownload">
                <source src="https://d3oaxt0bwkjnjn.cloudfront.net/videos/iahsp-con-expo-gatsby-gala-reveal.mp4" type="video/mp4">
              </video>
            </div>
            <div class="col-md-offset-3 col-md-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/iahsp-con-expo-2020-awards-gala-promo.jpg" 
              alt="Great Gatsby Galla Promo" 
              class="center-block img-responsive" />
            </div>
          </div>
        </div>
      </section>

      <section id="ast" class="padding100 bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/advance-stager-training-logo-623-623.jpg" 
              alt="Advance Stager Training Logo" 
              class="center-block img-responsive space-bottom-15"
              width="290" />
              
              <h2 class="text-center"><strong>Advanced Stager Training (AST)</strong></h2>
              
              <p class="lead"><strong>Advanced Stager Training (AST)</strong> is a workshop intensive coordinated by IAHSP<sup>&reg;</sup> and offered in 
              <strong>collaboration</strong> with other industry leaders.  We believe in the collective genius found when we bring like-minded 
              people together.  Our industry has many talented, knowledgeable and highly successful individuals who own and operate Staging 
              Associations, Coaching Businesses, and Training Companies.  Tapping into the collective minds of these respected individuals who 
              will help facilitate meaningful, honest and open conversations with 6+ Figure Home Staging Business Owners results in synergy 
              found only in a collective collaboration.</p><hr class="center-hr" width="33%" />

              <h3 class="lead text-center"><strong>We are already making plans for another GREAT Workshop Intensive for 2020!<br />
                Mark your Calendars: Sept 28-29, 2020 in Denver!</strong></h3>

              <p class="lead text-center"><strong>WHEN: Monday and Tuesday, September 29-30, 2020</strong></p>

              <p class="lead text-center"><strong>INVESTMENT: $499.00</strong> (when you book BOTH 2019 IAHSP<sup>&reg;</sup> Conference & EXPO AND the AST Workshop, save $75!)</p>

              <p class="lead text-center"><strong>LOCATION: The Gaylord Rockies Hotel – Denver</strong> (IAHSP<sup>&reg;</sup> has negotiated special rates with the hotel for these days.  
              Make sure to extend your hotel stay when you book your 2020 IAHSP<sup>&reg;</sup> Conference & EXPO stay.  You do NOT have to attend the 2020 IAHSP<sup>&reg;</sup> Conference 
              to attend the AST Workshop, however <strong><em>we recommend you do both!</em></strong></p>

              <p class="lead text-center"><strong>TIME: 9:30AM – 6PM (lunch included both days and Dinner provided on Day 1).</strong></p>

              <div class="text-center space-bottom-7">
                <a href="https://www.cvent.com/d/thq0qv" class="btn btn-primary space-bottom-8 
                color-white" target="_blank" rel="noopener noreferrer"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Register for AST Now!</a>
              </div>

              <p class="lead text-center"><strong>SPACE IS LIMITED TO ONLY 60 PEOPLE!</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section id="hotel" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center"><strong>Headquarter Hotel</strong></h2 >
              <h3 class="line-height-32 text-center">Gaylord Rockies Hotel - Denver</h3>
            </div>
  
            <div class="col-md-offset-3 col-md-6">
              <div class="owl-carousel controlls-over" data-plugin-options='{"autoPlay":9000, "stopOnHover":true, "items": 1, "singleItem": true, "navigation": true, "pagination": true, "transitionStyle":"fadeUp", "itemsScaleUp":true}'>
                <div>
                  <img alt="IAHSP Gaylord Outside Hotel" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-reception.jpg" />
                </div>
                <div>
                  <img alt="IAHSP Gaylord Bedroom" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-top-opening.jpg" />
                </div>
                <div>
                  <img alt="Second IAHSP Gaylord Bedroom " class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-opening-1.jpg" />
                </div>
                <div>
                  <img alt="IAHSP Nashville Tennessee Plaza" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-opening-2.jpg" />
                </div>
                <div>
                  <img alt="Second IAHSP Nashville Tennessee Plaza" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-bedroom.jpg" />
                </div>
              </div>
            </div>
  
            <div class="col-md-12">
              <p class="lead">If guests prefer to book over the phone, please have them call Marriott Reservations at <a href="tel:8888403143">888-840-3143</a> 
              and reference the IAHSP<sup>&reg;</sup> Conference and Expo 2020. Cutoff date for reservations is August 26th, 2020. There will be no extensions possible 
              due to hotel policy. No exceptions. After the 26th the rates will be the current hotel rates and subject to availability.</p>
  
              <p class="lead text-center">Make your hotel reservations NOW!</p>
  
              <div class="text-center">
                <a href="https://book.passkey.com/go/IAHSP2020" class="btn btn-primary space-bottom-8 
                color-white" target="_blank" rel="noopener noreferrer"><i class="fa fa-bed" aria-hidden="true"></i>Make a Reservation</a>
              </div>
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
                <a href="/register"><strong>Register</strong></a> By The
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
