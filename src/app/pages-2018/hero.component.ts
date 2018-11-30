import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-2018-hero',
    template: `
    
        <section class="padding100 hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/2018-conference-expo-logo.png" alt="Journey to the Top" class="img-responsive 
                        center-block space-bottom-15" width="400px" />

                        <h1 class="title-con">2018 Educational Conference and EXPO!</h1>

                        <div class="space-bottom-12 text-center">
                            <h2 class="date-con">Oct 18-20, 2018 – Charlotte, NC</h2>
                        </div>

                        <p class="about-con text-center text-bold text-white">
                            The International Association of Home Staging Professionals<sup>®</sup> (IAHSP<sup>®</sup>) is excited to host this
                            high level educational event for top Home Staging business owners worldwide!  Join colleagues to learn, share
                            and grow a successful business that has longevity and profitability.  We have planned two power-packed days
                            full of vital information as well as opportunities for you to network with colleagues from all over.  Our
                            vendor-sponsors play a key role in our business success and we are excited to welcome them to the EXPO portion
                            of our event.  Sign up NOW to secure your spot!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="padding100 bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nLte2bd_SNo" frameborder="0" allow="accelerometer; 
                            encrypted-media;" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [`

        .hero {
            background-image: url("https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/charlotte-nc.jpg");
            background-size: cover;
        }

        .hero .date-con {
            display: inline;
            padding: 0 18px;
        }

        .hero .title-con {
            font-size: 58px;
            font-weight: 800;
            line-height: 55px;
            text-align: center;
            color: #fff;
            margin-bottom: 12px;
        }

        .hero .date-con {
            background-color: #67ae73;
            color: #fff;
            font-size: 50px;
            font-weight: 300;
            line-height: 1.1;            
        }



        /* Phone Size */
        @media screen and (max-width: 767px) {
            .padding100 {
                padding: 50px 0 !important;
            }

            img[src="https://d3oaxt0bwkjnjn.cloudfront.net/iahspconexpo/images/2018/2018-conference-expo-logo.png"] {
                width: 200px;
            }

            .title-con {
                font-size: 28px !important;
                line-height: 30px !important;
            }
    
            .date-con {
                font-size: 20px !important;
            }

            .about-con {
                line-height: 16px !important;
            }
        }

    `]
    
})

export class Hero2018Component implements OnInit {

    constructor() {}
  
    ngOnInit() { }
  
}