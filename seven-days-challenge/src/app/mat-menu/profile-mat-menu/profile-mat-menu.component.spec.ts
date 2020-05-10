import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatMenuComponent } from './profile-mat-menu.component';

describe('ProfileMatMenuComponent', () => {
  let component: ProfileMatMenuComponent;
  let fixture: ComponentFixture<ProfileMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
