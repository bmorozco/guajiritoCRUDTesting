import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, AdministrationComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [UserDetailsComponent],
  entryComponents: [UserDetailsComponent]
})

export class AdministrationModule {
}
