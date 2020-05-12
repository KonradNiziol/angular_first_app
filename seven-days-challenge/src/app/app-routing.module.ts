import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInFormComponent} from "./form/sign/sign-in-form/sign-in-form.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'login', component: SignInFormComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
