import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-home',
    template: `
        <div id="wrapper">
            <app-2018-hero></app-2018-hero>
            
            <app-2018-speakers></app-2018-speakers>

            <app-2018-vendors></app-2018-vendors>

            <app-2018-countdown></app-2018-countdown>

            <app-2018-contact></app-2018-contact>
        </div>
    `

})
export class Home2018Component {

}