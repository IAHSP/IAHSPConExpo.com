import { Component, OnInit } from '@angular/core';

import { speakerList } from "./shared/speakers";

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

        <ul class="no-bullets">

          <!-- Speakers -->
          <li class="col-xs-12 col-sm-3" *ngFor="let speaker of speakers">
            <div class="item-box">
              <figure>
                <img class="img-responsive center-block" src="{{ speaker.image }}" alt="{{ speaker.name }}">
              </figure>
              <div class="item-box-desc">
                <h4>{{ speaker.name }}</h4>
                <h5>TOPIC: {{ speaker.topic }}</h5>

                <!-- modal trigger -->
                <div class="text-center">
                  <a href="{{ '#'+speaker.modelId }}" class="btn btn-primary" data-toggle="modal">View Bio</a>
                </div>

                <!-- modal dialog -->
                <div class="modal fade" id="{{ speaker.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">

                      <!-- modal header -->
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title" id="myModalLabel">{{ speaker.name }}</h4>
                      </div><!-- /modal header -->

                      <!-- modal body -->
                      <div class="modal-body">
                        {{ speaker.description }}
                      </div><!-- /modal body -->

                      <!-- modal footer -->
                      <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">Close</button>
                      </div><!-- /modal footer -->
                    </div>
                  </div>
                </div><!-- /modal dialog -->
              </div>
            </div>
          </li><!-- /speakers -->
        </ul>
      </div>
    </div>
  </section>
  
  `,
  styles: [`
  
    .no-bullets {
      list-style: none;
    }
  
  `]
})
export class Speakers2019Component implements OnInit {
  speakers = speakerList;
  
  constructor() { }

  ngOnInit() {
  }

}
