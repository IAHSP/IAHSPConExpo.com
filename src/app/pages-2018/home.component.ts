import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-home',
    template: `
        <app-shared-header-2018>Loading...</app-shared-header-2018>

        <span id="header_shadow"></span>
        
        <div id="wrapper">
            <app-2018-hero></app-2018-hero>
            
            <app-2018-speakers id="speakershelp"></app-2018-speakers>

            <app-2018-vendors id="vendors"></app-2018-vendors>

            <app-2018-countdown></app-2018-countdown>

            <app-2018-contact id="contact"></app-2018-contact>
        </div>

        <app-shared-footer></app-shared-footer>
    `,
    styles: [`
        @media only screen and (min-width : 991px) {
            header li > a[href="#contact"] {
                padding-top: 4px !important;
            }
        }
    `]

})
export class Home2018Component {

}