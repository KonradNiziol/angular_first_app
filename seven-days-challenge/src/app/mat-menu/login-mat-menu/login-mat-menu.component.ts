import { Component, OnInit } from '@angular/core';
import {MatMenuComponent} from "../mat-menu.component";

@Component({
  selector: 'app-login-mat-menu',
  templateUrl: './login-mat-menu.component.html',
  styleUrls: ['./login-mat-menu.component.scss']
})
export class LoginMatMenuComponent extends MatMenuComponent {


  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
