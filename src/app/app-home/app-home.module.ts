import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomeRoutingModule} from './app-home-routing.module';
import {AppHomeComponent} from './app-home.component';
import {HomeHeaderComponent} from './home-header/home-header.component';
import {HomeSidebarComponent} from './home-sidebar/home-sidebar.component';
import {AdministrationModule} from '../administration/administration.module';

@NgModule({
  declarations: [
    AppHomeComponent,
    HomeHeaderComponent,
    HomeSidebarComponent],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    AdministrationModule
  ]
})
export class AppHomeModule { }
