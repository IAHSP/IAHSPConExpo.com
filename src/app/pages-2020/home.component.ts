import { Component, OnInit } from "@angular/core";

import { astList, cdeList, ksList } from './shared/data';

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

      <!-- IAHSP 2019 Promo -->
      <section class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>IAHSP Conference Expo 2019</strong></h1>

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

              <div class="row">
                <div class="col-md-6"><img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/chris-widener-speaker-promo.jpg" class="center-block img-responsive space-bottom-15" 
                alt="Chris Widener Speaker Promo"></div>

                <div class="col-md-6"><img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/jonny-fowler-speaker-promo.jpg" class="center-block img-responsive space-bottom-15" 
                alt="Jonny Fowler Speaker Promo"></div>

                <div class="col-md-offset-3 col-md-6"><img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/ravi-hutheesing-speaker-promo.jpg" class="center-block img-responsive space-bottom-15" 
                alt="Ravi Hutheesing Speaker Promo"></div>                
              </div><hr />
              
              <div class="row">
                <div class="col-md-offset-1 col-md-10">
                  <h2 class="text-center">Check out what RAVI has to say about our upcoming IAHSPConEXPO!</h2>
                  <iframe width="1252" height="704" src="https://www.youtube.com/embed/hODdPvLxp_M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>             
              </div><hr />


              <ul class="no-bullets padding-left-0">
                <ng-container *ngFor="let ks of kss; let i = index;">
                  <div *ngIf="(ks % 3) == 0" class="clearfix visible-md"></div>
    
                  <!-- kss -->
                  <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                    <div class="item-box bg-light-gray">
                      <figure>
                        <img class="img-responsive center-block" src="{{ ks.image }}" alt="{{ ks.name }}">
                      </figure>
                      <div class="item-box-desc">
                        <h4 class="space-bottom-8 text-center">{{ ks.name }}<br />
                        <small class="text-center">{{ ks.company }}</small></h4>
                        <h5 class="text-center">{{ ks.title }}</h5>

                        <!-- modal trigger -->
                        <div class="text-center">
                          <a href="{{ '#'+ks.modelId }}" class="btn btn-primary" data-toggle="modal">View Info</a>
                        </div>                        
                      </div>
                    </div>
                  </li>
                  <!-- /kss -->                      

                  <!-- modal dialog -->
                  <div class="modal fade" id="{{ ks.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <!-- modal header -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">{{ ks.name }} {{ "- "+ks.company }}</h4>
                        </div><!-- /modal header -->

                        <!-- modal body -->
                        <div class="modal-body">
                          <div [innerHTML]="ks.description"></div>
                        </div><!-- /modal body -->

                        <!-- modal footer -->
                        <div class="modal-footer">
                          <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div><!-- /modal footer -->
                      </div>
                    </div>
                  </div><!-- /modal dialog -->

                  <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
                  <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
                </ng-container>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision for Success -->
      <section id="vfs" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/iahsp-con-expo-2020-vision-for-success-logo.png" 
              alt="IAHSP Con Expo 2020 Vision for Success Logo"
              class="center-block img-responsive space-bottom-24"
              width="640" />

              <h1 class="text-center"><strong>Vision for Success</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>
              
              <p class="lead">Join hundreds of Home Staging Industry Colleagues from around the world for the <strong>BIGGEST and most COMPREHENSIVE
              Educational Event of the Year!</strong> We bring Expert Speakers teaching you not just WHAT you need but HOW to be Successful!
              Learn to implement processes, marketing plans, business logistics and success strategies! Our Conference is a complete
              resource for our attendees from Learning how to be more successful to Connecting with key companies offering resources
              and services and Forming new friendships with colleagues from around the world.</p>
              
              <p class="lead">We selected our 2020 theme carefully to provide our industry members clear expectations for what we will be putting together
              for our Conference. We want you to be able to have a clear vision for where your business is headed and get the tools you need to
              make that happen.</p>
              
              <p class="lead">We offer education for all levels of business owner:<br />
              <strong>Beginners – Experienced – Advanced</strong></p>
              
              <p class="lead"><strong>All speakers will be teaching on topics that help our members and industry grow. There will be no sales pitches
              or inclusion of any sales offerings allowed by any speaker. All Speakers will not only share WHAT to do but HOW to do
              it. Our attendees will come away with USEFUL and ACTIONABLE information. In other words, #SCUBADIVEnotSNORKEL with content.</strong></p><hr />

              <h2 class="text-center"><strong><em>EDUCATIONAL AND MOTIVATIONAL KEYNOTE SPEAKERS!</em></strong></h2>
              
              <p class="lead">We have lined up AMAZING and knowledgeable KEYNOTE Speakers who will motivate and inspire us to success!</p>

              <p class="lead"><strong class="bg-gold color-white padding-0-8">BUSINESS KEYNOTE:</strong></p>

              <p class="lead"><strong>CHRIS WIDENER – Saturday, Sept 26, 2020, and Advanced Stager Training Session on Monday, Sept 28, 2020.</strong></p>

              <p class="lead"><strong class="bg-gold color-white padding-0-8">MARKETING KEYNOTE:</strong></p>
              
              <p class="lead"><strong>JONNY FOWLER – Sunday, Sept 27, 2020 and Advanced Stager Training Session, Monday, Sept 28, 2020.</strong></p>

              <p class="lead"><strong class="bg-gold color-white padding-0-8">IAHSP®-CDE DESIGNATION KEYNOTE:</strong></p>

              <p class="lead"><strong>RAVI HUTHEESING – Sept 27, 2020</strong> - NEW Industry Designation: IAHSP<sup>&reg;</sup>-CDE – Cultural Diversity Expert</p>

              <p class="lead"><strong class="bg-gold color-white padding-0-8">NEW INDUSTRY DESIGNATION:</strong></p>
              
              <p class="lead space-bottom-67">CULTURAL DIVERSITY EXPERT – IAHSP<sup>&reg;</sup>-CDE Designation. <em>Learn more!</em></p>

              <!-- CALLOUT -->
              <div class="bs-callout text-center styleBackground">
                <h2 class="line-height-42">Call for Speakers Deadline has passed. We will be announcing<br />
                  <strong>our amazing speakers <em>soon!</em></strong></h2>
              </div>
              <!-- /CALLOUT -->
            </div>
          </div>
        </div>
      </section>      

      <!-- NEW Designation - IAHSP-CDE -->
      <section id="cde" class="padding100 special-row">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/cultural-diversity-logo.jpg" 
              alt="Cultural Diversity Logo" 
              class="center-block img-responsive space-bottom-24"
              width="290" />
              <h1 class="text-center"><strong>Cultural Diversity Expert</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <h2 class="line-height-42 text-center">IAHSPConExpo’s 2020 Educational Designation<br />
              Sept 27, 2020</h2>

              <p class="lead">We are in a people business and Staging is a global service. Our cities and communities are
              becoming more diverse with multi-cultural influences from people from all over the world.
              Misunderstandings about differences can offend people by mistake and we need to understand
              cultural differences, nuances and traditions in order to better serve our clients.</p>

              <p class="lead">The IAHSP<sup>&reg;</sup> Cultural Diversity Expert Designation (IAHSP-CDE<sup>&reg;</sup>) will teach you:</p>

              <ol class="lead">
                <li>About major cultural groups and what their expectations are in business</li>
                <li>Do’s and Don’ts in working with various cultures and ethnicities</li>
                <li>How to approach sensitive issues related to Staging</li>
                <li>Why Diversity and Inclusivity are linked together</li>
              </ol>

              <p class="lead">Our Speakers for this session will provide expert insights on the topic.</p>             

              <ul class="no-bullets padding-left-0">
                <ng-container *ngFor="let cde of cdes; let i = index;">
                  <div *ngIf="(cde % 3) == 0" class="clearfix visible-md"></div>
    
                  <!-- cdes -->
                  <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                    <div class="item-box bg-light-gray">
                      <figure>
                        <img class="img-responsive center-block" src="{{ cde.image }}" alt="{{ cde.name }}">
                      </figure>
                      <div class="item-box-desc">
                        <h4 class="space-bottom-8 text-center">{{ cde.name }}<br />
                        <small class="text-center">{{ cde.company }}</small></h4>
                        <h5 class="text-center">{{ cde.title }}</h5>

                        <!-- modal trigger -->
                        <div class="text-center">
                          <a href="{{ '#'+cde.modelId }}" class="btn btn-primary" data-toggle="modal">View Info</a>
                        </div>                        
                      </div>
                    </div>
                  </li>
                  <!-- /cdes -->                      

                  <!-- modal dialog -->
                  <div class="modal fade" id="{{ cde.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <!-- modal header -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">{{ cde.name }} {{ "- "+cde.company }}</h4>
                        </div><!-- /modal header -->

                        <!-- modal body -->
                        <div class="modal-body">
                          <div [innerHTML]="cde.description"></div>
                        </div><!-- /modal body -->

                        <!-- modal footer -->
                        <div class="modal-footer">
                          <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div><!-- /modal footer -->
                      </div>
                    </div>
                  </div><!-- /modal dialog -->

                  <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
                  <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
                </ng-container>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Great Gatsby Gala -->
      <section id="ggg" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Great Gatsby Gala Dinner</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <h2 class="line-height-42 text-center">Join us for our ROARING 2020's Great Gatsby Gala Dinner and Party!</h2>
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

      <!-- Advence Stager Training -->
      <section id="ast" class="padding100 special-row">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/advance-stager-training-logo-623-623.jpg" 
              alt="Advance Stager Training Logo" 
              class="center-block img-responsive space-bottom-24"
              width="290" />
              
              <h1 class="text-center"><strong>Advanced Stager Training (AST)</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>
              
              <p class="lead"><strong>Advanced Stager Training (AST)</strong> is a workshop intensive coordinated by IAHSP<sup>&reg;</sup> and offered in 
              <strong>collaboration</strong> with other industry leaders.  We believe in the collective genius found when we bring like-minded 
              people together.  Our industry has many talented, knowledgeable and highly successful individuals who own and operate Staging 
              Associations, Coaching Businesses, and Training Companies.  Tapping into the collective minds of these respected individuals who 
              will help facilitate meaningful, honest and open conversations with 6+ Figure Home Staging Business Owners results in synergy 
              found only in a collective collaboration.</p>              

              <ul class="no-bullets padding-left-0">
                <ng-container *ngFor="let ast of asts; let i = index;">
                  <div *ngIf="(ast % 3) == 0" class="clearfix visible-md"></div>
    
                  <!-- asts -->
                  <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                    <div class="item-box">
                      <figure>
                        <img class="img-responsive center-block" src="{{ ast.image }}" alt="{{ ast.name }}">
                      </figure>
                      <div class="item-box-desc bg-light-gray">
                        <h4 class="space-bottom-8 text-center">{{ ast.name }}<br />
                        <small class="text-center">{{ ast.company }}</small></h4>
                        <h5 class="text-center">{{ ast.title }}</h5>

                        <!-- modal trigger -->
                        <div class="text-center">
                          <a href="{{ '#'+ast.modelId }}" class="btn btn-primary" data-toggle="modal">View Info</a>
                        </div>                        
                      </div>
                    </div>
                  </li>
                  <!-- /asts -->                      

                  <!-- modal dialog -->
                  <div class="modal fade" id="{{ ast.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <!-- modal header -->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">{{ ast.name }} {{ "- "+ast.company }}</h4>
                        </div><!-- /modal header -->

                        <!-- modal body -->
                        <div class="modal-body">
                          <div [innerHTML]="ast.description"></div>
                        </div><!-- /modal body -->

                        <!-- modal footer -->
                        <div class="modal-footer">
                          <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div><!-- /modal footer -->
                      </div>
                    </div>
                  </div><!-- /modal dialog -->

                  <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
                  <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
                </ng-container>
              </ul>

              <div class="clearfix"></div>
              
              <hr />

              <!-- CALLOUT -->
              <div class="bs-callout text-center styleBackground">
                <h2 class="line-height-42">We are already making plans for another GREAT Workshop Intensive for 2020!<br />
                  Mark your Calendars: <strong>Sept 28-29, 2020 in <em>Denver!</em></strong></h2>
              </div>
              <!-- /CALLOUT -->

              <p class="lead text-center"><strong>WHEN: Monday and Tuesday, September 29-30, 2020</strong></p>

              <p class="lead text-center"><strong>INVESTMENT: $499.00</strong> (when you book BOTH 2019 IAHSP<sup>&reg;</sup> Conference & EXPO AND the AST Workshop, save $75!)</p>

              <p class="lead text-center"><strong>LOCATION: The Gaylord Rockies Hotel – Denver</strong> (IAHSP<sup>&reg;</sup> has negotiated special rates with the hotel for these days.  
              Make sure to extend your hotel stay when you book your 2020 IAHSP<sup>&reg;</sup> Conference & EXPO stay.  You do NOT have to attend the 2020 IAHSP<sup>&reg;</sup> Conference 
              to attend the AST Workshop, however <strong><em>we recommend you do both!</em></strong></p>

              <p class="lead text-center"><strong>TIME: 9:30AM – 6PM (lunch included both days and Dinner provided on Day 1).</strong></p>

              <div class="text-center space-bottom-13">
                <a href="https://www.cvent.com/d/thq0qv" class="btn btn-primary space-bottom-8 
                color-white" target="_blank" rel="noopener noreferrer"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Register for AST Now!</a>
              </div>

              <p class="lead text-center"><strong>SPACE IS LIMITED TO ONLY 60 PEOPLE!</strong></p>

              <p class="lead">If you currently own a 6+ figure business, join us for these 2 days of open dialogue with colleagues from around the globe.  
              Even though businesses may be at different financial levels, we all experience similar challenges related to growth, team members, pricing 
              and positioning in our respective markets.  Being in a room with other successful business owners creates a palpable dynamic and allows us 
              to get in depth and real in a very supportive environment where the goal is to HELP one another move our businesses to the next level, 
              whatever that is for you.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Gaylord Rockies Hotel - Denver -->
      <section id="hotel" class="padding100">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><strong>Headquarter Hotel</strong></h1>

              <!-- divider -->
              <div class="divider styleColor">
                <i class="fa fa-star"></i>
              </div>

              <h2 class="line-height-42 text-center">Gaylord Rockies Hotel - Denver</h2>
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
  
              <p class="lead text-center"><strong>Make your hotel reservations NOW!</strong></p>
  
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
