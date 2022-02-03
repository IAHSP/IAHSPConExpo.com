import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-countdown",
  template: `

    <!-- Countdown -->
    <section class="countdown padding100 parallax text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              <a href="https://pages.iahsp.com/iahsp-2023-conference-expo-registration/"><strong>Register</strong></a> By The
              Deadline - unless we are SOLD OUT
            </h2>
            <h3 class="line-height-32">Feb 24, 2023</h3>
            <div id="countdown"></div>
          </div>
        </div>
      </div>
    </section>    
  `,
  styles: [`
    .countdown {
      background: #2d2926;
    }
  `],
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 24, 2023 23:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="countdown"
      document.getElementById("countdown").innerHTML =
        "<div class='col-xs-6 col-sm-offset-2 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + days + "</h1><p class='lead font-weight-400'>Days</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + hours + "</h1><p class='lead font-weight-400'>Hours</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + minutes + "</h1><p class='lead font-weight-400'>Minutes</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + seconds + "</h1><p class='lead font-weight-400'>Seconds</p></div>"
        ;

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h1>EXPIRED</h1";
      }
    }, 1000);
  }
}
