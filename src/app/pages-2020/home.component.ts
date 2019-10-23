import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2020-home',
  template: `
    <app-shared-2020-header>Loading...</app-shared-2020-header>

    <span id="header_shadow"></span>

    <div id="wrapper" class="padding-bottom-0">

      <app-2020-hero id="hero"></app-2020-hero>      

      <app-2020-countdown id="countdown"></app-2020-countdown>

      <app-2020-contact id="contact"></app-2020-contact>

    </div>

    <app-shared-2020-footer></app-shared-2020-footer>
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
export class Home2020Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
