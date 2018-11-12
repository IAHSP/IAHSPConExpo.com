import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-home',
  template: `
    <app-shared-2019-header>Loading...</app-shared-2019-header>

    <span id="header_shadow"></span>

      <div id="wrapper" class="padding-bottom-0">

        <app-2019-hero></app-2019-hero>

      </div>

    <app-shared-2019-footer></app-shared-2019-footer>
  `,
  styles: ['']
})
export class Home2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
