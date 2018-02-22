// Set the date we're counting down to
var countDownDate = new Date("Oct 19, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = 
        "<div class='col-xs-6 col-sm-offset-2 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + days + "</h1><p class='lead font-weight-400'>Days</p></div>" + 
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + hours + "</h1><p class='lead font-weight-400'>Hours</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + minutes + "</h1><p class='lead font-weight-400'>Minutes</p></div>" +
        "<div class='col-xs-6 col-sm-2'><h1 class='space-bottom-10 font-60 font-weight-500'>" + seconds + "</h1><p class='lead font-weight-400'>Second</p></div>"
    ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);