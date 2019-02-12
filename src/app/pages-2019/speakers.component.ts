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

        <ul class="list-style-none">

          <!-- Speakers -->
          <li class="col-sm-3">
            <div class="item-box">
                <figure>
                    <img class="img-responsive center-block" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/fred-berns-320-392.jpg" alt="Fred Berns">
                </figure>
                <div class="item-box-desc">
                    <h4>Fred Berns</h4>
                    <h5>TOPIC: Selling Methods of the Masters</h5>

                    <!-- modal trigger -->
                    <div class="text-center">
                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#four">View Bio</a>
                    </div>

                    <!-- modal dialog -->
                    <div class="modal fade" id="four" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <!-- modal header -->
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">Fred Berns</h4>
                                </div><!-- /modal header -->

                                <!-- modal body -->
                                <div class="modal-body">
                                    <p>Fred Berns is among the biggest names in the <em>business</em> of interior design.  He’s an award-winning coach, promotional 
                                    copywriter and professional speaker who trains and creates promotional materials for design professionals and real estate 
                                    stagers worldwide, helping them promote themselves more effectively and dramatically increase sales and profits.</p>
                                    
                                    <p>His training and coaching sessions for interior designers, stagers, window fashion professionals, kitchen and bath 
                                    specialists, and other design professionals from Dallas to Dubai focus on how they can double their sales, connect with 
                                    better clients, and make a maximum marketing impact for a minimal investment of time and money.</p>

                                    <p>Fred presents sales and marketing programs at design centers, marts and conferences worldwide. He was an emcee and 
                                    presenter at the International Federation of Interior Architects and Designers(IFI) in Dubai, U.A.E.  In addition, 
                                    he has been a featured speaker at the International Window Coverings Expo; Neocon events; the High Point Market; 
                                    Surfaces; design symposiums; home and design expos; furniture, gift and accessory shows; and national conferences of 
                                    such groups as ASID, NKBA, IFDA and Decorating Den.  Fred’s blog,  <a href="https://interiordesignbusiness.net/">
                                    InteriorDesignBusiness.net</a>, reaches thousands of design professionals around the world. He also regularly writes 
                                    for a variety of design trade publications and online outlets.</p>
                                </div><!-- /modal body -->

                                <!-- modal footer -->
                                <div class="modal-footer">
                                    <button class="btn btn-default" data-dismiss="modal">Close</button>
                                </div><!-- /modal footer -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </li>
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
