import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../../../models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MyErrorStateMatcher} from '../../../models/my-error-state-matcher';
import {UsersService} from '../../../services/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UserDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private usersService: UsersService) { }
  userToShow: User;
  editMode: boolean;
  createMode: boolean;
  viewMode: boolean;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  subscriptions: Array<Subscription> = new Array<Subscription>();

  ngOnInit() {
    this.initData();
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  initData() {
    this.userToShow = this.data.userToShow;
    this.editMode = this.data.editMode;
    this.createMode = this.data.createMode;
    this.viewMode = this.data.viewMode;
  }

  initForm() {
    let nameU = null;
    let userNameU = null;
    let companyU = null;
    let emailU = null;
    let phoneU = null;
    if (this.editMode || this.viewMode) {
      nameU = this.userToShow.name;
      userNameU = this.userToShow.username;
      companyU = this.userToShow.company.name;
      emailU = this.userToShow.email;
      phoneU = this.userToShow.phone;
    }
    this.form = new FormGroup({
      name: new FormControl(nameU, Validators.required),
      username: new FormControl(userNameU, Validators.required),
      company: new FormControl(companyU, Validators.required),
      email: new FormControl(emailU, [Validators.required, Validators.email]),
      phone: new FormControl(phoneU, Validators.required),
    });
  }

  closeDialog() {
    this.dialogRef.close(this.userToShow);
  }

  createOrEditUser() {
    let userData: User = {
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
    if (this.editMode) {
      const subscription = this.usersService.getUser(this.userToShow.id).subscribe(
        (userR: User) => {
          userData = userR;
          this.fillAndSendData(userData);
        }
      );
      this.subscriptions.push(subscription);
    } else { this.fillAndSendData(userData); }
  }

  fillAndSendData(userData: User) {
    userData.name = this.form.get('name').value;
    userData.username = this.form.get('username').value;
    userData.company.name = this.form.get('company').value;
    userData.email = this.form.get('email').value;
    userData.phone = this.form.get('phone').value;
    console.log('datos editados del usuario', userData);
    this.dialogRef.close(userData);
  }
}
