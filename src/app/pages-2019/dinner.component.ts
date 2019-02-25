import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-dinner',
  template: `

  <section class="padding100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center"><strong>FRIDAY AWARDS DINNER</strong></h2>
          <h3 class="text-center">The Friday Gala &amp; Awards Dinner is INCLUDED with your ticket!</h3>
          <img alt="The Friday Gala & Awards Dinner at the General Jackson Showboat" class="center-block img-responsive" 
          src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/friday-gala-dinner-promo.jpg" width="600px" />
        </div>
      </div>
    </div>
  </section>

  `,
  styles: [`
  
    h2, h3 {
      color: #2D2926;
    }

  `]
})
export class Dinner2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
