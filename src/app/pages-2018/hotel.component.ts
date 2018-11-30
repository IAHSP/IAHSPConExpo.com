import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-hotel',
    template: `
        <section class="parallax delayed parallax-init" data-stellar-background-ratio="0.99" style="background-image: url(&quot;https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-outside-nighttime.jpg&quot;); background-size: cover !important;">
        <span class="overlay bg-black-trans5"></span>
            <div class="container">
                <h2 class="text-center">Hotel Information</h2>                
				<article class="row">
                    <div class="col-md-6">
                        <div id="myCarousel" class="carousel slide space-bottom-20" data-ride="carousel">

                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                <li data-target="#myCarousel" data-slide-to="6"></li>
                            </ol>
                            
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-grand-ballroom.jpg"
                                        width="555" height="311" alt="The Westin Charlotte Grand Ballroom">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-bar.jpg"
                                        width="555" height="311" alt="The Westin Charlotte Bar">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-lounge.jpg"
                                        width="555" height="311" alt="The Westin Charlotte Lounge">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-hotel-presidential-suite.jpg"
                                        width="555" height="311" alt="The Westin Charlotte Hotel Presidential Suite">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/the-westin-charlotte-hotel-double-room.jpg"
                                        width="555" height="311" alt="The Westin Charlotte Hotel Double Room">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-bedroom.jpg"
                                        width="555" height="311" alt="The Westin Bedroom">
                                </div>
                                <div class="item">
                                    <img class="center-block img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/westin-outside-daytime.jpg"
                                        width="555" height="311" alt="Westin Outside Daytime">
                                </div>
                            </div>
                            
                            <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>						
                    </div>
                    
					<div class="col-md-6">
                        <h3 class="space-bottom-12">The Westin Charlotte Hotel</h3>
                        <p class="space-bottom-40">Please make your reservations by calling Danae Kaupp at <a href="tel:7043352037">704-335-2037</a> and 
                        asking for the <strong><u>IAHSP 2018 Room Block</u></strong>.</p>

                        <h3 class="space-bottom-12">IAHSP 2018</h3>
                        <p><strong>Event Date:<br />
                        October 18-20, 2018</strong></p>

                        <p><strong><u>OPTIONAL ADD-ON EVENTS:</u></strong></p>
                        
                        <a routerLink="/iahsp2018/wholesale">High Point Wholesale Experience - Oct 16</a><br />
                        <a routerLink="/iahsp2018/ast">Advanced Stager Training - Oct 21</a><br />
                        <a routerLink="/iahsp2018/ccs">Color Course - Oct 22-23</a><br /><br />

                        <p><strong>Venue:<br />
                        Westin Charlotte</strong></p>

                        <p>**The Group Rate is available Arriving <strong>Thursday October 18th and Friday, Oct 19th, 2018.</strong> We had a smaller block for 
                        Saturday that is sold out BUT <font color="yellow"><strong>there are plenty of rooms available for Saturday at our negotiated rate. To get a room for Saturday at our 
                        negotiated rate you must contact our conference coordinator:</strong></font> Danae Kaupp at <a href="tel:7043352037" class="text-white">704.335.2037</a> or <a href="mailto:Danae.Kaupp1@westin.com" class="text-white">Danae.Kaupp1@westin.com
                        </a></p>

                        <p>Group rate available until September 19, 2018. Subject to availability.</p>

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