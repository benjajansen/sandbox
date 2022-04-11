/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemPaymentMethod} from "../../../models/system/PaymentMethod";

@Component({
  selector: 'systemPaymentMethod'
  ,templateUrl: './paymentMethod.component.html'
})
export class SystemPaymentMethodComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  paymentMethodForm: FormGroup;
  paymentMethods : ShortDataPackage[];

  newPaymentMethod: SystemPaymentMethod = new SystemPaymentMethod();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getPaymentMethods();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.paymentMethods.find(data => data.id === id)) {
      this.newPaymentMethod.description = this.paymentMethods.find(data => data.id === id).value;
      this.newPaymentMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deletePaymentMethod(this.newPaymentMethod).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newPaymentMethod = new SystemPaymentMethod();
            this.clearForm();
            this.getPaymentMethods();
          },

          error => {
            console.log("2 " + error)
            this.deletedError = true;
            this.clearForm();

            //this.modal.nativeElement.show();
          }
        );
      },
      error => console.log("3 " + error)
    )
  }

  onEdit(value: string, id: number) {
    if(this.paymentMethods.find(data => data.value == value))
      return;
    this.paymentMethods.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.paymentMethods)
  }

  clearForm() {
    this.paymentMethodForm.patchValue({
      description: ""
    });
  }

  getPaymentMethods() {
    this.systemService.getPaymentMethodShort().subscribe(
      data => {
        this.paymentMethods = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentMethods);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.paymentMethods.find(data => data.id === id)) {
      this.newPaymentMethod.description = this.paymentMethods.find(data => data.id === id).value;
      this.newPaymentMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updatePaymentMethod(this.newPaymentMethod).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentMethod = new SystemPaymentMethod();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.paymentMethodForm = this.fb.group({
      description: [
        this.newPaymentMethod.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.paymentMethodForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.paymentMethodForm) {return; }

    const form = this.paymentMethodForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      console.log("this: " + field);
      this.formErrors[field] = '';
      const control = form.get(field);
      console.log(control);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }

    //Check for duplicate on the Description
    if (this.paymentMethods?this.paymentMethods.length>0:false) {
      if ((this.paymentMethodForm.get('description').value) &&
        (this.paymentMethods.find(cred => cred.value.toLowerCase() == this.paymentMethodForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.paymentMethodForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.paymentMethodForm.get('description').validator?this.paymentMethodForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.paymentMethodForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'PaymentMethod name is required.'
      ,'minlength': 'PaymentMethod name must be at least 4 characters long.'
      ,'duplicate': 'PaymentMethod name must be unique.'
    }
  }


  onSubmit() {
    this.newPaymentMethod = this.paymentMethodForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newPaymentMethod.createUser = this.user
        this.systemService.sendPaymentMethod(this.newPaymentMethod).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentMethod = new SystemPaymentMethod();
            this.getPaymentMethods();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
