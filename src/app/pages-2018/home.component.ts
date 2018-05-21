import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-home',
    template: `
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-text-promo.png" class="center-block img-responsive" alt="IAHSP Text Promo">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-dark" data-dismiss="modal">I'm not interested</button>
                        <button type="button" class="btn btn-sm btn-default">Remind me later</button>
                    </div>
                </div>
            </div>
        </div>

        <app-shared-header-2018>Loading...</app-shared-header-2018>

        <span id="header_shadow"></span>
        
        <div id="wrapper">
            <app-2018-hero></app-2018-hero>
            
            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">
                Launch modal
            </button>

            <app-2018-scott id="scott"></app-2018-scott>
            
            <app-2018-sponsors id="sponsors"></app-2018-sponsors>

            <app-2018-speakers id="speakershelp"></app-2018-speakers>

            <app-2018-vendors id="vendors"></app-2018-vendors>

            <app-2018-hotel id="hotel"></app-2018-hotel>

            <app-2018-wholesale id="wholesale"></app-2018-wholesale>

            <app-2018-ast id="ast"></app-2018-ast>

            <app-2018-ccs id="ccs"></app-2018-ccs>

            <app-2018-lhsiahsp id="lhsiahsp"></app-2018-lhsiahsp>

            <app-2018-stageindustawards id="stageindustawards"></app-2018-stageindustawards>

            <app-2018-countdown></app-2018-countdown>

            <app-2018-contact id="contact"></app-2018-contact>
        </div>

        <app-shared-footer></app-shared-footer>
    `,
    styles: [`
        
    `]

})
export class Home2018Component {

}