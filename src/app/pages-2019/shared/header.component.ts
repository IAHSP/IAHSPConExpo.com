import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-shared-2019-header',
  template: 
  `
    <!-- Top Bar -->
    <header id="topHead">
      <div class="container">

        <!-- PHONE/EMAIL -->
        <span class="quick-contact pull-left">
          <i class="fa fa-phone"></i> <a href="tel:8003927161">800-392-7161</a>
          <span class="hidden-xs">&bull; <a href="mailto:help@iahsp.com"><i class="fa fa-envelope-o"></i> Help@IAHSP.com</a></span>
        </span><!-- /PHONE/EMAIL -->

        <div class="pull-right">
          <a href="https://iahsp.com/" target="_blank" rel="noopener"><i class="fa fa-external-link"></i> IAHSP.com</a>
        </div>

        <!-- LINKS -->
        <div class="pull-right nav hidden-xs">
          <a href="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals/" target="_blank" rel="noopener"><i class="fa fa-facebook fa-lg"></i></a>
          <a href="https://plus.google.com/111999019043473881716" target="_blank" rel="noopener"><i class="fa fa-google-plus fa-lg"></i></a>
          <a href="https://iahspblog.com/blog/" target="_blank" rel="noopener"><i class="fa fa-wordpress fa-lg"></i></a>
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
        <a class="logo scrollTo" href="#wrapper">
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
                    <li><a href="#event" class="scrollTo">Event Summary</a></li>
                    <li><a href="#speakers" class="scrollTo">Speakers</a></li>
                    <li><a href="#schedule" class="scrollTo">Schedule of Events</a></li>
                    <li><a href="#dinner" class="scrollTo">Friday Awards Dinner</a></li>
                    <li><a href="#designation" class="scrollTo">NEW Designation</a></li>
                    <li><a href="#hotel" class="scrollTo">Hotel Information</a></li>
                  </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#">
                    <i class="fa fa-angle-down"></i>Past Events
                </a>
                  <ul class="dropdown-menu">                    
                    <li><a href="/iahsp2018">2018</a></li>
                  </ul>
              </li>
              <li class="space-right-5"><a class="scrollTo" href="#contact">Contact Us</a></li>
              <li><div><a href="https://cvent.me/dZKd4" target="_blank" rel="noopener" class="btn btn-primary btn-sm color-white float-left">Register Now</a></div></li>
            </ul>
          </nav>
        </div><!-- /Top Nav -->

      </div>
    </header>
  `,
  styles: [``]
})

export class Header2019Component implements OnInit {

  constructor() { }

  ngOnInit() {}

}
