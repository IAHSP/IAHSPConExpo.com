import { Component, OnInit  } from '@angular/core';

@Component({
    selector: 'app-shared-header-2018',
    template: `
        
		<!-- Top Bar -->
		<header id="topHead">
			<div class="container">

				<!-- PHONE/EMAIL -->
				<span class="quick-contact pull-left">
                    <i class="fa fa-phone"></i> <a href="tel:8003927161">800-392-7161</a>
                    <span class="hidden-xs">&bull;&nbsp;  <a href="mailto:help@iahsp.com"><i class="fa fa-envelope-o"></i> Help@IAHSP.com</a></span>
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
                            <li class="active"><a class="scrollTo" href="#wrapper">Home</a></li>
                            <li class="dropdown">
								<a class="dropdown-toggle" href="#">
									Information <i class="fa fa-angle-down"></i>
								</a>
                                <ul class="dropdown-menu">
                                    <li><a class="scrollTo" href="#scott">Keynote Speakers</a></li>
                                    <li><a class="scrollTo" href="#sponsors">Sponsors</a></li>
									<li><a class="scrollTo" href="#speakershelp">Speakers</a></li>
                                    <li><a class="scrollTo" href="#vendors">Vendors</a></li>
                                    <li><a class="scrollTo" href="#hotel">Hotel</a></li>
                                    <li><a class="scrollTo" href="#wholesale">High Point Wholesale Experience</a></li>
                                    <li><a class="scrollTo" href="#ast">Advance Stager Training</a></li>
                                    <li><a class="scrollTo" href="#ccs">Confident Color System</a></li>
                                    <li><a class="scrollTo" href="#lhsiahsp">Luxury Home Staging</a></li>
                                    <li><a class="scrollTo" href="#stageindustawards">Staging Industry Awards</a></li>
								</ul>
							</li>
                            <li><a class="scrollTo" routerLink="contact2018">Contact</a></li>
                            <li><div><a id="btnRegister" href="https://pages.iahsp.com/iahsp-conference-2018-registration/" target="_blank" rel="noopener" class="btn btn-primary btn-sm color-white">Register Now</a></div></li>
                        </ul>
                    </nav>
                </div><!-- /Top Nav -->

            </div>
        </header>
    `,
    styles: [`
        #btnRegister {
            margin: 2px 0px 0px 10px;
        }
        
        @media only screen and (max-width : 990px) {
            header li > div > a[href="https://iahsp.com"] {
                text-align: left;
            }
        }

        @media only screen and (min-width : 991px) {
            header li > div > a[href="https://iahsp.com"] {
                color: #fff !important;
            }
        }
    `]
})

export class HeaderComponent implements OnInit {

    ngOnInit() {}
  
  }