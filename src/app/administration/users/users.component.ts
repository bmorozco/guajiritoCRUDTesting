import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserDetailsComponent} from './user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService, private dialog: MatDialog) {
  }

  users: Array<User> = new Array<User>();
  displayedColumns: string[] = ['name', 'username', 'company', 'email', 'phone', 'operations'];
  subscriptions: Array<Subscription> = new Array<Subscription>();


  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  /**
   * Obtener todos los usuarios de la api
   */
  getAllUsers() {
    const subscription = this.usersService.getUsers().subscribe(
      (users) => {
        this.users = users.slice();
        console.log(this.users);
      }
    );
    this.subscriptions.push(subscription);
  }

  /**
   * Obtener información de un usuario determinado
   * @param user Objeto Usuario del cuál queremos obtener todos los datos
   */
  getUser(user: User): User {
    let userData: User = null;
    const subscription = this.usersService.getUser(user.id).subscribe(
      (userR: User) => userData = userR
    );
    this.subscriptions.push(subscription);
    return userData;
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
        console.log('this.users', this.users);
      }
    );
    this.subscriptions.push(subscription);
  }

  /**
   * Actualizar los datos de un usuario de forma temporal en la lista de usuarios obtenida del api
   * @param user datos del Usuario a editar/actualizar
   */
  updateUser(user: User) {
    console.log('update user');
    const index = this.users.findIndex(userData => userData.id === user.id);
    const subscription = this.usersService.updateUser(user).subscribe(
      (userR: User) => {
        // via 1
        /*if (index !== -1) {
          this.users[index] = userR;
        }*/

        // via 2
        this.users = this.users.map(object => {
          if (object.id === userR.id) {
            // 👇️ change value of name property
            return {...object, userR};
          }
          return object;
        });
        console.log(this.users);
      }
    );
    this.subscriptions.push(subscription);
  }

  /**
   * Eliminar de forma temporal un usuario de la lista de usuarios obtenidos de la api
   * @param user dato del usuario a eliminar
   */
  deleteUser(user: User) {
    const subscription = this.usersService.deleteUser(user).subscribe(
      (userData) => {
        console.log('userData', userData);
        const index = this.users.indexOf(user);
        if (index > -1) {
          this.users.splice(index, 1);
        }
        console.log(this.users);
      }
    );
    this.subscriptions.push(subscription);
  }

  /**
   * Obtener el usuario que ha sido clickeado en la tabla para luego realizarle una accion (ver, editar, eliminar)
   * @param user dato del Usuario que ha sido seleccionado en la tabla
   */
  toucheUser(user: User) {
    console.log(user);
  }

  seeUserDetails(user: User) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: 'auto',
      data: {
        userToShow: user,
        editMode: false,
        createMode: false,
        viewMode: true
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('cerrada vista de detalles de usuario, accion ver usuario');
      console.log(result);
    });
  }

  editUserDetails(user: User) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: 'auto',
      data: {
        userToShow: user,
        editMode: true,
        createMode: false,
        viewMode: false
      },
    });

    dialogRef.afterClosed().subscribe( (result: User) => {
      console.log('cerrada vista de detalles de usuario, accion editar usuario');
      console.log('usuario enviado', user);
      console.log('usuario editado', result);
      this.updateUser(result);
    });
  }

  createUser(user: User) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: 'auto',
      data: {
        userToShow: user,
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

}

