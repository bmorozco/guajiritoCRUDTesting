import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '../../../models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<UserDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }
  userToShow: User;
  form: FormGroup;

  ngOnInit() {
    this.userToShow = this.data.userToShow;
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(this.userToShow.name),
      username: new FormControl(this.userToShow.username),
      company: new FormControl(this.userToShow.company.name),
      email: new FormControl(this.userToShow.email),
      phone: new FormControl(this.userToShow.phone),
    });
  }

  closeDialog() {
    this.dialogRef.close(this.userToShow);
  }
}
