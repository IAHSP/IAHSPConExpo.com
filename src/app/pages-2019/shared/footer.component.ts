import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-2019-footer',
  template: 
  `
    <footer>

      <!-- copyright, scrollTo Top -->
      <div class="footer-bar">
          <div class="container">
              <span class="copyright">Copyright &copy; IAHSP<sup>®</sup>. All Rights Reserved.</span>
              <a class="toTop" href="#topNav">BACK TO TOP <i class="fa fa-arrow-circle-up"></i></a>
          </div>
      </div><!-- /copyright, scrollTo Top -->

      <!-- footer content -->
      <div class="footer-content">
        <div class="container">
          <div class="row">

            <!-- FOOTER CONTACT INFO -->
            <div class="column col-md-4">
              <h3>CONTACT</h3>
              <address class="font-opensans">
                <ul>
                  <li class="footer-sprite address">
                    <a href="https://www.google.com/maps/place/11757+W+Ken+Caryl+Ave,+Littleton,+CO+80127/@39.5817463,-105.1339234,17z/data=!3m1!4b1!4m5!3m4!1s0x876b79341fd57d89:0x7e7cef4fcaf4d8e1!8m2!3d39.5817463!4d-105.1317347" target="_blank" rel="noopener">
                      11757 W Ken Caryl Ave., F402<br />
                      Littleton, CO 80127<br />
                    </a>
                  </li>
                  <li class="footer-sprite phone">
                    Phone: <a href="tel:18003927161">1-800-392-7161</a>
                  </li>
                  <li class="footer-sprite email">
                    <a href="mailto:christa@iahsp.com">christa@iahsp.com</a>
                  </li>
                </ul>
              </address>
            </div><!-- /FOOTER CONTACT INFO -->

            <!-- FOOTER LOGO -->
            <div class="column logo col-md-4 text-center">
              <div class="logo-content">
                <img class="animate_fade_in img-responsive" src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/logo-iahsp-footer.png" alt="IAHSP Footer logo" />
              </div>
            </div><!-- /FOOTER LOGO -->

            <!-- FOOTER LATEST POSTS -->
            <div class="column col-md-4 text-right">
              <div class="fb-page" data-href="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals">International Association of Home Staging Professionals</a></blockquote></div>
            </div><!-- /FOOTER LATEST POSTS -->

          </div>

        </div>
      </div><!-- /footer content -->

    </footer>
  `,
  styles: [``]
})
export class Footer2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
