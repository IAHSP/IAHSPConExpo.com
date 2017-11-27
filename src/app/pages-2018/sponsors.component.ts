import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-sponsors',
    template: `
        <section class="white-bg padding100">
            <div class="container ng-scope">
                <div class="row">
                    <div class="col-md-12">
                    </div>
                    <div class="col-md-12">
                        <h2 class="text-center"><strong>Premier Platinum<br />Sponsors</strong></h2>
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/feizy-logo.png" width="440px" class="center-block img-responsive feizy space-bottom-50" alt="Feizy">
                    </div>
                    <div class="col-md-4 space-8-0 padding-0">
                        <h2 class="text-center"><strong>Platinum Sponsors</strong></h2>
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/dalyn-rug-logo.jpg" class="center-block img-responsive dalyn-rug" width="320px" alt="Dalyn Rug Company Beauty Beyond the Surface">   
                    </div>
                    <div class="col-md-8 small-group-imgs">
                    <h2 class="text-center"><strong>Gold Sponsors</strong></h2>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="small-img">
                                    <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/artists-guild-of-america.jpg" class="center-block img-responsive" alt="Artist Guild of America">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="small-img">
                                    <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/elk-group-international.jpg" class="center-block img-responsive" alt="Elk Group International">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="small-img">
                                    <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/paragon-logo.jpg" class="center-block img-responsive" alt="Paragon">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="small-img">
                                    <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/uma-home-decor.jpg" class="center-block img-responsive" alt="UMA Home Decor">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /row -->
            </div><!-- /container -->
        </section>
    `,
    styles: [`
        .space-8-0 { margin: 8px 0; }
        .padding-0-4 { padding: 0 4px; }

        .white-bg {
            background-color: white;
        }

        .feizy {
            border: 2px solid lightgray;
            border-radius: 18px;
            padding: 81px 25px;
        }

        .dalyn-rug {
            display: flex;
            border: 1px solid lightgray;
            border-radius: 8px;
            padding: 25px 20px;
        }

        .dalyn-rug img {
            height: 200px;
        }

        .small-group-imgs .col-md-6 {
            padding: 0;
        }

        .small-group-imgs .col-md-12 {
            padding: 0 4px;
            margin: 8px 0;
        }

        .small-group-imgs img {
            margin: auto;
            max-height: 110px;
        }

        .small-img {
            height: 125px;
            display: flex;
            border-radius: 8px;
            padding: 5px 50px;
            border: 1px solid lightgray;
        }
    `]

})
export class Sponsors2018Component {

}