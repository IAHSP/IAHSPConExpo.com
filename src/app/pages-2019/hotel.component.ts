import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-hotel',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>HEADQUARTER HOTEL</h2>
            <h3>The Gaylord Hotel - Nashville</h3>
          </div>

          <div class="col-md-offset-2 col-md-8">
            <div class="owl-carousel controlls-over" data-plugin-options='{"autoPlay":9000, "stopOnHover":true, "items": 1, "singleItem": true, "navigation": true, "pagination": true, "transitionStyle":"fadeUp", "itemsScaleUp":true}'>
              <div>
                <img alt="IAHSP Gaylord Outside Hotel" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-gaylord-outside-hotel.jpg" />
              </div>
              <div>
                <img alt="IAHSP Gaylord Bedroom" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-gaylord-bedroom.jpg" />
              </div>
              <div>
                <img alt="Second IAHSP Gaylord Bedroom " class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-gaylord-bedroom-1.jpg" />
              </div>
              <div>
                <img alt="IAHSP Nashville Tennessee Plaza" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-nashville-tennessee-plaza.jpg" />
              </div>
              <div>
                <img alt="Second IAHSP Nashville Tennessee Plaza" class="img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-nashville-tennessee-plaza-1.jpg" />
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <p>Situated in the heart of Nashville, our luxury hotel allows you to hit all the high notes of Music City both in the area and under our 
            roof. We also offer a full-service spa for a more relaxing way to unwind. When it's time to refuel, sip and savor in our stylish steak, 
            Mexican, Italian and Japanese restaurants followed by a frozen yogurt or gelato dessert. There is shopping located throughout the resort, 
            and the meeting space venues are beautiful spaces complete with built in stages, lobbies and professional amenities. Get ready for an 
            experience that you will remember for years to come!</p>

            <h4>Hotel Reservations will be open starting in December 2018</h4>

            <p>We have negotiated special rates with the hotel<br />
            that will be made available to all attendees including Reservation Codes.</p>
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class Hotel2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
