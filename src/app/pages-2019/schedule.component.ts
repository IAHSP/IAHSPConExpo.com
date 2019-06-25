import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2019-schedule',
  template: `
  
    <section class="padding100 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center"><strong>SCHEDULE OF EVENTS</strong></h2>

            <p class="lead font-weight-400 text-center">You are going to be inspired to ROCK Your Business with<br />
            what you learn at our 2019 IAHSP<sup>®</sup> Conference & EXPO!</p>

            <p class="lead text-center">We are working on specifics but general timing is below</p>

            <div class="table-responsive">
            <table class="table table-bordered lead">              
              <tbody>

                <!-- Thursday -->
                <tr bgcolor="#C9DAF8">
                  <th>THURSDAY: OCT 3, 2019</th>
                  <th colspan="2">VENDOR EXPO AND SOCIAL</th>
                </tr>
                <tr>
                  <td>5:00 PM</td>
                  <td colspan="2">REGISTRATION OPENS</td>
                </tr>
                <tr>
                  <td>6:00 PM</td>
                  <td colspan="2">DOORS OPEN</td>
                </tr>
                <tr>
                  <td>6:00 - 8:00 PM</td>
                  <td colspan="2">EXPO TIME WITH DIAMOND & PREMIER SHARING ON STAGE</td>
                </tr>
                <tr>
                  <td>8:00 - 10:00 PM</td>
                  <td colspan="2">MUSIC AND LINE DANCING</td>
                </tr>



                <!-- Friday -->
                <tr bgcolor="C9DAF8">
                  <th>FRIDAY: OCT 4, 2019</th>
                  <th>TOPIC</th>
                  <th>SPEAKER</th>
                </tr>
                <tr>
                  <td><strong>8:00 - 9:00</strong></td>
                  <td colspan="2"><strong>EXPO OPEN</strong></td>
                </tr>
                <tr>
                  <td>9:00 - 9:10</td>
                  <td>WELCOME & OVERVIEW</td>
                  <td><strong>LEADERSHIP TEAM with special word from PRESIDENT, BETTE VOS</strong></td>
                </tr>
                <tr>
                  <td>9:10 - 9:30</td>
                  <td>ROCK YOUR BUSINESS - Resources, Opportunities, Connections, Knowledge</td>
                  <td><strong>LEADERSHIP TEAM - JENNIE NORRIS, LYN SPAETH, BETTE VOS, SANDRA HOLMES</strong></td>
                </tr>
                <tr>
                  <td>9:35 - 10:15 (40 MIN)</td>
                  <td>How to build a Rock Star brand with Platinum Earnings</td>
                  <td><strong>MELISSA MARRO</strong></td>
                </tr>
                <tr>
                  <td>10:25 - 10:40</td>
                  <td>BREAK</td>
                  <td>BREAK</td>
                </tr>
                <tr>
                  <td>10:40- 11:25 (45 MIN)</td>
                  <td>10 STEPS TO AVOID ACHY BREAKY DESIGN</td>
                  <td><strong>JOANNE LENART-WEARY</strong></td>
                </tr>
                <tr>
                  <td>11:30 - 12:10 (40 MIN)</td>
                  <td>What Realtors REALLY Want from Home Stagers</td>
                  <td><strong>SHARON SCHOENFELD, JOHN NORRIS, JOHN REAGAN, KEVIN HTAIN</strong></td>
                </tr>
                <tr bgcolor="FFF2CC">
                  <td><strong>12:20 - 1:15 PM</strong></td>
                  <td><strong>LUNCH BREAK</strong></td>
                  <td><strong>LUNCH PROVIDED - BUFFET STYLE - LIGHTER LUNCH AND VENDOR BOOTHS SHOPPING</strong></td>
                </tr>
                <tr bgcolor="D9EAD3">
                  <td><strong>1:15 - 2:00</strong></td>
                  <td><strong>BREAKOUT SESSIONS</strong></td>
                  <td><strong>ATTENDEES GET TO GO TO 1 OUT OF 5</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>Fearless - Tailor a Swift Plan to Success - 10 Steps to Build a Successful Business</td>
                  <td><strong>LIV CONLON</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>Crazy Dreams Become Reality - Building Your Staging Empire</td>
                  <td><strong>BLAIR HAMATY</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>How to Hit High “C” with “E”-Decorating/Staging : Cash and Creditability awaits when you add E-Consultations and E-Design/E-Staging.</td>
                  <td><strong>SANDRA RACZ</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>Create a Rock Star Brand </td>
                  <td><strong>AMBER GRIFFITHS</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>Occupied Home Staging is a Money Maker</td>
                  <td><strong>LYN SPAETH</strong></td>
                </tr>
                <tr>
                  <td><em>2:00 - 2:10</em></td>
                  <td><em>BREAK AND GET TO NEXT SESSION</em></td>
                  <td><em>BREAK AND GET TO NEXT SESSION</em></td>
                </tr>
                <tr bgcolor="D9EAD3">
                  <td><strong>2:10 - 2:55</strong></td>
                  <td><strong>BREAKOUT SESSIONS</strong></td>
                  <td><strong>ATTENDEES GET TO GO TO 1 OUT OF 5</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:55</td>
                  <td>Hit the High Note with Your Marketing</td>
                  <td><strong>ROBIN SAMORA</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:55</td>
                  <td>Fret Note More! The Keys to Avoid Hiring A-Flat Employees</td>
                  <td><strong>ANTHEA CLICK</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:55</td>
                  <td>Life as a Composition - Looking at what makes a composition engaging in both Staging and Photography</td>
                  <td><strong>HAYDEN YATES</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:55</td>
                  <td>Is Your Business Out of Tune? Ensuring Pricing and Profitability are in Harmony</td>
                  <td><strong>CATHERINE LEWIS BROWN</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:55</td>
                  <td>From Stuff to Staging: Organizing and Staging in Harmony</td>
                  <td><strong>JUNE CARTER</strong></td>
                </tr>
                <tr>
                  <td><em>2:55 - 3:05</em></td>
                  <td><em>BREAK AND GO TO NEXT SESSION</em></td>
                  <td><em>BREAK AND GO TO NEXT SESSION</em></td>
                </tr>
                <tr bgcolor="D9EAD3">
                  <td><strong>3:05 - 3:50</strong></td>
                  <td><strong>BREAKOUT SESSIONS</strong></td>
                  <td><strong>ATTENDEES GET TO GO TO 1 OUT OF 5</strong></td>
                </tr>
                <tr>
                  <td>3:05 - 3:50</td>
                  <td>Turn Real Estate Agents Into Raving Fans</td>
                  <td><strong>MARIANNE CHERICO</strong></td>
                </tr>
                <tr>
                  <td>3:05 - 3:50</td>
                  <td>Rock of Ages - Do you have something to Sell?</td>
                  <td><strong>LESLIE AND LEEANN KRAMER</strong></td>
                </tr>
                <tr>
                  <td>3:05 - 3:50</td>
                  <td>Building a “Bridge over Troubled Waters”- Navigating through Life’s Challenges while sustaining your successful business</td>
                  <td><strong>THERESA THOMAS</strong></td>
                </tr>
                <tr>
                  <td>3:05 - 3:50</td>
                  <td>Creating Architectural Harmony - Staging Challenging Living Areas</td>
                  <td><strong>KRISTIE BARNETT</strong></td>
                </tr>
                <tr>
                  <td>3:05 - 3:50</td>
                  <td>Top Ten Organizing Tips To Be Successful in Business</td>
                  <td><strong>JENNY ABRAMS</strong></td>
                </tr>
                <tr>
                  <td>3:50 - 4:15</td>
                  <td>BREAK AND GO TO BALLROOM</td>
                  <td>BREAK AND GO TO BALLROOM</td>
                </tr>
                <tr bgcolor="D9D2E9">
                  <td><strong>4:15 - 5:15</strong></td>
                  <td><strong>KEYNOTE SPEAKER</strong></td>
                  <td><strong>CANDICE OLSON</strong></td>
                </tr>
                <tr>
                  <td>5:15 - 6:45</td>
                  <td>MEET AND GREET</td>
                  <td>MEET AND GREET</td>
                </tr>
                <tr>
                  <td>6:45 - 7:15</td>
                  <td>CHANGE FOR DINNER AND GET TO BOAT</td>
                  <td>GENERAL JACKSON SHOW BOAT</td>
                </tr>
                <tr>
                  <td>7:15- 7:45</td>
                  <td>Depart for General Jackson - Cash Bar and Music</td>
                  <td>GENERAL JACKSON SHOW BOAT</td>
                </tr>
                <tr>
                  <td>7:45 - 9:30 PM</td>
                  <td>DINNER AND AWARDS</td>
                  <td>GENERAL JACKSON SHOW BOAT - ON THE WATER</td>
                </tr>
                <tr bgcolor="D9D2E9">
                  <td>8:30 - 9:00</td>
                  <td>"Whose Educating Who?</td>
                  <td><strong>BARB SCHWARZ - INSPIRATIONAL KEYNOTE</strong></td>
                </tr>
                <tr>
                  <td>9:00 - 10:00</td>
                  <td>AWARDS - AUCTION OF 2 ITEMS ONLY</td>
                  <td>GENERAL JACKSON SHOW BOAT - ON THE WATER</td>
                </tr>
                <tr>
                  <td>10:00 - 11:30 PM</td>
                  <td>AFTER PARTY</td>
                  <td>GENERAL JACKSON AT THE DOCK</td>
                </tr>



                <!-- Saturday -->
                <tr bgcolor="C9DAF8">
                  <th>SATURDAY: OCT 5, 2019</th>
                  <th>TOPIC</th>
                  <th>SPEAKER</th>
                </tr>
                <tr>
                  <td><strong>8:00 - 9:00</strong></td>
                  <td><strong>EXPO</strong></td>
                  <td>EXPO OPEN</td>
                </tr>
                <tr>
                  <td>9:00 - 9:15 AM</td>
                  <td>WELCOME BACK</td>
                  <td>WELCOME BACK</td>
                </tr>
                <tr>
                  <td>9:15 AM - 10:30</td>
                  <td>INVESTOR HOME STAGING DESIGNATION</td>
                  <td><strong>LISA BASHAM, SHEILA DRAGON, BECKY HARMON, SANDRA HOLMES, AMY POWERS</strong></td>
                </tr>
                <tr>
                  <td>10:30 - 11:00</td>
                  <td>BREAK 30 MIN</td>
                  <td>30 MIN BREAK</td>
                </tr>
                <tr>
                  <td>11:00 - 11:45</td>
                  <td>INVESTOR HOME STAGING DESIGNATION</td>
                  <td><strong>LISA BASHAM, SHEILA DRAGON, BECKY HARMON, SANDRA HOLMES, AMY POWERS</strong></td>
                </tr>
                <tr>
                  <td>11:45 - 12:15</td>
                  <td>INVESTOR HOME STAGING DESIGNATION</td>
                  <td><strong>LISA BASHAM, SHEILA DRAGON, BECKY HARMON, SANDRA HOLMES, AMY POWERS</strong></td>
                </tr>
                <tr bgcolor="FFF2CC">
                  <td><strong>12:15 - 1:15</strong></td>
                  <td><strong>LUNCH BREAK - VENDORS</strong></td>
                  <td><strong>LUNCH BREAK AND VENDORS</strong></td>
                </tr>
                <tr>
                  <td>1:15 - 2:00</td>
                  <td>Are You Running on Empty? How to Keep a Balance in Life and Work</td>
                  <td><strong>JENNIE NORRIS</strong></td>
                </tr>
                <tr>
                  <td>2:10 - 2:45</td>
                  <td>It's Closing Time! Speaker Panel</td>
                  <td><strong>CHRISTA JESSUP, JOHN NORRIS,KAT TROULINOS, BETTE VOS</strong></td>
                </tr>
                <tr>
                  <td>2:50 - 3:10</td>
                  <td>IAHSP EU UPDATE</td>
                  <td><strong>SANJA RADOVANOVIC</strong></td>
                </tr>
                <tr>
                  <td>3:10 - 3:25</td>
                  <td>RECOGNITION AWARDS</td>
                  <td>RECOGNITION AWARDS</td>
                </tr>
                <tr>
                  <td>3:25 - 4:10</td>
                  <td>3 Ways to Conquer Pressing Record, Build Your Visibility and Leverage Video to Gain Warm Leads”</td>
                  <td><strong>TORI TOTH</strong></td>
                </tr>
                <tr>
                  <td><em>4:10 - 4:30</em></td>
                  <td><em>BREAK</em></td>
                  <td><em>BREAK</em></td>
                </tr>
                <tr bgcolor="D9D2E9">
                  <td><strong>4:30 - 5:30</strong></td>
                  <td><strong>KEYNOTE SPEAKERS</strong></td>
                  <td><strong>CARSON KRESSLEY AND THOM FILICIA</strong></td>
                </tr>
                <tr>
                  <td>5:30 - 6:00</td>
                  <td>WRAP UP - RECOGNITION - REVEAL FOR 2020</td>
                  <td><strong>LEADERSHIP TEAM - JENNIE NORRIS, LYN SPAETH, BETTE VOS, SANDRA HOLMES</strong></td>
                </tr>
                <tr>
                  <td>MEET AND GREET/PHOTOS</td>
                  <td>BALLROOM AND/OR at one of the restaurants at the Gaylord</td>
                  <td>KEYNOTE SPEAKERS</td>
                </tr>
                <tr bgcolor="EAD1DC">
                  <td><strong>SPECIAL BROADCASTS:</strong></td>
                  <td><strong>THE CHAISE LOUNGE</strong></td>
                  <td><strong>NICK MAY</strong></td>
                </tr>
                <tr bgcolor="EAD1DC">
                  <td></td>
                  <td><strong>DESIGN TALK LIVE</strong></td>
                  <td><strong>JOSEPH HAECKER</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class Schedule2019Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
