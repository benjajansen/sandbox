/**
 * Created by Benja on 4/30/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'changePassword',

  templateUrl: './changePassword.component.html',
  styleUrls: ['../login.component.css']
})
export class ChangePasswordComponent implements OnInit{
  changePasswordForm :FormGroup;

  private model = {'username': '', 'oldPassword': '', 'newPassword': '', 'repeatPassword': ''};
  private currentUserName;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){
    this.currentUserName=sessionStorage.getItem("currentUserName");
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this.fb.group({
      userName: [
        this.model.username,
        Validators.required
      ],
      oldPassword: [
        this.model.oldPassword,
        Validators.required
      ],
      newPassword: [
        this.model.newPassword,
        Validators.required
      ],
      repeatPassword: [
        this.model.repeatPassword,
        Validators.required
      ]
    });

    this.changePasswordForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.changePasswordForm) {return; }

    const form = this.changePasswordForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }

/*
    //Check for valid username
    if (this.itemMasterShort?this.itemMasterShort.length>0:false) {
      if ((this.itemMasterForm.get('code').value) &&
        (this.itemMasterForm.get('code').value != this.itemMasterShort.find(cred => cred.value == this.autoCompleteControl.value).value)) {
        if (this.itemMasterShort.find(cred => cred.value.toLowerCase() === this.itemMasterForm.get('code').value.toLowerCase())) {
          this.formErrors['code'] += this.validationMessages['code'].duplicate;
          this.itemMasterForm.get('code').setErrors({'incorrect': true});
        }
        else {
          this.itemMasterForm.get('code').setErrors(null)
        }
      }
    }
*/
  }

  formErrors = {
    'userName': '',
    'oldPassword': '',
    'newPassword': '',
    'repeatPassword': ''
  };

  validationMessages = {
    'userName': {
      'required': 'Username is required.',
      'invalid': 'Username does not exist'
    },
    'oldPassword': {
      'required': 'Password is required.'
    },
    'newPassword': {
      'required': 'Password is required.',
      'new': "New password can't be the same as old password"
    },
    'repeatPassword': {
      'required': 'Password is required.',
      'mismatch': "Repeat password has to match new password"
    }
  }

  onSubmit() {
    this.model.username = this.changePasswordForm.value.userName;
    this.model.newPassword = this.changePasswordForm.value.newPassword;
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        sessionStorage.setItem("token", JSON.parse(JSON.stringify(data))._body)
        this.loginService.sendToken(sessionStorage.getItem("token")).subscribe(
          data => {
            this.currentUserName = this.model.username;
            sessionStorage.setItem("currentUserName", this.model.username);
            this.model.username = '';
            this.model.newPassword = '';
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

    this.router.navigate(['/home']);
  }

}
