import { Component } from '@angular/core';

@Component({
    selector: 'app-shared-header',
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
                            <li class="active"><a href="#wrapper">Home</a></li>
                            <li><a href="#keynote">Keynote Speaker</a></li>
                            <li><a href="#hotel">Hotel Accommodations</a></li>
                            <li><a href="#pricing">Registration Fees</a></li>
                            <li><a href="#schedule">Schedule</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

            </div>
        </header>

        <span id="header_shadow"></span>`

        })
export class HeaderComponent {

}