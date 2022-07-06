import { NgModule } from "@angular/core";
import {IndexComponent} from './index.component'
// import { RouterModule } from "@angular/router";
import {IndexRouteModule} from './index-route.module';

@NgModule({
  imports: [
    // RouterModule,
    IndexRouteModule
  ],
  declarations: [
    IndexComponent,

  ],
  exports: [],
})
export class IndexModule{}
