import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-2018-vendors',
    template: `
        <section class="padding100 bg-white">
            <div class="container">
                <h2 class="text-center">Vendors</h2>
                <div [innerHTML]="strVendorContents"></div>

                <!-- CALL FOR SPEAKERS -->
                <div class="row">
                    <div class="col-lg-10 col-lg-offset-1">
                        <div class="text-center space-bottom-20"><a routerLink="/iahsp2018/contact2018" class="btn btn-primary btn-lg scrollTo"><strong>Contact Us</strong></a></div>
                    </div><!-- /col -->
                </div><!-- /row -->
            </div><!-- /container -->
        </section>
    `
})
export class Vendors2018Component {
    strVendorContents: string;

    constructor(private http: HttpClient) {
        this.fnFetchWP();
    }
    
    /**
     * Store WP endpoint to variable.
     */
    private fnFetchWP() {
        // Settings
        let strUrl = "https://pages.iahsp.com/wp-json/wp/v2/pages/75";

        // Extract WP API.
        this.http.get(strUrl).subscribe(data => {
            this.strVendorContents = data["content"].rendered;
        })
    } // fnFetchWP()
}