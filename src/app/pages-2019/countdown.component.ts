import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-countdown',
  template: `
  
    <section class="padding100 parallax">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2><a href="https://cvent.me/dZKd4" target="_blank" rel="noopener"><strong>Register</strong></a> By The Deadline - unless we are SOLD OUT</h2>
            <h3>October 2, 2019 11:59 PM</h3>
            <div id="demo"></div>
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [`
  
    section {
      background-color: #2D2926;      
    }
  
  `]
})
export class Countdown2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
