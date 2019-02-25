import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-event',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center"><strong>2019 IAHSP<sup>®</sup> CONFERENCE & EXPO</strong></h2>
          </div>
          <div class=" col-md-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-conference-and-expo-2019-logo.png" 
            class="center-block img-responsive space-bottom-15" width="420px" alt="IAHSP 2019 Conference & Expo" width="360px">

            <p class="lead">The 2019 IAHSP<sup>®</sup> Conference and EXPO - ROCK Your Business in Music City- brings together top Home Staging Industry business owners and 
              Real Estate professionals, with key Affiliate Vendors for high-level teaching and networking. The Conference is being held in Nashville, 
              TN with an Advanced Stager Training following the event.</p>
            <p class="lead">Our Conferences are known for key teaching and topics that are pertinent for your success.  We will have Break-out Sessions with topics 
              geared towards newer Stagers and more experienced Stagers.  Our Speakers are all successful Business owners and our KEY NOTE Speakers from 
              outside the industry bring a different perspective to our event and are always well received.</p>

            <p class="lead"><strong>Tier 1 Pricing now until April 30, 2019: $555 for IAHSP<sup>&reg;</sup> Members and $675 
            for Non-IAHSP Members (includes a year of membership).</strong></p>
            
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
  
    
  
  `]
})
export class Event2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
