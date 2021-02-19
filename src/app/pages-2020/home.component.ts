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
                src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-2021-cover.jpg"
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
                  src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-2021-soar-family-black-logo.png"
                  alt="IAHSP Conference and Expo 2021"
                  width="333px"
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

      <!-- Keynote Speakers -->
      <section id="ks" class="padding100 special-row">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Keynote Speakers</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <div class="speaker-border">
                <ul class="no-bullets clearfix padding-left-0">
                  <ng-container *ngFor="let ks of kss; let i = index">
                    <div *ngIf="ks % 3 == 0" class="clearfix visible-md"></div>

                    <!-- kss -->
                    <li class="col-xs-12 col-sm-4 col-md-4">
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
                            <small class="text-center" style="margin-top: 3px; line-height: 18px;">{{ ks.company }}</small>
                          </h4>
                          <h5 class="text-center"><strong>{{ ks.title }}</strong></h5>

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

              <!-- CALLOUT -->
              <div
                class="bs-callout text-center styleBackground"
                style="padding: 36px 15px;"
              >
                <h3 style="line-height: 36px;">
                  Speakers will be added to this site once they are
                  confirmed.<br />
                  <strong>Call for Speakers will be coming soon.</strong>
                </h3>
              </div>
              <!-- /CALLOUT -->

              <h2 class="text-center">
                Join your Home Staging Industry FAMILY at the 2021 IAHSP® Family Reunion – SOAR 
                Conference & EXPO
              </h2>

              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-2021-soar-family-black-logo.png" 
                alt="IAHSP 2021 Soar Family Black Logo" 
                class="center-block img-responsive space-bottom-32" width="330px" />

              <p class="lead">
                IAHSP<sup>&reg;</sup> is <strong><em>Your Home in the Home Staging 
                Industry<sup>&reg;</sup></em></strong> - people are the heart of the industry and your connection 
                for relationships and long-term success is found with IAHSP<sup>&reg;</sup>. Since 1999, we 
                have provided a home for industry colleagues who see the value in connection, camaraderie, and 
                collaboration.
              </p>

              <p class="lead">
                Let’s face it, we have been isolated from one another for too long and this prolonged inability 
                to see our family and friends in person has taken a toll.  <strong><em>People were not made to 
                live in isolation</em></strong> – getting around others who are like-minded, positive and 
                encouraging is a VITAL part of your journey of success.
              </p>

              <p class="lead">
                Our goal for our conferences is to bring us together to laugh, hug, and have fun while 
                learning <u>key education</u> for all levels:  <strong>Beginner, Intermediate, and Advanced 
                Business Owner</strong>.
              </p>

              <p class="lead">
                Join us at the <strong>2021 Home Staging Industry <span class="color-gold">Family 
                Reunion</span></strong> – brought to you by IAHSP<sup>&reg;</sup> - <em>Your Home in the 
                Home Staging Industry<sup>&reg;</sup></em>
              </p>

              <p class="lead text-center"><strong>Celebrate Connection.</strong></p>

              <p class="lead text-center"><strong>Celebrate Our Industry.</strong></p>

              <p class="lead text-center space-bottom-32"><strong>Celebrate Your Success.</strong></p>

              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/your-home-in-the-home-staging-industry.jpg" 
              alt="Your Home in the Home Staging Industry" 
              class="center-block img-responsive space-bottom-32" width="330px" />

              <p class="lead">
                <em>Join hundreds of Home Staging Industry Colleagues from around the world for the BIGGEST and 
                most COMPREHENSIVE Educational Event and Industry Celebration of the Year!</em>
              </p>

              <p class="lead">
                We bring Expert Speakers teaching you not just WHAT you need but HOW to be Successful with 
                ACTIONABLE information you can use right away.  We don’t snorkel – we scuba dive – meaning 
                we will not just give you suggestions or tips – we share HOW to implement it and WHY you need 
                to do something to help your business succeed.
              </p>

              <p class="lead">
                <strong><u>Some of the Topic Areas Include:</u></strong>
              </p>

              <ul class="lead">
                <li>Business Logistics</li>
                <li>Marketing &amp; Branding</li>
                <li>Sales Strategies</li>
                <li>Mindset and Motivation</li>
                <li>Business Planning</li>
                <li>Industry Trends</li>
                <li>Business Growth</li>
                <li>Team Building</li>
                <li>Financial Strategies</li>
                <li>Leadership</li>
              </ul>

              <!-- Read More button to collapse -->
              <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#more-details">Read More</button>
              <div id="more-details" class="collapse">
                <br />
                <p class="lead">
                  And . . . our Conference is always a “Getaway with a Takeaway”.  We are ONLY industry conference that 
                  gives YOU new credentials you can use to gain more business and understand how to be successful.  
                  This year we will be teaching all about effective Marketing and Sales – and how you can add value 
                  to your services by being a PARTNER with your clients for marketing and exposure for their success.
                </p>
  
                <p class="lead">
                  Our Conference is a complete resource for our attendees from Learning how to be more successful 
                  to Connecting with key companies offering resources and services and Forming new friendships with 
                  colleagues from around the world.
                </p>
  
                <p class="lead">
                  We selected our 2021 theme, SOAR, based on the word "RISE" that kept resonating with us as a choice 
                  to rise above our current circumstances and challenges with things that we cannot control. We need 
                  to RISE to new heights of Success in our Businesses.
                </p>
  
                <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-soar-let-your-dreams-take-flight.png" 
                alt="IAHSP SOAR Let Your Dreams Take Flight" 
                class="center-block img-responsive space-bottom-32" width="390px">
  
                <p class="lead">
                  SEEK OPPORTUNITIES AND RISE - together as an industry, as an association and as a family.
                </p>
  
                <p class="lead">
                  Our Conferences are known for key teaching and topics that are pertinent for your success. We will have 
                  Break-out Sessions with topics geared towards newer Stagers and more experienced Stagers. Our Speakers are 
                  all successful Business owners and our Speakers from outside the industry bring a different perspective 
                  to our event and are always well received.
                </p>
  
                <p class="lead">
                  SPECIAL OPTIONS: YOU MUST CALL TO REGISTER IN ORDER TO TAKE ADVANTAGE OF THESE OPTIONS. 
                  <a href="tel:8444247799">844-IAHSP99</a> or email <a href="mailto:christa@iahsp.com">Christa@iahsp.com</a>
                </p>
  
                <p class="lead">
                  <strong><u>PAYMENT PLAN</u></strong> For those who want to lock in their spot now - we are offering 1/3 
                  down payment $199.34 (IAHSP MEMBERS) $251.34 (NON-IAHSP MEMBERS) paid by Feb 15, 2021. The Second payment 
                  would be April 15, 2021 and the last and final payment would be June 15, 2021.
                </p>
  
                <p class="lead">
                  <strong><u>GROUP RATE</u></strong> For those with 2 or more team members you would like to bring to conference, 
                  we are offering a special rate for 2nd-4th team member, and 5+ team members will have an even lower price!
                </p>
  
                <p class="lead">
                  All speakers will be teaching on topics that help our members and industry grow. There will be no sales pitches 
                  or inclusion of any sales offerings allowed by any speaker. We will require the speaker to share not just WHAT 
                  to do but HOW to do it. Our attendees will come away with USEFUL and ACTIONABLE information.
                </p>
  
                <p class="lead">TOPICS ON OUR LIST:</p>
  
                <ul class="lead">
                  <li>
                    Marketing &amp; Branding – Marketing and Branding are the core component of your business as marketing 
                    precedes any sales. Learn what Marketing is most effective, resources to help you produce effective collateral 
                    materials, and how to stand out in your messaging.
                  </li>
  
                  <li>
                    Social Media – What platforms do you need to be using and why? Learn where to invest your time, how to 
                    maximize your time and which platforms are the most effective based on target demographics and your 
                    services.
                  </li>
  
                  <li>
                    Sales Strategies – From cold calling, follow-up, and relationship building – learn how to overcome 
                    objections, what to say, how and when to say it to gain business and establish long-term loyal clients.
                  </li>
  
                  <li>
                    Industry Trends – Real Estate, Investor, Builder – Learn what is happening within our industry and externally 
                    with industries we serve to understand how to position your services for a changing industry.
                  </li>
  
                  <li>
                    Staging Trends – What are the new trends for 2021 and beyond that we need to know about to continue to 
                    position ourselves as an EXPERT in our industry and with our clients? Learn where we are now and where 
                    we are headed, colors, styles, and predictions for the coming years.
                  </li>
  
                  <li>
                    Market Niches – from Design to Staging Vacation Property Rentals, to Color, Feng Shui, and Decorating – 
                    learn what to do to add these key market niches and services to your business.
                  </li>
  
                  <li>
                    Personal Growth – Learn WHO you are in this business and embrace the ROLE you have as the OWNER and CEO 
                    of your Company. Mindset Strategies and Confidence Building Techniques, Scripts, and Resources.
                  </li>
  
                  <li>
                    Business Organization – Streamlining Systems and Time Management are essential for growth of your Business. 
                    Get recommended Business Apps, Online Resources, and understand HOW to use them.
                  </li>
  
                  <li>
                    Business Processes – From Proposals, Agreements, Consultations and Vacant Projects – Learn WHAT you need to 
                    do and receive forms and templates.
                  </li>
  
                  <li>
                    Warehousing – Process and Expansion, Moving Team and Trucks – Whether you are growing into your first 
                    warehouse or expanding into a larger space, learn HOW to make this happen and WHAT to know to make this 
                    process efficient and effective.
                  </li>
                </ul>              
  
                <h3 class="color-gold"><strong>
                  PLUS!!
                </strong></h3>
  
                <p class="lead">
                  <strong><em>EDUCATIONAL AND MOTIVATIONAL KEYNOTE SPEAKERS!</em></strong> Our KEYNOTE Speakers motivate and 
                  inspire us to success!
                </p>
  
                <p class="lead">
                  <strong><em>NEW Industry Designation to ADD to your Credentials!</em></strong> We will be offering a 
                  Designation to help you position yourself in your marketing and market to differentiate yourself from 
                  your competition. Knowledge = Power and we want to EMPOWER YOU to be able to ADD to your success.
                </p>
  
                <p class="lead">
                  <strong><em>CALL for SPEAKERS WILL BE RELEASED SOON</em></strong>. If you would like to share or know 
                  someone we need to learn about, please email <a href="mailto:jennie@iahsp.com">Jennie@iahsp.com</a>.
                </p>
              </div>              
            </div>
          </div>
        </div>
      </section>

      <!-- Gaylord Rockies Resort Convention Center -->
      <section id="hotel" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Headquarter Hotel</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <h2 class="line-height-42 text-center">
                Gaylord Rockies Resort &amp; Convention Center
              </h2>
            </div>

            <div class="col-md-offset-3 col-md-6">
              <div
                class="owl-carousel controlls-over"
                data-plugin-options='{"autoPlay":9000, "stopOnHover":true, "items": 1, "singleItem": true, "navigation": true, "pagination": true, "transitionStyle":"fadeUp", "itemsScaleUp":true}'
              >
                <div>
                  <img
                    alt="IAHSP Gaylord Outside Hotel"
                    class="center-block img-responsive"
                    src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-reception.jpg"
                  />
                </div>
                <div>
                  <img
                    alt="IAHSP Gaylord Bedroom"
                    class="center-block img-responsive"
                    src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-top-opening.jpg"
                  />
                </div>
                <div>
                  <img
                    alt="Second IAHSP Gaylord Bedroom"
                    class="center-block img-responsive"
                    src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-opening-1.jpg"
                  />
                </div>
                <div>
                  <img
                    alt="IAHSP Nashville Tennessee Plaza"
                    class="center-block img-responsive"
                    src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-opening-2.jpg"
                  />
                </div>
                <div>
                  <img
                    alt="Second IAHSP Nashville Tennessee Plaza"
                    class="center-block img-responsive"
                    src="https://d3oaxt0bwkjnjn.cloudfront.net/images/gaylord-rockies-bedroom.jpg"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <p class="lead">
                <strong
                  >REGISTRATION DETAILS ARE HERE FOR YOU TO USE TO SECURE YOUR
                  HOTEL ROOM AT THE BEST PRICE.</strong
                >
              </p>

              <p class="lead">
                Hotel block includes special negotiated pricing for this hotel.
                We encourage you to room share to save costs. Our IAHSPConEXPO
                FB Group allows you to post requests for roommates. You must
                make your reservations by Aug 30, 2021. After that date, hotel
                rates increase and rooms may not be available. Your initial
                reservation includes a 1 night deposit the hotel will process
                when you register. Please adhere to all hotel room changes and
                reservation cancellation information provided on their site. We
                are NOT SOLD OUT. We will not approach capacity for rooms
                selling out until fairly close to the event. If you speak with
                the reservations department and they tell you that we are sold
                out, that is FALSE and you need to alert us ASAP. The dates of
                Sept 24-26 have plenty of room availability.
              </p>

              <p class="lead">
                If you are reserving rooms prior to and after the conference,
                those dates can sell out quickly and that may impact the
                reservation department ability to fulfill your reservation
                request. If all the dates you are requesting are not available,
                the reservations department will just share that the dates you
                are requesting are sold out - and they do not indicate which
                dates are sold out vs dates that have space. You need to call
                them and ASK for the dates that are available so you are at the
                HQ hotel for the main event.
              </p>

              <div class="text-center">
                <a
                  href="https://book.passkey.com/go/IAHSP2021"
                  class="btn btn-primary space-bottom-8 
                color-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><i class="fa fa-bed" aria-hidden="true"></i>Make a
                  Reservation</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IAHSP 2019 Promo -->
      <section class="padding100 special-row">
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

      <!-- Priority Ticket -->
      <section id="pticket" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center">
                <strong>Priority Ticket</strong>
              </h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>
              <p class="lead">Your Priority Ticket Includes:</p>
            </div>
            <div class="col-md-6">
              <ul class="lead margin-bottom-0">
                <li>Priority Registration</li>
                <li>Priority Check In</li>
                <li>Premium Swag Bag w/ exclusive items</li>
                <li>Priority Seating</li>
              </ul>
              <div class="visible-md visible-lg space-bottom-20"></div>
            </div>
            <div class="col-md-6">
              <ul class="lead">
                <li>Priority Access to Keynote Speakers</li>
                <li>
                  Exclusive VIP Speakeasy during Great Gatsby Gala Dinner and
                  Awards
                </li>
                <li>PLUS MORE!</li>
              </ul>
            </div>
            <div class="col-md-12">
              <p class="lead">
                Your registration will be placed into a drawing for a special
                prize.
              </p>
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
              <h3 class="line-height-32">Sept 24, 2021 11:59 PM</h3>
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
      .speaker-border {
        border-radius: 8px;
        background-image: url("https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-denver-2021.png");

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
