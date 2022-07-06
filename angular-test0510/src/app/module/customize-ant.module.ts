import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
  ],
  exports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
  ],
  declarations: []
})
export class CustomizeAntModule{}
