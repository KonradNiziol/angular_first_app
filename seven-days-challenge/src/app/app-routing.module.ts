import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInFormComponent} from "./form/sign/sign-in-form/sign-in-form.component";

const routes: Routes = [{
  path: 'login', component: SignInFormComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
