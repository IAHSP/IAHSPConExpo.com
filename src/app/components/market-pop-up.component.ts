import { Component, OnInit } from "@angular/core";

// jQuery
declare let jQuery: any;

@Component({
  selector: "app-market-pop-up",
  template: `

    <!-- Marketing Pop-up -->
    <div id="market-pop-up" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="space-bottom-40">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="row">
              <div class="col-md-12 space-bottom-40">
                <img src="http://d3oaxt0bwkjnjn.cloudfront.net/images/virtual-2021-iahsp-con-expo-logo.png"
                  alt="IAHSP 2021 Virtual Conference and Expo" class="center-block img-responsive space-bottom-15" width="330px" />
                <p class="text-center"><strong>You can now attend our 2021 IAHSP Conference & Expo LIVE VIRTUALLY or purchase 
                  and view later.</strong></p>
                <p class="text-center">This is THE Home Staging and Real Estate Industry Event of the YEAR! Only IAHSP invests the resources 
                  needed to bring you top notch speakers sharing on timely topics.</p>
                <p class="text-center">Tickets to join are $299 + Processing fee!</p>
                <div class="text-center">
                  <a href="https://cvent.me/34QM99" class="btn btn-primary" target="_blank"
                    rel="noopener noreferrer">Register Now</a>
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-danger pull-right space-bottom-15" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div><!-- /Marketing Pop-up-->
  `,
  styles: [``],
})
export class MarketPopUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const minutes = new Date();
    let currMinutes: any = minutes.getMinutes();

    if (localStorage.marketPopUp >= 64) {
      localStorage.removeItem('marketPopUp');
    }

    if (!localStorage.marketPopUp || JSON.stringify(currMinutes) >= localStorage.marketPopUp) {

      // Marketing Pop-Up
      jQuery(window).load(function () {
        jQuery('#market-pop-up').modal('show');
      });

      localStorage.setItem('marketPopUp', currMinutes + 5);
    } else {
      
    };
  }
}
