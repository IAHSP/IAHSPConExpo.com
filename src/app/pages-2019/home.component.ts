import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-2019-home',
  template: `
    <app-shared-2019-header>Loading...</app-shared-2019-header>

    <span id="header_shadow"></span>

    <div id="wrapper" class="padding-bottom-0">

      <app-2019-hero id="hero"></app-2019-hero>

      <app-2019-cks id="cks"></app-2019-cks>

      <app-2019-event id="event"></app-2019-event>
      
      <app-2019-sponsors id="sponsors"></app-2019-sponsors>

      <app-2019-speakers id="speakers"></app-2019-speakers>

      <app-2019-schedule id="schedule"></app-2019-schedule>

      <app-2019-dinner id="dinner"></app-2019-dinner>

      <app-2019-designation id="designation"></app-2019-designation>

      <app-2019-ast id="ast"></app-2019-ast>

      <app-2019-hotel id="hotel"></app-2019-hotel>

      <!-- <app-2019-countdown id="countdown"></app-2019-countdown> -->

      <!-- <app-2019-contact id="contact"></app-2019-contact> -->

    </div>

    <app-shared-2019-footer></app-shared-2019-footer>
  `,
  styles: [` 

      #hotel {
        text-align: center;
      }

      #countdown {
        text-align: center;
      }

  `]
})
export class Home2019Component implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('IAHSP 2019 Educational Conference and EXPO');
  }

  ngOnInit(): void {

  }

}
