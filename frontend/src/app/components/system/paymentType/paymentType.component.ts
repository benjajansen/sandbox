/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemPaymentType} from "../../../models/system/PaymentType";

@Component({
  selector: 'systemPaymentType'
  ,templateUrl: './paymentType.component.html'
})
export class SystemPaymentTypeComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  paymentTypeForm: FormGroup;
  paymentTypes : ShortDataPackage[];

  newPaymentType: SystemPaymentType = new SystemPaymentType();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getPaymentTypes();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.paymentTypes.find(data => data.id === id)) {
      this.newPaymentType.description = this.paymentTypes.find(data => data.id === id).value;
      this.newPaymentType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deletePaymentType(this.newPaymentType).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newPaymentType = new SystemPaymentType();
            this.clearForm();
            this.getPaymentTypes();
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
    if(this.paymentTypes.find(data => data.value == value))
      return;
    this.paymentTypes.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.paymentTypes)
  }

  clearForm() {
    this.paymentTypeForm.patchValue({
      description: ""
    });
  }

  getPaymentTypes() {
    this.systemService.getPaymentTypeShort().subscribe(
      data => {
        this.paymentTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentTypes);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.paymentTypes.find(data => data.id === id)) {
      this.newPaymentType.description = this.paymentTypes.find(data => data.id === id).value;
      this.newPaymentType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updatePaymentType(this.newPaymentType).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentType = new SystemPaymentType();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.paymentTypeForm = this.fb.group({
      description: [
        this.newPaymentType.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.paymentTypeForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.paymentTypeForm) {return; }

    const form = this.paymentTypeForm;

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
    if (this.paymentTypes?this.paymentTypes.length>0:false) {
      if ((this.paymentTypeForm.get('description').value) &&
        (this.paymentTypes.find(cred => cred.value.toLowerCase() == this.paymentTypeForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.paymentTypeForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.paymentTypeForm.get('description').validator?this.paymentTypeForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.paymentTypeForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'PaymentType name is required.'
      ,'minlength': 'PaymentType name must be at least 4 characters long.'
      ,'duplicate': 'PaymentType name must be unique.'
    }
  }


  onSubmit() {
    this.newPaymentType = this.paymentTypeForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newPaymentType.createUser = this.user
        this.systemService.sendPaymentType(this.newPaymentType).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentType = new SystemPaymentType();
            this.getPaymentTypes();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
