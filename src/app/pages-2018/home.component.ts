import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-home',
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
                            <li><a class="scrollTo" href="#speakershelp">Speakers</a></li>
                            <li><a class="scrollTo" href="#vendors">Vendors</a></li>
                            <li><a class="scrollTo" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

            </div>
        </header>

        <span id="header_shadow"></span>
        
        <div id="wrapper">
            <app-2018-hero></app-2018-hero>
            
            <app-2018-speakers id="speakershelp"></app-2018-speakers>

            <app-2018-vendors id="vendors"></app-2018-vendors>

            <app-2018-countdown></app-2018-countdown>

            <app-2018-contact id="contact"></app-2018-contact>
        </div>

        <app-shared-footer></app-shared-footer>
    `

})
export class Home2018Component {

}