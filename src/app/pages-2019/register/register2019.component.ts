import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Header2019Component } from "../shared/header.component";
import { Footer2019Component } from "../shared/footer.component";
import { RegisterService } from "./register.service";

@Component({
  selector: 'app-register2019',
  templateUrl: './register2019.component.html',
  styleUrls: ['./register2019.component.css'],
  providers: [RegisterService]
})
export class Register2019Component {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    objUser;

  constructor(private registerService: RegisterService) {
    this.objUser = registerService.objUser;
  }

  // Send to REST endpoint.
  mdSend() {
    // Disable submit button and indicate "Please wait...".
    document.getElementById("btnSubmit").textContent = "Please Wait...";
    document.getElementById("btnSubmit").classList.remove("btn-primary");
    document.getElementById("btnSubmit").classList.add("btn-info");
    (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

    // Attempt to send email.
    this.contactService.mdSendData(this.objUser)
      .subscribe(response => {
        console.log(response["status"]);
        if (response["status"] === "email sent") {
          // Success
          document.getElementById("btnSubmit").textContent = "Email Sent!";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-success");
          (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;
        } else {
          // Something went wrong.
          document.getElementById("btnSubmit").textContent = "Please try again.";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-danger");
          (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = false;

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
