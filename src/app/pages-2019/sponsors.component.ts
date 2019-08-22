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
            class="center-block space-bottom-20" alt="Diamond Sponsors" width="240px">
          </div>
          <div class="diamond">
            <div class="col-sm-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/coaster-logo.png" 
              class="center-block img-responsive coaster" alt="Coaster Sponsor Logo">
            </div><hr class="visible-xs" />
            <div class="col-sm-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/karastan-logo.png" 
              class="center-block img-responsive karastan" alt="Karastan Sponsor Logo">
            </div><hr class="visible-xs" />
            <div class="col-sm-offset-3 col-sm-6">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/spectra-home-logo.png" 
              class="center-block img-responsive space-bottom-80" alt="Coaster Sponsor Logo" width="323px">
            </div>
          </div>

          <!-- Platinum -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/platinum-sponsor.gif" 
            class="center-block space-bottom-20" alt="Platinum Sponsors" width="240px">
          </div>
          <div class="platinum">            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/bedford-logo.png" 
              class="center-block img-responsive bedford" alt="Bedford Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/classic-home-logo.png" 
              class="center-block img-responsive classic" alt="Classic Home Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/essentials-for-living-with-two-companies-logo.jpg" 
              class="center-block img-responsive essentials" alt="Essentials For Living Sponsor Logo">              
            </div><hr class="visible-xs" />            

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/dalyn-logo.png"
              class="center-block img-responsive" alt="Dalyn Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/universal-furniture-logo.png" 
              class="center-block img-responsive universal" alt="Universal Furniture Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/zoom-casa-logo.png" 
              class="center-block img-responsive zoom space-bottom-80" alt="Zoom Casa Sponsor Logo">
            </div>
          </div>

          <!-- Gold -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/gold-sponsor.gif" 
            class="center-block space-bottom-20" alt="Gold Sponsors" width="240px">
          </div>
          <div class="gold">
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/aflac-logo.png" 
              class="center-block aflac" alt="Aflac Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/artist-guild-of-america.jpg" 
              class="center-block img-responsive artist-guild" alt="Artist Guild of America Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/black-swan-boutique.png" 
              class="center-block img-responsive" alt="Black Swan Boutique Sponsor Logo">              
            </div><hr class="visible-xs" />
            
            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>         
            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/couture-cashmere-logo.png" 
              class="center-block couture-cashmere" alt="Couture Cashmere Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/cubiqz-logo.png" 
              class="center-block cubiqz" alt="Cubiqz Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/diamond-sofa-logo.png" 
              class="center-block img-responsive" alt="Diamond Sofa Logo">              
            </div><hr class="visible-xs" />

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/downtown-logo.png" 
              class="center-block img-responsive downtown" alt="Down Town Co Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/jutus-logo.png" 
              class="center-block jutus" alt="Jutus Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/ollix-logo.png" 
              class="center-block olliix" alt="Olliix Sponsor Logo">              
            </div><hr class="visible-xs" />

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>

            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/paragon-logo.png" 
              class="center-block paragon" alt="Paragon Sponsor Logo">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/propac-logo.png" 
              class="center-block propac" alt="Propac Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/rave-staging-redesign-logo.png" 
              class="center-block rave" alt="Rave Staging Redesign Sponsor Logo">
            </div><hr class="visible-xs" />

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>

            <div class="col-sm-offset-2 col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/sagebrook-home-logo.jpg" 
              class="center-block img-responsive" alt="Sagebrook Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/sherwin-williams-logo.png" 
              class="center-block sherwin-williams space-bottom-80" alt="Sherwin Williams Sponsor Logo">
            </div>    
          </div>

          <!-- Silver -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/silver-sponsor.gif" 
            class="center-block space-bottom-20" alt="Silver Sponsors" width="240px">
          </div>
          <div class="silver">
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/barb-schwarz-logo.png" 
              class="center-block barb" alt="Barb Schwarz Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/elk-group-logo.png" 
              class="center-block elk" alt="ELK Group Sponsor Logo">              
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/home-staging-and-redesign-association-logo.png" 
              class="center-block hsra" alt="Home Staging and Redesign Association Logo">
            </div><hr class="visible-xs" />            

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>
            
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/kmrd-partners-logo.png" 
              class="center-block kmrd" alt="KMRD Partners Company Logo">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/banners/shc-table-banner.jpg" 
              class="center-block" alt="Staged Homes Banner">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/stageforce-logo.png" 
              class="center-block stageforce space-bottom-80" alt="Stageforce Sponsor Logo">
            </div>
          </div>

          <!-- Bronze -->
          <div class="col-sm-12">
            <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/bronze-logo.png" 
            class="center-block space-bottom-20" alt="Bronze Sponsors" width="240px">
          </div>
          <div class="bronze">
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/decorating-and-staging-academy.jpg" 
              class="center-block dsa" alt="Decorating and Staging Academy Logo" width="135px">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/jlw-company-logo.jpg" 
              class="center-block jlw" alt="JLW Company Logo">
            </div><hr class="visible-xs" />
            <div class="col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/web/images/logos/the-successful-stager-logo.png" 
              class="center-block" alt="The Successful Stager Sponsor Logo">
            </div><hr class="visible-xs" />

            <div class="col-sm-12 hidden-xs clearfix space-bottom-30"></div>

            <div class="col-sm-offset-4 col-sm-4">
              <img src="https://d3oaxt0bwkjnjn.cloudfront.net/images/simply-splendid-logo.png" 
              class="center-block space-bottom-80 simply-splendid" alt="Simply Splendid Sponsor Logo" width="135px">
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
      .karastan {
        padding: 33px 0;
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
        padding: 71px 0;
      }
      .artist-guild {
        padding: 25px 0;
      }
      .couture-cashmere {
        padding: 43px 0;
      }
      .cubiqz {
        padding: 3px 0;
      }
      .downtown {
        padding: 8px 0;
      }
      .jutus {
        padding: 3px 0;
      }
      .olliix {
        padding: 16px 0;
      }
      .paragon {
        padding: 18px 0;
      }
      .propac {
        padding: 4px 0;
      }
      .rave {
        padding: 0;
      }
      .sherwin-williams {
        padding: 57px 0;
      }

      /* Silver */
      .barb {
        padding: 33px 0;
      }
      .elk, .hsra {
        padding: 76px 0;
      }
      .kmrd {
        padding: 26px 0;
        width: 26% !important;
      }
      .stageforce {
        padding: 25px 0;
        width: 48% !important;
      }
      
      /* Bronze */
      .jlw {
        padding: 7px 0;
      }      
    }
    
  `]
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
