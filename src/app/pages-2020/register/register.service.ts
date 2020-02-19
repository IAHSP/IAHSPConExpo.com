import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "./registerUser.model";

// rxjs
import "rxjs/Rx"; // used for .map

@Injectable()
export class RegisterService {
    // REST API Location
    strRegisterAPI: string;

    // Enable this if form needs to use test data.
    isTesting: boolean = false;

    // Stores user contents.
    objUser: User;
    
    constructor (private http: HttpClient) {
        if (this.isTesting) {
            this.strRegisterAPI = "https://us-central1-iahsp-31959.cloudfunctions.net/universal_register_lead/";
            
            // Contains user's info.
            this.objUser = {

                // Section 1: Personal Information
                fullName: "Duane Leem",
                email: "Duane@IAHSP.com",
                phone: "111-222-3333",

                // Sends to GCF location
                location: "Conference Lead",

                // Google reCaptcha
                googleResponse: null,

                // Google Sheet URL
                googleSheetURL: "1x5OAccOgYlJ5UVg2_7buT41oN1_c6xFZbL19SrIzRsk",

                // Google Sheet Tab
                googleSheetName: "2020 Conference leads",
            }; // objUser
        } else {
            this.strRegisterAPI = "https://us-central1-iahsp-31959.cloudfunctions.net/universal_register_lead/";
            
            // Contains user's info.
            this.objUser = {
                
                // Section 1: Personal Information
                fullName: null,
                email: null,
                phone: null,

                // Sends to GCF location
                location: "Conference Lead",

                // Google reCaptcha
                googleResponse: null,

                // Google Sheet URL
                googleSheetURL: "1x5OAccOgYlJ5UVg2_7buT41oN1_c6xFZbL19SrIzRsk",

                // Google Sheet Tab
                googleSheetName: "2020 Conference leads",
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
