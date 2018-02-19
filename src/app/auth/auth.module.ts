import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {SignComponent} from "./sign/sign.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
  declarations: [
    SignComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
