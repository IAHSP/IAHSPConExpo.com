import { Component } from '@angular/core';

@Component({
    selector: 'app-shared-header-2018',
    template: `
        <header id="topNav">
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
                                    <li><a class="scrollTo" href="#sponsors">Sponsors</a></li>
									<li><a class="scrollTo" href="#speakershelp">Speakers</a></li>
                                    <li><a class="scrollTo" href="#vendors">Vendors</a></li>
                                    <li><a class="scrollTo" href="#hotel">Hotel</a></li>
                                    <li><a class="scrollTo" href="#wholesale">High Point Wholesale Experience</a></li>
                                    <li><a class="scrollTo" href="#lhsiahsp">Luxury Home Staging</a></li>
								</ul>
							</li>
                            <li><a class="scrollTo" href="#contact">Contact</a></li>
                            <li><div><a id="btnRegister" href="https://www.regonline.com/2018iahspconferenceexpo" target="_blank" class="btn btn-primary btn-sm color-white">Register Now</a></div></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

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
export class HeaderComponent {

}