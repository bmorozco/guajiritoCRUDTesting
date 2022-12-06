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

}
