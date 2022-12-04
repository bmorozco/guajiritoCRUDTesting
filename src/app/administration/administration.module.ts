import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [UsersComponent, AdministrationComponent, UserDetailsComponent],
  imports: [
    AdministrationRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [UserDetailsComponent, UsersComponent],
  entryComponents: [UserDetailsComponent]
})

export class AdministrationModule {
}
