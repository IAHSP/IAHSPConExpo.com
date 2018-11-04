import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Addons
import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./pages-2018/shared/header.component";
import { FooterComponent } from "./pages-2018/shared/footer.component";

// IAHSP 2018 Conference & Expo
import { Home2018Component } from "./pages-2018/home.component";
import { Scott2018Component } from "./pages-2018/scott.component";
import { Countdown2018Component } from "./pages-2018/countdown.component";
import { Hero2018Component } from "./pages-2018/hero.component";
import { Speakers2018Component } from "./pages-2018/speakers.component";
import { Sponsors2018Component } from "./pages-2018/sponsors.component";
import { Vendors2018Component } from "./pages-2018/vendors.component";
import { Hotel2018Component } from "./pages-2018/hotel.component";
import { Wholesale2018Component } from "./pages-2018/wholesale.component";
import { Ast2018Component } from "./pages-2018/ast.component";
import { Ccs2018Component } from "./pages-2018/ccs.component";
import { Lhsiahsp2018Component } from "./pages-2018/lhsiahsp.component";
import { Stageindustawards2018Component } from "./pages-2018/stageindustawards.component";
import { Contact2018Component } from "./pages-2018/contact/contact.component";

// IAHSP 2019 Conference & Expo
import { Header2019Component } from './pages-2019/shared/header.component';
import { Footer2019Component } from './pages-2019/shared/footer.component';
import { Home2019Component } from './pages-2019/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    // IAHSP 2018 Conference & Expo
    Home2018Component,
    Scott2018Component,
    Countdown2018Component,
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
    Contact2018Component,

    // IAHSP 2019 Conference & Expo
    Header2019Component,
    Footer2019Component,
    Home2019Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
