import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) {
  }

  public createLoginForm(): FormGroup {
    return this.formBuilder.group({
      userEmail: ['', Validators.required, Validators.email],
      userPassword: ['', Validators.required],
    });
  }
}
