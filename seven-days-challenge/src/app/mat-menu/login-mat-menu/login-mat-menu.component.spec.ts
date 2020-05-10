import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMatMenuComponent } from './login-mat-menu.component';

describe('LoginMatMenuComponent', () => {
  let component: LoginMatMenuComponent;
  let fixture: ComponentFixture<LoginMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
