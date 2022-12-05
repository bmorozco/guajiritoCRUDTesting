import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomeRoutingModule} from './app-home-routing.module';
import {AppHomeComponent} from './app-home.component';
import {AdministrationModule} from '../administration/administration.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppHomeComponent],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    AdministrationModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AppHomeModule { }
