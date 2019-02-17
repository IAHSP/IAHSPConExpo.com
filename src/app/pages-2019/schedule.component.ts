import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-schedule',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">SCHEDULE OF EVENTS</h2>

            <p class="lead font-weight-400 text-center">You are going to be inspired to ROCK Your Business with<br />
            what you learn at our 2019 IAHSP<sup>®</sup> Conference & EXPO!</p>

            <p class="lead text-center">We are working on specifics but general timing is below</p>

            <table class="table table-bordered lead">
              <tbody>
                <tr>
                  <th scope="row" width="33%">DATE &amp; TIME</th>
                  <th>EVENTS</th>
                </tr>
                <tr>
                  <td scope="row">Thursday, Oct 3: 5:00 PM</td>
                  <td>Registration and Vendor EXPO</td>
                </tr>
                <tr>
                  <td scope="row">Friday, Oct 4: 9:00 AM</td>
                  <td>Education Sessions, Breakout Sessions and Keynote Speaker</td>
                </tr>
                <tr>
                  <td scope="row">Friday, Oct 4: 7:00 PM</td>
                  <td><a href="#dinner" class="scrollTo">Awards Dinner</a></td>
                </tr>
                <tr>
                  <td scope="row">Saturday, Oct 6: 9:30 AM</td>
                  <td>Education Sessions and Keynote Speaker</td>
                </tr>
                <tr>
                  <td scope="row">Saturday</td>
                  <td>After Conference Ends we will have an After-Party!</td>
                </tr>
                <tr>
                  <td scope="row">Sunday &amp; Monday, Oct 6-7</td>
                  <td>Advanced Stager Training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class Schedule2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
