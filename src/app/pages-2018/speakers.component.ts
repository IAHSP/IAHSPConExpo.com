import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-speakers',
    template: `
        <section class="special-row padding100">
            <div class="container ng-scope">
                <h2 class="text-center"><strong>2018 IAHSP Conference & EXPO CALL FOR SPEAKERS</strong></h2>
                <p class="lead">Our 2018 IAHSP® Conference Speakers are going to inspire, motivate and educate you!  We have a great line-up planned and will be adding more speakers as they are confirmed!</p>
                <p class="lead"><em><strong>We are looking for SPEAKERS that would like to share their insight and wisdom at this event.  If you are interested, please submit the following to <a href="mailto:Jennie@iahsp.com">Jennie@iahsp.com</a>.</strong></em></p>
                <p class="lead"><em><strong>Educational Sessions are OCTOBER 19-20, 2018 with our exciting VENDOR EXPO on Oct 18th!</strong></em></p>
                
                <ol class="lead">
                    <li>Name & Company Name</li>
                    <li>Your Resume/Background Qualifications</li>
                    <li>Topic of interest that falls in the following categories:</li>
                </ol>

                <ul class="lead padding-left-80">
                    <li>Marketing</li>
                    <li>Business Development/Sales</li>
                    <li>Management Systems</li>
                    <li>Industry Trends</li>
                    <li>Business Growth</li>
                    <li>Luxury Staging</li>
                    <li>Other</li>
                </ul>

                <p class="lead"><font color="red"><strong>Please submit an outline for your topic including details on what you will cover and why you believe this is a topic that we should include at our upcoming event.</strong></font></p>
                <p class="lead">We will assign length of topics and speaker slots once we receive Speaker information.  We have always been an industry Association with Education at the core of membership, and our events are touted as the most advanced and informative in the industry.</p>
                <p class="lead">If your topic is selected, all Speakers will receive complimentary attendance to the 2018 Conference. </p>
                <p class="lead">Please submit information to <a href="mailto:Jennie@iahsp.com">Jennie@iahsp.com</a>.</p>
            </div><!-- /container -->
        </section>
    `,
    styles: [`
        .padding-40-0-100 {
            padding: 40px 0 100px !important;
        }
    `]

})
export class Speakers2018Component {

}