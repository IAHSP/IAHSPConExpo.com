import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shared-header-2018",
  template: `
    <!-- Top Bar -->
    <header id="topHead">
      <div class="container androidFix">
        <!-- PHONE/EMAIL -->
        <span class="quick-contact pull-left">
          <i class="fa fa-phone"></i>&nbsp;<a href="tel:8444247799"
            >844-IAHSP99</a
          >
          <!-- <span class="hidden-xs"
            >&bull;&nbsp;
            <a href="mailto:christa@iahsp.com"
              ><i class="fa fa-envelope-o"></i> christa@iahsp.com</a
            ></span
          > --> </span
        > <!-- /PHONE/EMAIL -->

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
            ><i class="fa fa-wordpress fa-lg"></i
          ></a>
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
        <a class="logo" href="/2018">
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
              <li><a href="/2018">Home</a></li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#">
                  <i class="fa fa-angle-down"></i>Past Events
                </a>
                <ul class="dropdown-menu">
                  <li><a href="/">2023</a></li>
                  <li><a href="/2021">2021</a></li>
                  <li><a href="https://iahspvirtualconexpo.com/" target="_blank" rel="noopener noreferrer">2020</a></li>
                  <li><a href="/2019">2019</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /Top Nav -->
      </div>
    </header>
  `,
  styles: [
    `
      #topHead.fixed {
        position: relative !important;
      }

      .topHead {
        position: absolute !important;
      }
      .androidFix {
        overflow: hidden;
      }

      #btnRegister {
        margin: 2px 0px 0px 10px;
      }

      @media only screen and (max-width: 990px) {
        header li > div > a[href="https://iahsp.com"]
        {
          text-align: left;
        }
      }

      @media only screen and (min-width: 991px) {
        header li > div > a[href="https://iahsp.com"]
        {
          color: #fff !important;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
}
