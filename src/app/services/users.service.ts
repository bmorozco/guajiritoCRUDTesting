import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  })
};

@Injectable(/*{
   providedIn: 'root'
}*/)
export class UsersService {
  private users: Array<User>;
  private usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  //
  // getAllUsers(): Observable<Array<User>> {
  //   return of(this.users);
  // }
  //
  // addUser(user: User) {
  //   this.users.push(user);
  // }
  //
  // editUser(userEdited: User) {
  //
  // }
  //
  // deleteUser(user?: User, id?: string, index?: string) {
  //   let result = -1;
  //   if (user || id) {
  //     result = this.users.findIndex(value => value === user || value.id === id);
  //   } else if (user && index) {
  //     result = this.users.find( (user, index) => {
  //
  //     });
  //   }
  //   if (result !== -1) {
  //   }
  // }

  /**
   * Obteniendo todos los datos de usuarios del servidor
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL)
      .pipe(
        tap(users => {
          console.log('obteniendo usuarios');
          this.users = users.slice();
        }),
        catchError(this.handleError('getUsers', []))
      );
  }

  /**
   * Obtener datos del usuario especificado
   * @param id ID del usuario a obtener
   */
  getUser(id: string): Observable<User> {
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url).pipe(
      tap((user) => {
        console.log(`obteniendo daots del usuario con id=${id}`);
      }),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /**
   * Añadir un usuario
   * @param user Datos del usuario a añadir
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL, user, httpOptions).pipe(
      tap((userR: User) => {
        console.log(`añadido el usuario con id=${userR.id}`);
      }),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /**
   * Actualizar datos de un usuario
   * @param user Datos del usuario a actualizar
   */
  updateUser(user: User): Observable<User> {
    const id = user.id;
    const url = `${this.usersURL}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap((userR: User) => {
        console.log(`actualizar usuario con id=${user.id}`);
      }),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(user: User): Observable<User> {
    const id = user.id;
    const url = `${this.usersURL}/${id}`;
    console.log(url);
    return this.http.delete<User>(url).pipe(
      tap(result => {
        console.log(`eliminado el usuario con id=${id}`);
      }),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
