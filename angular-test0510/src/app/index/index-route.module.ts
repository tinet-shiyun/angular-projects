import { IndexComponent } from './index.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', component: IndexComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: IndexComponent}
      // {path: 'login', loadChildren: import().then(module => module)}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class IndexRouteModule{}
