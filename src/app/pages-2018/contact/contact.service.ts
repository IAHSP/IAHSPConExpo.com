import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { User } from "./user.model";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class JobApplicationService {
    // REST API Location
    strRegisterAPI: string;

    // Enable this if form needs to be tested.
    isTesting: boolean = false;

    // Stores user contents.
    objUser: User;
    
    constructor (private http: Http) {
        if (this.isTesting) {
            this.strRegisterAPI = "http://localhost:3003/forms/secure-forms/changessalon/job-application";
            
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
                sfSignature: null, sfSignatureDate: null,
                googleResponse: null
            }; // objUser
        } else {
            this.strRegisterAPI = "https://leemtek.com/forms/secure-forms/changessalon/job-application";
            
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
                sfSignature: null, sfSignatureDate: null,
                googleResponse: null
            }; // objUser
        }
    } // constructor

    // Send Payment and Registration
    mdSendData(objFinalUserInfo: any) {
        const strBody = JSON.stringify(objFinalUserInfo);
        const constHeaders = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strRegisterAPI, strBody, { headers: constHeaders })
            .map((data: Response) => data.json())
        ; // this.http.post()
    } // mdSendData
} // RegisterService