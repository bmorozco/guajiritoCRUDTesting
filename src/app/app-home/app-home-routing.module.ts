import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppHomeComponent} from './app-home.component';

const routes: Routes = [
  {
    path: '', component: AppHomeComponent,
    children: [
      { path: 'admin', loadChildren: 'src/app/administration/administration.module#AdministrationModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppHomeRoutingModule { }
