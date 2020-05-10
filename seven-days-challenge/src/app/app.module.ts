import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import { LoginMatMenuComponent } from './mat-menu/login-mat-menu/login-mat-menu.component';
import { ProfileMatMenuComponent } from './mat-menu/profile-mat-menu/profile-mat-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MatToolbarComponent,
    MatMenuComponent,
    LoginMatMenuComponent,
    ProfileMatMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
