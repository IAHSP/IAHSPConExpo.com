import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shared-2020-header",
  template: `
    <!-- Top Bar -->
    <header id="topHead">
      <div class="container">
        <!-- PHONE/EMAIL -->
        <span class="quick-contact pull-left">
          <i class="fa fa-phone"></i>&nbsp;<a href="tel:8444247799"
            >844-IAHSP99</a
          >
          <span class="hidden-xs"
            ><a href="mailto:christa@iahsp.com"
              ><i class="fa fa-envelope-o"></i> christa@iahsp.com</a
            ></span
          > </span
        ><!-- /PHONE/EMAIL -->

        <div class="pull-right">
          <a href="https://iahsp.com/" target="_blank" rel="noopener"
            ><i class="fa fa-external-link"></i> IAHSP.com</a
          >
        </div>

        <!-- LINKS -->
        <div class="pull-right nav hidden-xs">
          <a
            href="https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals/"
            target="_blank"
            rel="noopener"
            ><i class="fa fa-facebook fa-lg"></i
          ></a>
          <a href="https://iahspblog.com/blog/" target="_blank" rel="noopener"
            >BLOG</a
          >
        </div>
      </div>
    </header>
    <!-- /Top Bar -->

    <header id="topNav" class="topHead">
      <div class="container">
        <!-- Mobile Menu Button -->
        <button
          class="btn btn-mobile"
          data-toggle="collapse"
          data-target=".nav-main-collapse"
        >
          <i class="fa fa-bars"></i>
        </button>

        <!-- Logo text or image -->
        <a class="logo" href="/2021">
          <img
            src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/logo.jpg"
            class="height-100p"
            alt="IAHSP"
          />
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
                  <li><a href="#soar" class="scrollTo">SOAR</a></li>
                  <li><a href="#sms" class="scrollTo">Sales and Marketing Specialist</a></li>
                  <li><a href="#ks" class="scrollTo">Keynote Speakers</a></li>
                  <li><a href="#vendors" class="scrollTo">Vendors</a></li>
                  <li><a href="#ast" class="scrollTo">Advanced Stager Training</a></li>
                  <li><a href="#ggg" class="scrollTo">Great Gatsby Gala</a></li>
                  <li><a href="#agenda" class="scrollTo">Agenda</a></li>
                  <li><a href="#hotel" class="scrollTo">Gaylord Rockies Resort</a></li>
                  <li><a href="#iahsp2019promo" class="scrollTo">IAHSP 2019 Promo</a></li>
                  <li><a href="#pticket" class="scrollTo">Priority Ticket</a></li>
                  <li><a href="#covid" class="scrollTo">COVID Safety Measures</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#">
                  <i class="fa fa-angle-down"></i>Past Events
                </a>
                <ul class="dropdown-menu">
                  <li><a href="/">2023</a></li>
                  <li><a href="https://iahspvirtualconexpo.com/" target="_blank" rel="noopener noreferrer">2020</a></li>
                  <li><a href="/2019">2019</a></li>
                  <li><a href="/2018">2018</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /Top Nav -->
      </div>
    </header>
  `,
  styles: [``],
})
export class Header2020Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
