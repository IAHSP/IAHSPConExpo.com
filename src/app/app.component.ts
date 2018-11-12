import { Component } from '@angular/core';

declare var $;

@Component({
    selector: 'app-root',
    template: `
        <!-- Modal -->
        <div class="modal fade" id="iahspconexpotexting" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/iahsp-text-promo.png" class="center-block img-responsive" alt="IAHSP Text Promo">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-dark" data-dismiss="modal" (click)="isOptedOut()">I'm not interested</button>
                        <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Remind me later</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Homepage -->
        <app-2019-home></app-2019-home>
    `
})
export class AppComponent {
    ngAfterViewInit() {
      // Launch modal.
      this.launchModal();
    } // ngAfterViewInit()

    /**
     * Launches modal.
     */
    private launchModal = () => {
      if (localStorage.getItem("isOptedOutTexting") === "true") {
        // Do nothing 
      } else {
        $("#iahspconexpotexting").modal('show');
      } // if
    } // launchModal()

    /**
     * Closes modal.
     */
    public closeModal = () => {
      $("#iahspconexpotexting").modal('hide');
    } // closeModal()
  
    /**
     * User opted out of text messaging.
     */
    public isOptedOut = () => {
      localStorage.setItem("isOptedOutTexting", "true");
    } // isOptedOut()
}
