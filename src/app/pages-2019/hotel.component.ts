import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-hotel',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2><strong>HEADQUARTER HOTEL</strong></h2>
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
            <p class="lead">Situated in the heart of Nashville, our luxury hotel allows you to hit all the high notes of Music City both in the area and under our 
            roof. We also offer a full-service spa for a more relaxing way to unwind. When it's time to refuel, sip and savor in our stylish steak, 
            Mexican, Italian and Japanese restaurants followed by a frozen yogurt or gelato dessert. There is shopping located throughout the resort, 
            and the meeting space venues are beautiful spaces complete with built in stages, lobbies and professional amenities. Get ready for an 
            experience that you will remember for years to come!</p>

            <hr />

            <p class="lead">Make your hotel reservations NOW!</p>

            <div class="text-center">
              <a href="https://book.passkey.com/gt/217265789?gtid=6490c326db9faa31a04ce58e75d4f22d" class="btn btn-primary space-bottom-8 
              color-white" target="_blank" rel=”noopener”>Reservations</a>
            </div>            

            <p class="lead"><strong><u>Reservations</u></strong></p>

            <p class="lead"><strong>Reservation Method: Individuals can make reservations through a link powered by PassKey.</strong></p>

            <p class="lead"><strong>Billing: Individual guest pays all charges</strong></p>

            <p class="lead"><strong>Room Information: Rate of $195.00+ tax and nightly resort fee, currently $20.00</strong></p>

            <p class="lead">Terms: One night payment will be processed and held as a deposit by the Gaylord Hotel when you make your reservation.  Your reservation 
            is refundable in full up to 72 hours prior to the date of your first booked night.</p>

            <p class="lead">All rooms will be guaranteed to be the type you book (king room, 2 queens, etc.) however if you book AFTER our cut off date your room 
            could be run of house which means whatever is available when you arrive.</p>

            <p class="lead">Other terms as noted on the reservation site apply.</p>

            <p class="lead"><strong>Reservation Cutoff date: Tuesday, September 3, 2019 by 5PM CST.  NO EXCEPTIONS.</strong></p>

            <p class="lead">After this date rates will go up!  No exceptions.  If you fail to make a reservation by the deadline, IAHSP will be unable to 
            help you with a lower rate.</p>
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
