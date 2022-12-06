import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomeRoutingModule} from './app-home-routing.module';
import {AppHomeComponent} from './app-home.component';
import {AdministrationModule} from '../administration/administration.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule
  ]
})
export class AppHomeModule { }
