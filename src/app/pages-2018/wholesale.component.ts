import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-wholesale',
    template: `
        <section class="padding100 special-row">
            <div class="container ng-scope">
                <h1 class="text-center"><strong>High Point Wholesale Experience</strong></h1>

                <div class="lead">
                    <p class="text-center space-bottom-40">­This is a separate event you can register for and will be held Oct 16, 2018 in High Point, NC</p>
                </div><!-- /lead -->

                <div class="row">
                    <div class="col-sm-12 space-bottom-40">
                        <img src="http://d3oaxt0bwkjnjn.cloudfront.net/web/images/highpoint-wholesale-exp-logo.jpg" width="640px" class="center-block img-responsive space-bottom-30" alt="iahsp luxury home staging">
                        <div class="col-lg-10 col-lg-offset-1">
                            <div class="text-center space-bottom-20"><a href="https://www.eventbrite.com/e/high-point-wholesale-experience-tickets-36371447980" target="_blank" class="btn btn-primary btn-lg btn-responsive"><i class="fa fa-user-plus" aria-hidden="true"></i><strong>Click Here to Sign Up</strong></a></div>
                        </div><!-- /col -->
                    </div>
                </div>
            </div><!-- /container -->
        </section>
    `,
    styles: [`
        .btn-responsive {
            white-space: normal;
        }
    `]

})
export class Wholesale2018Component {

}