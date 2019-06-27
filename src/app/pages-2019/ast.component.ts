import { Component, OnInit } from '@angular/core';
import { astList } from './shared/speakers';



@Component({
  selector: 'app-2019-ast',
  template: `
  
    <section class="padding100">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center"><strong>Advanced Stager Training (AST)</strong></h2>

            <p class="lead"><strong>Advanced Stager Training (AST)</strong> is a workshop intensive coordinated by IAHSP and offered in 
            <strong>collaboration</strong> with other industry leaders.  We believe in the collective genius found when we bring like-minded people 
            together.  Our industry has many talented, knowledgeable and highly successful individuals who own and operate Staging Associations, 
            Coaching Businesses, and Training Companies.  Tapping into the collective minds of these respected individuals who will help 
            facilitate meaningful, honest and open conversations with 6+ Figure Home Staging Business Owners results in synergy found only 
            in a collective collaboration.</p>

            <img alt="Advanced Stager Training 2019 Promo" src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/ast-2019-promo-flyer.jpg" 
            class="space-bottom-40 center-block img-responsive" width="600px">

            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/advance-stager-training-logo.jpg" class="center-block img-responsive space-bottom-15" 
            alt="Advance Stager Training Logo">

            <div class="row">
              <div class="col-md-12 space-bottom-40">
                <ul class="no-bullets padding-left-0">
                  <ng-container *ngFor="let ast of asts; let i = index;">
                    <div *ngIf="(ast % 3) == 0" class="clearfix visible-md"></div>
      
                    <!-- asts -->
                    <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                      <div class="item-box">
                        <figure>
                          <img class="img-responsive center-block" src="{{ ast.image }}" alt="{{ ast.name }}">
                        </figure>
                        <div class="item-box-desc">
                          <h4 class="space-bottom-8 text-center">{{ ast.name }}<br />
                          <small class="text-center">{{ ast.company }}</small></h4>
                          <h5 class="text-center">{{ ast.title }}</h5>                         
                        </div>
                      </div>
                    </li>
                    <!-- /asts -->

                    <div class="clearfix visible-sm visible-md" *ngIf="( i + 1 ) % 3 == 0"></div>
                    <div class="clearfix visible-lg" *ngIf="( i + 1 ) % 4 == 0"></div>
                  </ng-container>
                </ul>
              </div>
            </div>

            <p class="lead text-center"><strong>This year, we are excited to have six workshop facilitators who are very qualified to be part of this event:</strong></p>

            <p class="lead text-center">Advanced Stager Training Day<br />
            <strong>Oct 6 & 7, 2019</strong><br />
            Nashville<br />
            $499<br />
            When you register for BOTH the 2019 IAHSP Conference & EXPO and the ASTl you can save $75.00. Use code AST75</p>
            
            <div class="text-center">
              <a href="https://pages.iahsp.com/advanced-stager-training/" class="btn btn-primary color-white">Register Now</a>
            </div>            
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
  
    h2, p {
      color: #2D2926;
    }

    h4 > small {
      line-height: 1.2;
      margin-top: 2px;
    }

    .no-bullets {
      list-style: none;
    }

  `]
})
export class Ast2019Component implements OnInit {

  asts = astList;

  constructor() { }

  ngOnInit() {
  }

}
