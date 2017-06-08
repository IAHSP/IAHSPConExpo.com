import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-speakers',
    template: `
        <section id="speakershelp" class="padding-40-0-100">
            <div class="container ng-scope">
                <h1 class="text-center"><strong>Call for Speakers</strong></h1>

                <div class="lead">
                    <p class="text-center">If you are interested in speaking at the IAHSP 2018 Conference & EXPO</p>
                </div><!-- /lead -->

                <!-- CALL FOR SPEAKERS -->
                <div class="row space-top-40">
                    <div class="col-lg-10 col-lg-offset-1">
                        <div class="text-center space-bottom-20"><a href="mailto:jennie@iahsp.com" target="_blank" class="btn btn-primary btn-lg"><strong>Please email Jennie@iahsp.com</strong></a></div>
                    </div><!-- /col -->
                </div><!-- /row -->
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