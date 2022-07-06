import { NgModule } from "@angular/core";
import {CustomizeAntModule} from '../module/customize-ant.module'
import {LoginComponent} from './login.component'

@NgModule({
  imports: [
    CustomizeAntModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: []
})

export class LoginModule{}
