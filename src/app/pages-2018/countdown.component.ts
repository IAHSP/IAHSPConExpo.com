import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-countdown',
    template: `

        <section id="countdown" class="parallax delayed margin-footer parallax-init" data-stellar-background-ratio="0.7" style="background-image: url(&quot;http://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/white-living-room.jpg&quot;); background-position: 0px -31.7859px;">
            <span class="overlay"></span>
            <div class="row text-center bg-black-trans3">
                <div class="animation_fade_in">

                    <h1 class="space-top-15">Upcoming Event:</h1>

                    <div id="demo"></div>

                </div>
            </div>
        </section>
    `,
    styles: [`
        
    `]
})
export class Countdown2018Component {

}