import { Component, OnInit } from '@angular/core';

import { speakerList } from "./shared/speakers";

import { isdList } from "./shared/speakers";

@Component({
  selector: 'app-2019-speakers',
  template: `
  
  <section class="padding100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2><strong>Our 2019 IAHSP<sup>®</sup> Conference Speaker Line Up is Amazing!</strong></h2>

          <p class="lead">We have selected industry professionals who will inspire, educate, motivate and challenge you to 
            <span class="rock"><strong>ROCK</strong></span> your business success!</p>

          <p class="lead">The Speakers and Topics are presented by seasoned professionals who own and operate successful Home Staging 
            businesses! Each session will be full of vital and timely information to help YOU grow your business and we have something for 
            everybody - from Beginner to Advanced professional.</p>

          <p class="lead">AND Don’t forget about the Investor Staging Consultant Designation you will earn!</p>
          
          <p class="lead"><strong>Our Conference is Your Getaway with a Takeaway!</strong></p>

          <p class="lead">Our Celebrity Keynote Speakers bring EXCITEMENT and FUN as well as Business Experience and Expertise!  
            More than just pretty faces, these Keynotes Speakers head up large industry companies!  Learn from their wisdom about 
            longevity and success!</p>
        </div>

        <div class="col-md-12 space-bottom-40">
          <ul class="no-bullets padding-left-0">
            <ng-container *ngFor="let speaker of speakers; let i = index;">
              <div *ngIf="(speaker % 3) == 0" class="clearfix visible-md"></div>

              <!-- Speakers -->
              <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                <div class="item-box">
                  <figure>
                    <img class="img-responsive center-block" src="{{ speaker.image }}" alt="{{ speaker.name }}">
                  </figure>
                  <div class="item-box-desc">
                    <h4 class="space-bottom-8">{{ speaker.name }}<br />
                    <small>{{ speaker.company }}</small></h4>
                    <h5>TOPIC: {{ speaker.topic }}</h5>

                    <!-- modal trigger -->
                    <div class="text-center">
                      <a href="{{ '#'+speaker.modelId }}" class="btn btn-primary" data-toggle="modal">View Info</a>
                    </div>

                    <!-- modal dialog -->
                    <div class="modal fade" id="{{ speaker.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">

                          <!-- modal header -->
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">{{ speaker.name }} {{ "- "+speaker.company }}</h4>
                          </div><!-- /modal header -->

                          <!-- modal body -->
                          <div class="modal-body">
                            <div class="text-align-left" [innerHTML]="speaker.description"></div>
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
              <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
              <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
            </ng-container>
          </ul>
        </div>
        
        <div class="divider styleColor col-md-12">
          <i class="fa fa-leaf"></i>
        </div>

        <div class="col-md-12 space-bottom-40">
          <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2019/iahsp-investor-staging-consultant-logo.gif" 
          class="center-block img-responsive space-bottom-10" alt="IAHSP Investor Staging Consultant" width="320px">
          <ul class="no-bullets padding-left-0">
            <ng-container *ngFor="let isd of isds; let i = index;">
              <div *ngIf="(speaker % 3) == 0" class="clearfix visible-md"></div>

              <!-- ISDs -->
              <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                <div class="item-box">
                  <figure>
                    <img class="img-responsive center-block" src="{{ isd.image }}" alt="{{ isd.name }}">
                  </figure>
                  <div class="item-box-desc">
                    <h4 class="space-bottom-8">{{ isd.name }}<br />
                    <small>{{ isd.company }}</small></h4>
                    <h5>TOPIC: {{ isd.topic }}</h5>

                    <!-- modal trigger -->
                    <div class="text-center">
                      <a href="{{ '#'+isd.modelId }}" class="btn btn-primary" data-toggle="modal">View Info</a>
                    </div>

                    <!-- modal dialog -->
                    <div class="modal fade" id="{{ isd.modelId }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">

                          <!-- modal header -->
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">{{ isd.name }} {{ "- "+isd.company }}</h4>
                          </div><!-- /modal header -->

                          <!-- modal body -->
                          <div class="modal-body">
                            <div class="text-align-left" [innerHTML]="isd.description"></div>
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
              </li><!-- /ISDs -->
              <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
              <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
            </ng-container>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  `,
  styles: [`
  
    h2, h3, h4, li, p {
      color: #2D2926;
    }

    div.text-align-left p {
      color: #2D2926;
    }

    h2 {
      font-size: 2.6em;
    }

    h4 > small {
      line-height: 1.2;
      margin-top: 2px;
    }

    .rock {
      font-size: 31px;
    }

    .no-bullets {
      list-style: none;
    }
  
  `]
})
export class Speakers2019Component implements OnInit {
  speakers = speakerList;
  isds = isdList;
  
  constructor() { }

  ngOnInit() {
  }

}
