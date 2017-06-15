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
									<li><a class="scrollTo" href="#speakershelp">Speakers</a></li>
                                    <li><a class="scrollTo" href="#vendors">Vendors</a></li>
                                    <li><a class="scrollTo" href="#wholesale">High Point Wholesale Experience</a></li>
								</ul>
							</li>
                            <li><div><a href="#contact" class="btn btn-primary scrollTo">Contact Us</a></div></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

            </div>
        </header>
    `,
    styles: [`
        @media only screen and (max-width : 990px) {
            header li > div > a[href="#contact"] {
                text-align: left;
            }
        }

        @media only screen and (min-width : 991px) {
            header li > div > a[href="#contact"] {
                color: #fff !important;
            }
        }
    `]
})
export class HeaderComponent {

}