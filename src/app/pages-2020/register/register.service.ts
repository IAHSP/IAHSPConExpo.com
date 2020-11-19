import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  constructor(private http: HttpClient) {
    if (this.isTesting) {
      this.strRegisterAPI =
        "https://us-central1-iahsp-31959.cloudfunctions.net/universal_register_lead/v2/";

      this.objUser = {
        // Add and customize key/values
        lead: {
          fullName: null,
          email: null,
          phone: null,
          location: "IAHSP 2021 Conference and Expo",
          date: new Date().toLocaleDateString("en-US"),
        },

        // Google reCaptcha
        googleResponse: null,

        // Google Sheet URL
        googleSheetURL: "1x5OAccOgYlJ5UVg2_7buT41oN1_c6xFZbL19SrIzRsk",

        // Google Sheet Tab
        googleSheetName: "2021 IAHSP Conference and Expo",
      }; // objUser
    } else {
      this.strRegisterAPI =
        "https://us-central1-iahsp-31959.cloudfunctions.net/universal_register_lead/v2/";

      this.objUser = {
        // Add and customize key/values
        lead: {
          fullName: null,
          email: null,
          phone: null,
          location: "IAHSP 2021 Conference and Expo",
          date: new Date().toLocaleDateString("en-US"),
        },

        // Google reCaptcha
        googleResponse: null,

        // Google Sheet URL
        googleSheetURL: "1x5OAccOgYlJ5UVg2_7buT41oN1_c6xFZbL19SrIzRsk",

        // Google Sheet Tab
        googleSheetName: "2021 IAHSP Conference and Expo",
      }; // objUser
    }
  } // constructor

  // Send Payment and Registration
  mdSendData(objFinalUserInfo: any) {
    const strBody = JSON.stringify(objFinalUserInfo);
    const objHeaders = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post(this.strRegisterAPI, strBody, {
      headers: objHeaders,
    });
  } // mdSendData
} // RegisterService
