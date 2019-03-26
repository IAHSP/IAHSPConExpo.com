import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-cks',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center"><strong>CELEBRITY KEYNOTE SPEAKERS</strong></h2>
            <p class="lead space-bottom-32">Our Celebrity Keynote Speakers bring EXCITEMENT and FUN as well as Business Experience and Expertise!  
              More than just pretty faces, these Keynotes Speakers head up large industry companies!  Learn from their wisdom 
              about longevity and success!</p>
          </div>
          <div class=" col-md-6">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/candico-olson-kns-promo-square.jpg" 
            class="center-block img-responsive space-bottom-15" alt="IAHSP 2019 Conference & Expo" width="540px">
          </div>
          <div class=" col-md-6">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/conference/2019/carson-and-thom-promo.png" 
            class="center-block img-responsive space-bottom-15" alt="IAHSP 2019 Conference & Expo" width="512px">
          </div>
          <div class=" col-md-12">
            <h3 class="space-top-40 text-center line-height-32">Our Inspirational Keynote Speaker - Friday Evening</h3>
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/barb-keynote-promo.jpg" 
            class="center-block img-responsive space-bottom-15" alt="IAHSP 2019 Conference & Expo Barb Schwarz" width="460px">
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [`
  
    h2, h3, p {
      color: #2D2926;
    }

    h2 {
      font-size: 2.6em;
    }
  
  `]
})
export class Cks2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
