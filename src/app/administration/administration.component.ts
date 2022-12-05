import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {Subscription} from 'rxjs';
import {UsersService} from '../services/users.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService, private dialog: MatDialog) {
  }

  subscriptions: Array<Subscription> = new Array<Subscription>();

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  createUser() {
    const userData: User = {
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      },
      email: '',
      geo: {
        lat: '',
        lng: ''
      },
      id: '-1',
      name: '',
      phone: '',
      username: '',
      website: ''
    };
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: 'auto',
      data: {
        userToShow: userData,
        editMode: false,
        createMode: true,
        viewMode: false
      },
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      console.log('cerrada vista de detalles de usuario, accion crear usuario');
      console.log('datos del usuario creado', result);
      this.addUser(result);
    });
  }

  /**
   * Añadir un nuevo usuario temporal a la lista ed usuarios obtenida del api
   * @param user dato del usuario  a añadir
   */
  addUser(user: User) {
    console.log('addUser');
    const subscription = this.usersService.addUser(user).subscribe(
      (userR: User) => {
        // this.users.push(userR);
        console.log('userR', userR);
      }
    );
    this.subscriptions.push(subscription);
  }

}
