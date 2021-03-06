import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-designation',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="lead font-weight-400 text-center">Our IAHSP<sup>®</sup> Conferences are always a GETAWAY with a TAKEAWAY!</p>

            <p class="lead text-center">This year we are pleased to be issuing:</p>

            <h2 class="text-center"><strong>IAHSP<sup>®</sup> INVESTOR STAGING<br />
            CONSULTANT (ISC) DESIGNATION!</strong></h2>
          </div>
          <div class="col-md-offset-1 col-md-4">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-investor-staging-consultant-logo.gif" class="center-block 
            img-responsive space-bottom-15" width="320px" alt="IAHSP Investor Staging Consultant Logo">
          </div>
          <div class="col-md-5">
            <p class="lead">Learn from Select Industry Experts on:</p>
            <ul class="lead">
              <li>How to Market to Investors</li>
              <li>Pricing Strategies</li>
              <li>Advising on Material Selections/Design</li>
              <li>Staging Investor Properties</li>
            </ul>
            <p class="lead">All attendees will earn the ISC Designation and Logo to demonstrate to the public they have knowledge on how to work with Investors and Stage 
            these properties for sale.</p>
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class Designation2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
