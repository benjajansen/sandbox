import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SecurityUser } from '../../../models/security/User';
import { RegisterService } from '../../../services/register.service';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import {SecurityPassword} from "../../../models/security/Password";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class Register {
  registerForm: FormGroup;

  newUser: SecurityUser = new SecurityUser();
  userPassword: SecurityPassword = new SecurityPassword();
  registered: boolean = false;

  formErrors = {
    'firstName':'',
    'lastName':'',
    'customer':'',
    'warehouse':'',
    'groupHeader':'',
    'jobTitle':'',
    'telNo':'',
    'cellNo':'',
    'email':'',
    'logonName':'',
    'registerDate':'',
    'createDate':'',
    'createUser':'',
    'active':'',
    'inactiveDate':''
  };

  validationMessages = {
    'firstName':  'First Name required',
    'lastName':   'Last Name required',
    'customer':   '',
    'warehouse':  '',
    'groupHeader':'User Group required',
    'jobTitle':   '',
    'telNo':      '',
    'cellNo':     '',
    'email':      'Email required',
    'logonName':  'Logon Name required',
    'registerDate':'',
    'createDate':'',
    'createUser':'',
    'active':'',
    'inactiveDate':''
  }

  constructor (private fb: FormBuilder, private loginService: LoginService, private router: Router, private registerService: RegisterService) {}

  createForm() {
    this.registerForm = this.fb.group({
      firstName: [
        this.newUser.firstName,
        Validators.required
      ],
      lastName: [
        this.newUser.lastName,
        Validators.required
      ],
      customer: [
        this.newUser.customer,
        Validators.required
      ],
      warehouse: [
        this.newUser.warehouse,
        Validators.required
      ],
      groupHeader: [
        this.newUser.groupHeader,
        Validators.required
      ],
      jobTitle: [
        this.newUser.jobTitle,
        Validators.required
      ],
      telNo: [
        this.newUser.telNo,
        Validators.required
      ],
      cellNo: [
        this.newUser.cellNo,
        Validators.required
      ],
      email: [
        this.newUser.email,
        Validators.required
      ],
      logonName: [
        this.newUser.logonName,
        Validators.required
      ],
      registerDate: [
        this.newUser.registerDate,
        Validators.required
      ],
      createDate: [
        this.newUser.createDate,
        Validators.required
      ],
      createUser: [
        this.newUser.createUser,
        Validators.required
      ],
      active: [
        this.newUser.active,
        Validators.required
      ],
      inactiveDate: [
        this.newUser.inactiveDate,
        Validators.required
      ],
      password: [
        this.userPassword.currentPassword,
        Validators.required
      ]
    });

    this.registerForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) {return; }

    const form = this.registerForm;

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
    //Check for duplicate on the Account Number
    if (this.costCentreShort?this.costCentreShort.length>0:false) {
      if ((this.goodsIssueForm.get('ccNo').value) &&
          (this.goodsIssueForm.get('ccNo').value != this.costCentreShort.find(debt => debt.value == this.autoCompleteControl.value).value)) {
        if (this.costCentreShort.find(debt => debt.value.toLowerCase() === this.goodsIssueForm.get('ccNo').value.toLowerCase())) {
          this.formErrors['ccNo'] += this.validationMessages['ccNo'].duplicate;
          this.goodsIssueForm.get('ccNo').setErrors({'incorrect': true});
        }
        else {
          this.goodsIssueForm.get('accNo').setErrors(null)
        }
      }
    }
    */
  }

  onSubmit() {
    console.log("submit test");
    this.registerService.sendUser(this.newUser)
      .subscribe(
        data => {
          this.registered = true;
          this.newUser = new SecurityUser();
        },
        error => console.log(error)
      );
  }
}
