import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

// Addons
import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';

// IAHSP 2019 Conference & Expo
import { Header2019Component } from './pages-2019/shared/header.component';
import { Footer2019Component } from './pages-2019/shared/footer.component';
import { Home2019Component } from './pages-2019/home.component';
import { Hero2019Component } from './pages-2019/hero.component';
import { Event2019Component } from './pages-2019/event.component';
import { Speakers2019Component } from './pages-2019/speakers.component';
import { Schedule2019Component } from './pages-2019/schedule.component';
import { Designation2019Component } from './pages-2019/designation.component';
import { Hotel2019Component } from './pages-2019/hotel.component';
import { Countdown2019Component } from './pages-2019/countdown.component';
import { Contact2019Component } from './pages-2019/contact/contact.component';
import { Dinner2019Component } from './pages-2019/dinner.component';

// Main IAHSP Conference & Expo Routes
const appRoutes: Routes = [
  { path: "", component: Home2019Component },
  
  // Lazy Loaded
  { path: "iahsp2018", loadChildren: "./pages-2018/iahsp2018.module#Iahsp2018Module" }
];

@NgModule({
  declarations: [

    AppComponent,

    // IAHSP 2019 Conference & Expo
    Header2019Component,
    Footer2019Component,
    Home2019Component,
    Hero2019Component,
    Event2019Component,
    Speakers2019Component,
    Schedule2019Component,
    Designation2019Component,
    Hotel2019Component,
    Countdown2019Component,
    Contact2019Component,
    Dinner2019Component
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReCaptchaModule,

    // Routing
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
