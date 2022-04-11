/**
 * Created by Benja on 4/30/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm :FormGroup;

  private model = {'username': '', 'password': ''};
  private currentUserName;

  private showError = false;

  formErrors = {
    'userName': ''
    ,'password': ''
  };

  validationMessages = {
    'userName': {
      'required': 'Username is required.'
      ,'invalid': 'Invalid Username and/or Password'
    }
    ,'password': {
      'required': 'Password is required.'
    }
  }

  jsonMessage = {
    'timestamp' : '',
    'status' : '',
    'error' : '',
    'exception' : '',
    'message' : '',
    'path' : ''
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){
    this.currentUserName=sessionStorage.getItem("currentUserName");
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: [
        this.model.username
        ,Validators.required
      ]
      , password: [
        this.model.password
        , Validators.required
      ]
    });

    this.loginForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) {return; }

    const form = this.loginForm;

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
  }

  onSubmit() {
    this.model.username = this.loginForm.value.userName;
    this.model.password = this.loginForm.value.password;
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        sessionStorage.setItem("token", JSON.parse(JSON.stringify(data))._body)
        sessionStorage.setItem("currentUserName", this.model.username);
        this.router.navigate(['/home']);
        /*
        this.loginService.sendToken(sessionStorage.getItem("token")).subscribe(
          data => {

          },
          error => console.log("1 " + error)
        );
        */
      },
      error => {
        this.jsonMessage =  JSON.parse(JSON.parse(JSON.stringify(error))._body);
        if(this.jsonMessage['status'] == '500') {
          if(this.jsonMessage['message'] == 'invalid') {
            this.formErrors['userName'] += this.validationMessages['userName'].invalid;
            this.showError = true;
          }
        }

      }
    );
  }

}
