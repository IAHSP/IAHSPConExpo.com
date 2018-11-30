import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-2018-home',
    template: `
        <app-shared-header-2018>Loading...</app-shared-header-2018>
            <div id="wrapper" class="padding-header">
                <router-outlet></router-outlet>
            </div>
        <app-shared-footer></app-shared-footer>
    `,
    styles: [`
        #wrapper.padding-header {
            padding-top: 60px !important;
            padding-bottom: 0;
        }
    `]

})

export class Home2018Component implements OnInit {

  constructor() {}

  ngOnInit() {}
}