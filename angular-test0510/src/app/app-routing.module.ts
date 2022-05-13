import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import {PageNotFoundComponent} from './core/page-not-found.component'
import {IndexModule} from "./index/index.module";
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path: '', redirectTo: '/index/home', pathMatch: 'full'},
  {path: 'index', loadChildren: () => import('./index/index.module').then(module => module.IndexModule)},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule{}
