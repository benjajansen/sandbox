/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemPaymentTerm} from "../../../models/system/PaymentTerm";

@Component({
  selector: 'systemPaymentTerm'
  ,templateUrl: './paymentTerm.component.html'
})
export class SystemPaymentTermComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  paymentTermForm: FormGroup;
  paymentTerms : ShortDataPackage[];

  newPaymentTerm: SystemPaymentTerm = new SystemPaymentTerm();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getPaymentTerms();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.paymentTerms.find(data => data.id === id)) {
      this.newPaymentTerm.description = this.paymentTerms.find(data => data.id === id).value;
      this.newPaymentTerm.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deletePaymentTerm(this.newPaymentTerm).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newPaymentTerm = new SystemPaymentTerm();
            this.clearForm();
            this.getPaymentTerms();
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
    if(this.paymentTerms.find(data => data.value == value))
      return;
    this.paymentTerms.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.paymentTerms)
  }

  clearForm() {
    this.paymentTermForm.patchValue({
      description: ""
    });
  }

  getPaymentTerms() {
    this.systemService.getPaymentTermShort().subscribe(
      data => {
        this.paymentTerms = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentTerms);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.paymentTerms.find(data => data.id === id)) {
      this.newPaymentTerm.description = this.paymentTerms.find(data => data.id === id).value;
      this.newPaymentTerm.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updatePaymentTerm(this.newPaymentTerm).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentTerm = new SystemPaymentTerm();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.paymentTermForm = this.fb.group({
      description: [
        this.newPaymentTerm.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.paymentTermForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.paymentTermForm) {return; }

    const form = this.paymentTermForm;

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
    if (this.paymentTerms?this.paymentTerms.length>0:false) {
      if ((this.paymentTermForm.get('description').value) &&
        (this.paymentTerms.find(cred => cred.value.toLowerCase() == this.paymentTermForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.paymentTermForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.paymentTermForm.get('description').validator?this.paymentTermForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.paymentTermForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'PaymentTerm name is required.'
      ,'minlength': 'PaymentTerm name must be at least 4 characters long.'
      ,'duplicate': 'PaymentTerm name must be unique.'
    }
  }


  onSubmit() {
    this.newPaymentTerm = this.paymentTermForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newPaymentTerm.createUser = this.user
        this.systemService.sendPaymentTerm(this.newPaymentTerm).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newPaymentTerm = new SystemPaymentTerm();
            this.getPaymentTerms();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
