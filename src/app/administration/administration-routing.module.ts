import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from './administration.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from '../services/users.service';

const administrationRoutes: Routes = [
  {
    path: '', component: AdministrationComponent, children: [
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [RouterModule],
  providers: [UsersService]
})
export class AdministrationRoutingModule { }
