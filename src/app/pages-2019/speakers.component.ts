import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-speakers',
  template: `
  
  <section class="padding100 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>CALL FOR SPEAKERS DEADLINE - JAN 7TH!</h2>
          <p class="lead">CALL FOR SPEAKERS! Please let us know if you would like to be considered as one of our Featured Speakers. You need to submit your 
            <strong>Topic, Outline and Credentials</strong> - as well as a short summary of <em><strong>WHY you would like to speak at our 2019 Conference 
              &amp; EXPO!</strong></em></p>
          <p class="lead">We would ideally like to have the topics match the "theme" of being in Music City, so get creative with your topic!</p>
          <p class="lead">As we like to share, it is an honor to speak from the platform and we strive to bring quality education and timely topics to our 
            event attendees. If this sounds like YOU - you can send your information to <a href="mailto:jennie@iahsp.com">Jennie@iahsp.com</a>.</p>
        </div>
      </div>
    </div>
  </section>
  
  `,
  styles: [``]
})
export class Speakers2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
