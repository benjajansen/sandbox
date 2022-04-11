/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {DebtorBusinessType} from "../../../models/debtor/BusinessType";
import {DebtorService} from "../../../services/debtor.service";


@Component({
  selector: 'debtorBusinessType'
  ,templateUrl: './businessType.component.html'
})
export class DebtorBusinessTypeComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  businessTypeForm: FormGroup;
  businessTypes : ShortDataPackage[];

  newBusinessType: DebtorBusinessType = new DebtorBusinessType();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private debtorService: DebtorService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getBusinessTypes();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.businessTypes.find(data => data.id === id)) {
      this.newBusinessType.description = this.businessTypes.find(data => data.id === id).value;
      this.newBusinessType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.deleteBusinessType(this.newBusinessType).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newBusinessType = new DebtorBusinessType();
            this.clearForm();
            this.getBusinessTypes();
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
    if(this.businessTypes.find(data => data.value == value))
      return;
    this.businessTypes.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.businessTypes)
  }

  clearForm() {
    this.businessTypeForm.patchValue({
      description: ""
    });
  }

  getBusinessTypes() {
    this.debtorService.getBusinessTypeShort().subscribe(
      data => {
        this.businessTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.businessTypes);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.businessTypes.find(data => data.id === id)) {
      this.newBusinessType.description = this.businessTypes.find(data => data.id === id).value;
      this.newBusinessType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.updateBusinessType(this.newBusinessType).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newBusinessType = new DebtorBusinessType();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.businessTypeForm = this.fb.group({
      description: [
        this.newBusinessType.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.businessTypeForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.businessTypeForm) {return; }

    const form = this.businessTypeForm;

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
    if (this.businessTypes?this.businessTypes.length>0:false) {
      if ((this.businessTypeForm.get('description').value) &&
        (this.businessTypes.find(cred => cred.value.toLowerCase() == this.businessTypeForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.businessTypeForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.businessTypeForm.get('description').validator?this.businessTypeForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.businessTypeForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'BusinessType name is required.'
      ,'minlength': 'BusinessType name must be at least 4 characters long.'
      ,'duplicate': 'BusinessType name must be unique.'
    }
  }


  onSubmit() {
    this.newBusinessType = this.businessTypeForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newBusinessType.createUser = this.user
        this.debtorService.sendBusinessType(this.newBusinessType).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newBusinessType = new DebtorBusinessType();
            this.getBusinessTypes();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
