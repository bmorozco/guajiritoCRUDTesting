import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../models/my-error-state-matcher';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {}

}
