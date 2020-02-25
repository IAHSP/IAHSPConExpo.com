import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-shared-2020-header',
  template: 
  `
    <!-- Top Bar -->
    <header id="topHead">
      <div class="container">

        <!-- PHONE/EMAIL -->
        <span class="quick-contact pull-left">
          <i class="fa fa-phone"></i>&nbsp;<a href="tel:8444247799">844-IAHSP99</a>
          <span class="hidden-xs"><a href="mailto:help@iahsp.com"><i class="fa fa-envelope-o"></i> Help@IAHSP.com</a></span>
        </span><!-- /PHONE/EMAIL -->

        <div class="pull-right">
          <a href="https://iahsp.com/" target="_blank" rel="noopener"><i class="fa fa-external-link"></i> IAHSP.com</a>
        </div>

        <!-- LINKS -->
        <div class="pull-right nav hidden-xs">
          <a href="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals/" target="_blank" rel="noopener"><i class="fa fa-facebook fa-lg"></i></a>
          <a href="https://iahspblog.com/blog/" target="_blank" rel="noopener">BLOG</a>
        </div>
      </div>
    </header><!-- /Top Bar -->

    <header id="topNav" class="topHead">
      <div class="container">

        <!-- Mobile Menu Button -->
        <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Logo text or image -->
        <a class="logo" href="/">
          <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/logo.jpg" class="height-100p" alt="IAHSP" />
        </a>

        <!-- Top Nav -->
        <div class="navbar-collapse nav-main-collapse collapse pull-right">
          <nav class="nav-main mega-menu">
            <ul class="nav nav-pills nav-main scroll-menu" id="topMain">
              <li><a href="#wrapper" class="scrollTo">Home</a></li>              
              <li class="dropdown">
                <a class="dropdown-toggle" href="#">
                    <i class="fa fa-angle-down"></i>Information
                </a>
                  <ul class="dropdown-menu">
                    <li><a href="#ks" class="scrollTo">Keynote Speakers</a></li>
                    <li><a href="#vfs" class="scrollTo">Vision for Success</a></li>
                    <li><a href="#cde" class="scrollTo">NEW Designation - IAHSP-CDE</a></li>
                    <li><a href="#ggg" class="scrollTo">Great Gatsby Gala</a></li>
                    <li><a href="#ast" class="scrollTo">Advanced Stager Training</a></li>
                    <li><a href="#hotel" class="scrollTo">Gaylord Rockies Hotel</a></li>
                  </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#">
                    <i class="fa fa-angle-down"></i>Past Events
                </a>
                  <ul class="dropdown-menu">                    
                    <li><a href="/2019">2019</a></li>
                    <li><a href="/2018">2018</a></li>
                  </ul>
              </li>
              <li class="space-right-5"><a class="scrollTo" href="#contactus">Contact Us</a></li>
              <li><div><a href="/register" rel="noopener" class="btn btn-primary btn-sm color-white float-left">Register Now</a></div></li>
            </ul>
          </nav>
        </div><!-- /Top Nav -->

      </div>
    </header>
  `,
  styles: [``]
})

export class Header2020Component implements OnInit {

  constructor() { }

  ngOnInit() {}

}
