import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-event',
  template: `
  
    <section class="padding100">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-conference-and-expo-2019-logo.png" 
            class="center-block img-responsive space-bottom-15" width="420px" alt="IAHSP 2019 Conference & Expo">
          </div>
          <div class="col-md-6">
            <h2>2019 IAHSP CONFERENCE & EXPO</h2>
            <p>The 2019 IAHSP® Conference and EXPO - ROCK Your Business in Music City- brings together top Home Staging Industry business owners and 
              Real Estate professionals, with key Affiliate Vendors for high-level teaching and networking. The Conference is being held in Nashville, 
              TN with an Advanced Stager Training following the event.</p>
            <p>Our Conferences are known for key teaching and topics that are pertinent for your success.  We will have Break-out Sessions with topics 
              geared towards newer Stagers and more experienced Stagers.  Our Speakers are all successful Business owners and our KEY NOTE Speakers from 
              outside the industry bring a different perspective to our event and are always well received.</p>
            <p>OUR KEYNOTE SPEAKERS! To be Announced!<br />
              You KNOW we are going to line up great speakers!</p>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [``]
})
export class Event2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
