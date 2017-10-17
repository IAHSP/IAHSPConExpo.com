import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-2018-vendors',
    template: `
        <section class="padding100 bg-white">
            <div class="container ng-scope">
                <h1 class="text-center"><strong>Vendors</strong></h1>

                <div [innerHTML]="strVendorContents"></div>

                <!-- CALL FOR SPEAKERS -->
                <div class="row space-top-40">
                    <div class="col-lg-10 col-lg-offset-1">
                        <div class="text-center space-bottom-20"><a href="#contact" class="btn btn-primary btn-lg scrollTo"><strong>Contact Us</strong></a></div>
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

        // Consume WP API.
        this.http.get(strUrl).subscribe(data => {
            this.strVendorContents = data["content"].rendered;
            console.log(this.strVendorContents);
        })
    } // fnFetchWP()
}