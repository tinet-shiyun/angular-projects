/**存放可复用的组件 */
import { NgModule } from "@angular/core";
import {CustomizeAntModule} from '../module/customize-ant.module'
@NgModule({
  imports: [
    CustomizeAntModule,
  ],
  exports: [
    CustomizeAntModule
  ],
})
export class SharedModule{}
