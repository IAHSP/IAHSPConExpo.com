import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "./user.model";

// rxjs
import "rxjs/Rx"; // used for .map

@Injectable()
export class ContactService {
    // REST API Location
    strRegisterAPI: string;

    // Enable this if form needs to use test data.
    isTesting: boolean = false;

    // Stores user contents.
    objUser: User;
    
    constructor (private http: HttpClient) {
        if (this.isTesting) {
            this.strRegisterAPI = "http://localhost:5002/iahsp-31959/us-central1/iahspconexpo/contact-form";
            // this.strRegisterAPI = "https://us-central1-iahsp-31959.cloudfunctions.net/iahspconexpo/contact-form";
            
            // Contains user's info.
            this.objUser = {
                /* ========================================================
                    Section 1: Personal Information
                ======================================================== */
                strFullName: "Duane Leem",
                strEmail: "Duane@IAHSP.com",
                strSubject: "Just a test.",
                strMessage: "Test email from the upgraded IAHSPConExpo.com",

                /* ========================================================
                    Final Section: Google reCaptcha
                ======================================================== */
                googleResponse: null
            }; // objUser
        } else {
            this.strRegisterAPI = "https://us-central1-iahsp-31959.cloudfunctions.net/iahspconexpo/contact-form";
            
            // Contains user's info.
            this.objUser = {
                /* ========================================================
                    Section 1: Personal Information
                ======================================================== */
                strFullName: null,
                strEmail: null,
                strSubject: null,
                strMessage: null,

                /* ========================================================
                    Final Section: Google reCaptcha
                ======================================================== */
                googleResponse: null
            }; // objUser
        }
    } // constructor

    // Send Payment and Registration
    mdSendData(objFinalUserInfo: any) {
        const strBody = JSON.stringify(objFinalUserInfo);
        const objHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(this.strRegisterAPI, strBody, { headers: objHeaders });
    } // mdSendData
} // RegisterService