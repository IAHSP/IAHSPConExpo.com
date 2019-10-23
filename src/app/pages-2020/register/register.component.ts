import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Header2020Component } from "../shared/header.component";
import { Footer2020Component } from "../shared/footer.component";
import { RegisterService } from "./register.service";

@Component({
  selector: 'app-register2020',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class Register2020Component {
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
    this.registerService.mdSendData(this.objUser)
      .subscribe(response => {
        console.log(response["status"]);
        if (response["status"] === "email sent") {
          // Success
          document.getElementById("btnSubmit").textContent = "Email Sent!";
          document.getElementById("btnSubmit").classList.remove("btn-info");
          document.getElementById("btnSubmit").classList.add("btn-success");
          (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

          // Successful submission, so lets redirect
          window.location.href = 'https://cvent.me/RqqGLR';
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
