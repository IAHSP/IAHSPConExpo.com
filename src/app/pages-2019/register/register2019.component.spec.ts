import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register2019Component } from './register2019.component';

describe('Register2019Component', () => {
  let component: Register2019Component;
  let fixture: ComponentFixture<Register2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
