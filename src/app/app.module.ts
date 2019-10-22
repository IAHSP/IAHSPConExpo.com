import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

// Addons
import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';

// IAHSP 2020 Conference & Expo
import { Header2020Component } from './pages-2020/shared/header.component';
import { Footer2020Component } from './pages-2020/shared/footer.component';
import { Home2020Component } from './pages-2020/home.component';
import { Hero2020Component } from './pages-2020/hero.component';
import { Countdown2020Component } from './pages-2020/countdown.component';
import { Contact2020Component } from './pages-2020/contact/contact.component';
import { Register2020Component } from './pages-2020/register/register.component';

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
import { Ast2019Component } from './pages-2019/ast.component';
import { Cks2019Component } from './pages-2019/cks.component';
import { Register2019Component } from './pages-2019/register/register2019.component';
import { SponsorsComponent } from './pages-2019/sponsors.component';

// Main IAHSP Conference & Expo Routes
const appRoutes: Routes = [
  { path: "", component: Home2020Component },
  { path: "2019", component: Home2019Component },
  
  // Lazy Loaded
  { path: "2018", loadChildren: "./pages-2018/iahsp2018.module#Iahsp2018Module" },
  { path: "register", component: Register2019Component }
];

@NgModule({
  declarations: [

    AppComponent,

    // IAHSP 2020 Conference & Expo
    Header2020Component,
    Footer2020Component,
    Home2020Component,
    Hero2020Component,
    Countdown2020Component,
    Contact2020Component,
    Register2020Component,

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
    Dinner2019Component,
    Ast2019Component,
    Cks2019Component,
    Register2019Component,
    SponsorsComponent
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
