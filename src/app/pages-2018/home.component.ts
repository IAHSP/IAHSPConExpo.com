import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

    constructor(private titleService: Title) {
        this.titleService.setTitle('IAHSP 2018 Educational Conference and EXPO');
      }
    
      ngOnInit(): void {
    
      }
}