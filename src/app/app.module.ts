import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Addons
import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./pages-2018/shared/header.component";
import { FooterComponent } from "./pages-2018/shared/footer.component";
import { Home2018Component } from "./pages-2018/home.component";
import { Countdown2018Component } from "./pages-2018/countdown.component";
import { Hero2018Component } from "./pages-2018/hero.component";
import { Speakers2018Component } from "./pages-2018/speakers.component";
import { Vendors2018Component } from "./pages-2018/vendors.component";
import { Contact2018Component } from "./pages-2018/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Home2018Component,
    Countdown2018Component,
    Hero2018Component,
    Speakers2018Component,
    Vendors2018Component,
    Contact2018Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
