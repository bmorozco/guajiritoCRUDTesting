import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(userName: string) {
    localStorage.setItem('currentUser', userName);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
