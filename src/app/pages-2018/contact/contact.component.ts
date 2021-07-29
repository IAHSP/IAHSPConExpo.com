import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

import { ContactService } from "./contact.service";

@Component({
    selector: 'app-2018-contact',
    templateUrl: "./contact.html",
    styles: [`
        button {
            margin: 0 5px 5px 0;
        }
    `],
    providers: [ContactService]
})
export class Contact2018Component {
    @ViewChild(ReCaptchaComponent, {static: false}) captcha: ReCaptchaComponent;
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
        (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

        // Attempt to send email.
        this.contactService.mdSendData(this.objUser)
            .subscribe(response => {
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