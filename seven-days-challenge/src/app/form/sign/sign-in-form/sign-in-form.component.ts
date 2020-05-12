import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormService} from "../../form.service";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['../sign-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  public loginClientForm: FormGroup;
  public submitClient = new EventEmitter<boolean>();
  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.loginClientForm =  this.formService.createLoginForm();
  }

  submitLoginForm() {

  }
}
