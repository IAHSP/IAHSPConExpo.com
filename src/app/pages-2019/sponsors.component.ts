import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-sponsors',
  template: `
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center"><strong>SPONSORS</strong></h2>            
          </div>

          <!-- Diamond -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/diamond-sponsor.jpg" 
            class="center-block img-responsive space-bottom-20" alt="Diamond Sponsors" width="240px">
          </div>
          <div class="diamond">
            <div class="col-sm-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/coaster-logo.png" 
              class="center-block img-responsive coaster" alt="Coaster Sponsor Logo">
            </div>
            <hr class="visible-xs" />
            <div class="col-sm-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/spectra-home-logo.png" 
              class="center-block img-responsive space-bottom-80" alt="Coaster Sponsor Logo" width="323px">
            </div>
          </div>

          <!-- Platinum -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/platinum-sponsor.gif" 
            class="center-block img-responsive space-bottom-20" alt="Platinum Sponsors" width="240px">
          </div>
          <div class="platinum">            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/bedford-logo.png" 
              class="center-block img-responsive bedford" alt="Bedford Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/classic-home-logo.png" 
              class="center-block img-responsive classic" alt="Classic Home Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/essentials-for-living-with-two-companies-logo.jpg" 
              class="center-block img-responsive essentials" alt="Essentials For Living Sponsor Logo">
              <hr class="visible-xs" />
            </div>            

            <div class="clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/dalyn-logo.png"
              class="center-block img-responsive" alt="Dalyn Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/universal-furniture-logo.png" 
              class="center-block img-responsive universal" alt="Universal Furniture Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/zoom-casa-logo.png" 
              class="center-block img-responsive zoom space-bottom-80" alt="Zoom Casa Sponsor Logo">
            </div>
          </div>

          <!-- Gold -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/gold-sponsor.gif" 
            class="center-block img-responsive space-bottom-20" alt="Gold Sponsors" width="240px">
          </div>
          <div class="gold">
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/aflac-logo.png" 
              class="center-block img-responsive aflac" alt="Aflac Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/artist-guild-of-america.jpg" 
              class="center-block img-responsive" alt="Artist Guild of America Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/cubiqz-logo.png" 
              class="center-block img-responsive cubiqz" alt="Cubiqz Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            
            <div class="clearfix space-bottom-30"></div>

            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/diamond-sofa-logo.png" 
              class="center-block img-responsive" alt="Diamond Sofa Logo">
              <hr class="visible-xs" />
            </div>            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/jutus-logo.png" 
              class="center-block img-responsive jutus" alt="Jutus Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/ollix-logo.png" 
              class="center-block img-responsive olliix" alt="Olliix Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            
            <div class="clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/paragon-logo.png" 
              class="center-block img-responsive paragon" alt="Paragon Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/propac-logo.png" 
              class="center-block img-responsive propac" alt="Propac Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/rave-staging-redesign-logo.png" 
              class="center-block img-responsive" alt="Rave Staging Redesign Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            
            <div class="clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/sherwin-williams-logo.png" 
              class="center-block img-responsive sherwin-williams" alt="Sherwin Williams Sponsor Logo">
              <hr class="visible-xs" />
            </div>            

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/srm-staging-policy-logo.jpg" 
              class="center-block img-responsive srm" alt="SRM Staging Policy Sponsor Logo">
              <hr class="visible-xs" />
            </div>
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/banners/shc-table-banner.jpg" 
              class="center-block img-responsive space-bottom-80" alt="Staged Homes Banner">
            </div>
          </div>

          <!-- Silver -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/silver-sponsor.gif" 
            class="center-block img-responsive space-bottom-20" alt="Silver Sponsors" width="240px">
          </div>
          <div class="silver">
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/elk-group-logo.png" 
              class="center-block img-responsive elk" alt="ELK Group Sponsor Logo">              
            </div><hr class="visible-xs" />

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/home-staging-and-redesign-association-logo.png" 
              class="center-block img-responsive hsra" alt="Home Staging and Redesign Association Logo">
            </div><hr class="visible-xs" />

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/jlw-company-logo.jpg" 
              class="center-block img-responsive" alt="JLW Company Logo">
            </div><hr class="visible-xs" />

            <div class="clearfix"></div>

            <div class="col-sm-offset-4 col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/the-successful-stager-logo.png" 
              class="center-block img-responsive successful space-bottom-80" alt="The Successful Stager Sponsor Logo">
            </div>
          </div>

          <!-- Bronze -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/bronze-logo.png" 
            class="center-block img-responsive space-bottom-20" alt="Bronze Sponsors" width="240px">
          </div>
          <div class="bronze">
            <div class="col-sm-offset-2 col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/decorating-and-staging-academy.jpg" 
              class="center-block img-responsive space-bottom-80 dsa" alt="Decorating and Staging Academy Logo" width="135px">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/simply-splendid-logo.png" 
              class="center-block img-responsive space-bottom-80 simply-splendid" alt="Simply Splendid Sponsor Logo" width="135px">
            </div>
          </div>

          <div class="col-sm-12">
            <h2 class="text-center"><em><strong>and MORE being added every week!</strong></em></h2>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
  
    img { margin-bottom: 15px; }

    /* Gold */
    .gold img {
      width: 58%;
    }

    /* Silver */
    .silver img {
      width: 33%;
    }

    /* Bronze */
    .bronze img {
      width: 29%;
    }

    @media screen and (min-width: 768px) {
      /* Diamond */
      .coaster {
        padding: 78px 0;
      }

      /* Platinum */
      .bedford {
        padding: 58px 0;
      }
      .classic {
        padding: 47px 0;
      }
      .essentials {
        padding: 35px 0;
      }
      .universal {
        padding: 69px 0;
      }
      .zoom {
        padding: 57px 0;
      }

      /* Gold */
      .aflac {
        padding: 45px 0;
      }
      .cubiqz {
        padding: 31px 0;
      }
      .jutus {
        padding: 3px 0;
      }
      .olliix {
        padding: 22px 0;
      }
      .paragon {
        padding: 34px 0;
      }
      .propac {
        padding: 10px 0;
      }
      .sherwin-williams {
        padding: 79px 0;
      }
      .srm {
        padding: 62px 0;
      }

      /* Silver */
      .elk, .successful, .hsra {
        padding: 33px 0;
      }
    }
    
  `]
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
