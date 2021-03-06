import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

// Required for form
import { FormsModule  } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";
import { Home2018Component } from "./home.component";
import { Scott2018Component } from "./scott.component";
// import { Countdown2018Component } from "./countdown.component";
import { Hero2018Component } from "./hero.component";
import { Speakers2018Component } from "./speakers.component";
import { Sponsors2018Component } from "./sponsors.component";
import { Vendors2018Component } from "./vendors.component";
import { Hotel2018Component } from "./hotel.component";
import { Wholesale2018Component } from "./wholesale.component";
import { Ast2018Component } from "./ast.component";
import { Ccs2018Component } from "./ccs.component";
import { Lhsiahsp2018Component } from "./lhsiahsp.component";
import { Stageindustawards2018Component } from "./stageindustawards.component";
import { Contact2018Component } from "./contact/contact.component";

const iahsp2018Routes: Routes = [
  { path: "", component: Home2018Component, children: [
      { path: "", component: Hero2018Component },
      { path: "scott", component: Scott2018Component },
      { path: "speakers", component: Speakers2018Component },
      { path: "sponsors", component: Sponsors2018Component },
      { path: "vendors", component: Vendors2018Component },
      { path: "hotel", component: Hotel2018Component },
      { path: "wholesale", component: Wholesale2018Component },
      { path: "ast", component: Ast2018Component },
      { path: "ccs", component: Ccs2018Component },
      { path: "lhsiahsp", component: Lhsiahsp2018Component },
      { path: "stageindustawards", component: Stageindustawards2018Component },
      { path: "contact2018", component: Contact2018Component }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReCaptchaModule,
    RouterModule.forChild(iahsp2018Routes)
  ],

  declarations: [
    HeaderComponent,
    FooterComponent,
    Home2018Component,
    Scott2018Component,
    // Countdown2018Component,
    Hero2018Component,
    Speakers2018Component,
    Sponsors2018Component,
    Vendors2018Component,
    Hotel2018Component,
    Wholesale2018Component,
    Ast2018Component,
    Ccs2018Component,
    Lhsiahsp2018Component,
    Stageindustawards2018Component,
    Contact2018Component
  ]  
})

export class Iahsp2018Module { }