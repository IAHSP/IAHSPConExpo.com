import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./pages-2018/shared/header.component";
import { Home2018Component } from "./pages-2018/home.component";
import { Hero2018Component } from "./pages-2018/hero.component";
import { Scott2018Component } from "./pages-2018/scott.component";
import { Sponsors2018Component } from "./pages-2018/sponsors.component";
import { Speakers2018Component } from "./pages-2018/speakers.component";
import { Vendors2018Component } from "./pages-2018/vendors.component";
import { Hotel2018Component } from "./pages-2018/hotel.component";
import { Wholesale2018Component } from "./pages-2018/wholesale.component";
import { Ast2018Component } from "./pages-2018/ast.component";
import { Ccs2018Component } from "./pages-2018/ccs.component";
import { Lhsiahsp2018Component } from "./pages-2018/lhsiahsp.component";
import { Stageindustawards2018Component } from "./pages-2018/stageindustawards.component";
import { Countdown2018Component } from "./pages-2018/countdown.component";
import { Contact2018Component } from "./pages-2018/contact/contact.component";
import { FooterComponent } from "./pages-2018/shared/footer.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,

        HeaderComponent,
        Home2018Component,
        Hero2018Component,
        Scott2018Component,
        Sponsors2018Component,
        Speakers2018Component,
        Vendors2018Component,
        Hotel2018Component,
        Wholesale2018Component,
        Ast2018Component,
        Ccs2018Component,
        Lhsiahsp2018Component,
        Stageindustawards2018Component,
        Countdown2018Component,
        Contact2018Component,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
