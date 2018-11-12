import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-home',
  template: `
    <app-shared-2019-header>Loading...</app-shared-2019-header>

    <span id="header_shadow"></span>

      <div id="wrapper" class="padding-bottom-0">

        <app-2019-hero id="hero"></app-2019-hero>

        <app-2019-event id="event"></app-2019-event>

        <app-2019-speakers id="speakers"></app-2019-speakers>

        <app-2019-schedule id="schedule"></app-2019-schedule>

        <app-2019-designation id="designation"></app-2019-designation>

        <app-2019-hotel id="hotel"></app-2019-hotel>

      </div>

    <app-shared-2019-footer></app-shared-2019-footer>
  `,
  styles: [`
      
      #speakers {
        text-align: center;
      }

      #hotel {
        text-align: center;
      }

  `]
})
export class Home2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
