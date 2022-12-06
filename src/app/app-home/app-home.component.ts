import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = new Array<Subscription>();
  menuExpandHelp = false;
  menuExpandCategory = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  logout() {
   this.loginService.logout();
  }

}
