import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register2020Component } from './register.component';

describe('Register2020Component', () => {
  let component: Register2020Component;
  let fixture: ComponentFixture<Register2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
