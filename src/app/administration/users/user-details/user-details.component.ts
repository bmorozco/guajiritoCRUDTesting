import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userToShow: User;
  constructor(private formBuilder: FormBuilder,
              /*private activeModal: NgbActiveModal*/) { }

  ngOnInit() {
  }

}
