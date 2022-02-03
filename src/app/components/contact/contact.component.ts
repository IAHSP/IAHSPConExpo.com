import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

import { ContactService } from "./contact.service";

@Component({
  selector: `app-contact`,
  template: `
    <section id="contact-us" class="padding100">
      <div class="container">
        <h1 class="text-center">Contact Us <strong><em>Today!</em></strong></h1>
    
        <!-- divider -->
        <div class="divider styleColor">
          <i class="fa fa-star"></i>
        </div>
    
        <div class="row">
    
          <!-- FORM -->
          <div class="col-md-8">
    
            <p class="lead">If you have questions about the IAHSP<sup>&reg;</sup> 2023 Educational Conference, just send us
              a message in the form below with any questions you may have.</p>
    
            <form role="form" name="formContactUs" class="white-row" #form="ngForm" novalidate="">
              <div class="row">
                <div class="form-group">
                  <div class="col-md-6">
                    <label>Full Name *</label>
                    <input type="text" class="form-control" maxlength="100" name="frmName" [(ngModel)]="objUser.strFullName"
                      required /><!-- /frmName -->
                  </div>
                  <div class="col-md-6">
                    <label>E-mail Address *</label>
                    <input type="email" class="form-control" maxlength="100" name="frmEmail" [(ngModel)]="objUser.strEmail"
                      required /><!-- /frmEmail -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Subject</label>
                    <input type="text" class="form-control" maxlength="100" name="frmSubject"
                      [(ngModel)]="objUser.strSubject" required /><!-- /frmSubject -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Message *</label>
                    <textarea name="frmMessage" rows="10" maxlength="5000" class="form-control"
                      [(ngModel)]="objUser.strMessage" required></textarea><!-- /frmMessage -->
                  </div>
                </div>
              </div>
    
              <br />
    
              <div class="row">
                <div class="col-md-12">
                  <re-captcha (captchaResponse)="mdCaptchaHandle($event)" (captchaExpired)="mdCaptchaExpired()"
                    site_key="6Lci7RsUAAAAAPHt32HGEiSlk5sAHBLSL-z2MqN-"></re-captcha>
                </div>
              </div>
    
              <br />
    
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-default space-right-5">Clear</button>
                  <button type="button" id="btnSubmit" class="btn btn-primary space-right-10"
                    [disabled]="form.invalid || objUser.googleResponse == null" (click)="mdSend()">Send
                    Message</button>
                </div>
              </div>
            </form>
          </div><!-- /FORM -->
    
          <!-- INFO -->
          <div class="col-md-4">
    
            <h2>Visit Us</h2>
    
            <div class="white-row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.77991525966!2d-90.02299040576091!3d30.0329218845752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA!5e0!3m2!1sen!2sus!4v1643746765643!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    
              <!-- divider -->
              <div class="divider white half-margins">
                <i class="fa fa-star"></i>
              </div>
    
              <p class="nomargin-bottom">
                <span class="block"><strong><i class="fa fa-phone"></i> Phone: </strong><a href="tel:8444247799">844-IAHSP99</a></span>
                <span class="block"><strong><i class="fa fa-envelope"></i> Email: </strong><a href="mailto:christa@iahsp.com">christa@iahsp.com</a></span>
              </p>
    
            </div>
          </div><!-- /INFO -->
        </div>
      </div>
    </section>
  `,
  styles: [``],
  providers: [ContactService]
})
export class ContactComponent {
  @ViewChild(ReCaptchaComponent, { static: false }) captcha: ReCaptchaComponent;
  objUser;

  constructor(private contactService: ContactService) {
    this.objUser = contactService.objUser;
  } // constructor()

  // Send to REST endpoint.
  mdSend() {

    // Disable submit button and indicate "Please wait...".
    document.getElementById("btnSubmit").textContent = "Please Wait...";
    document.getElementById("btnSubmit").classList.remove("btn-primary");
    document.getElementById("btnSubmit").classList.add("btn-info");
    (<HTMLInputElement>document.getElementById("btnSubmit")).disabled = true;

    // Attempt to send email.
    this.contactService.mdSendData(this.objUser)
      .subscribe(response => {
        if (response["status"] === "email sent") {

          // Success
          document.getElementById("btnSubmit").textContent = "Email Sent!";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-success");
          (<HTMLInputElement>document.getElementById("btnSubmit")).disabled = true;
        } else {

          // Something went wrong.
          document.getElementById("btnSubmit").textContent = "Please try again.";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-danger");
          (<HTMLInputElement>document.getElementById("btnSubmit")).disabled = false;

          // Reset captcha.
          this.objUser.googleResponse = null;
          this.captcha.reset();
        } // else
      }) // subscribe()
      ; // sendEmailService.mdSendData()
  } // mdSend()

  // Handle the captcha response and save to objUserDetails.captchaResponse
  mdCaptchaHandle(strResponse: string): void {
    this.objUser.googleResponse = strResponse;
  } // mdCaptchaHandle(response)

  // Handles expired captchas.
  mdCaptchaExpired(): void {
    this.objUser.googleResponse = null;
    this.captcha.reset();
  }
}