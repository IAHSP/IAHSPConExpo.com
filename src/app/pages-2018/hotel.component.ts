import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-hotel',
    template: `
        <section class="parallax delayed parallax-init" data-stellar-background-ratio="0.99" style="background-image: url(&quot;https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-outside-nighttime.jpg&quot;); background-size: cover !important;">
        <span class="overlay bg-black-trans5"></span>
            <div class="container ng-scope">
                <h2 class="text-center"><strong>Hotel Information</strong></h2>
                
				<article class="row">
					<div class="col-md-6">
						<div class="owl-carousel controlls-over" data-plugin-options='{"items": 1, "singleItem": true, "navigation": true, "pagination": true, "transitionStyle":"fadeUp"}'>
							<div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-grand-ballroom.jpg"
                                 width="555" height="311" alt="The Westin Charlotte Grand Ballroom">
							</div>
							<div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-bar.jpg"
                                 width="555" height="311" alt="The Westin Charlotte Bar">
							</div>
							<div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-lounge.jpg"
                                 width="555" height="311" alt="The Westin Charlotte Lounge">
                            </div>
                            <div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-hotel-presidential-suite.jpg"
                                 width="555" height="311" alt="The Westin Charlotte Hotel Presidential Suite">
                            </div>
                            <div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-hotel-double-room.jpg"
                                 width="555" height="311" alt="The Westin Charlotte Hotel Double Room">
                            </div>
                            <div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-bedroom.jpg"
                                 width="555" height="311" alt="The Westin Bedroom">
                            </div>
                            <div>
                                <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-outside-daytime.jpg"
                                 width="555" height="311" alt="Westin Outside Daytime">
                            </div>
						</div>
					</div>
					<div class="col-md-6">
                        <h3>The Westin Charlotte Hotel</h3>
                        <p class="guest-can-make">Guests can make reservations by calling <a href="tel:18668374148">1-866-837-4148</a> and asking for the <strong><u>IAHSP 2018 Room Block</u></strong>.  
                        If you prefer to make reservations online, please click the button below:</p>
                        <a href="https://www.starwoodmeeting.com/Book/IAHSP2018" class="btn btn-primary btn-lg space-bottom-15" role="button">Book a Room</a>
                        <h3>IAHSP 2018</h3>
                        <hr />
                        <p class="lead font-weight-400">Event Date:<br />
                        October 15 - 21, 2018</p>

                        <p class="lead font-weight-400">Venue:<br />
                        Westin Charlotte</p>

                        <p class="lead font-weight-400">**The Group Rate is only available Arriving Thursday October 18<sup>th</sup>, 2018 and departing on Saturday October 20<sup>th</sup>, 2018.**</p>

                        <p class="lead font-weight-400">If you need other dates than those listed above please reach out to Danae Kaupp at <a href="mailto:Danae.Kaupp1@westin.com">Danae.Kaupp1@westin.com</a>.</p>

                        <p class="lead font-weight-400">Group rate available until September 19, 2018. Subject to availability.</p>

                    </div>
				</article>

            </div><!-- /container -->
        </section>
    `,
    styles: [`
        .guest-can-make {
            font-size: 17px;
            line-height: 23px;
        }
    `]

})
export class Hotel2018Component {

}