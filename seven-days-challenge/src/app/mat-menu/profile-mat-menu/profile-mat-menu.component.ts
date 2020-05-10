import { Component, OnInit } from '@angular/core';
import {MatMenuComponent} from "../mat-menu.component";

@Component({
  selector: 'app-profile-mat-menu',
  templateUrl: './profile-mat-menu.component.html',
  styleUrls: ['./profile-mat-menu.component.scss']
})
export class ProfileMatMenuComponent extends MatMenuComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
