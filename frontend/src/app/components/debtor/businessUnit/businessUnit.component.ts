/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {DebtorBusinessUnit} from "../../../models/debtor/BusinessUnit";
import {DebtorService} from "../../../services/debtor.service";


@Component({
  selector: 'debtorBusinessUnit'
  ,templateUrl: './businessUnit.component.html'
})
export class DebtorBusinessUnitComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  businessUnitForm: FormGroup;
  businessUnits : ShortDataPackage[];

  newBusinessUnit: DebtorBusinessUnit = new DebtorBusinessUnit();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private debtorService: DebtorService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getBusinessUnits();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.businessUnits.find(data => data.id === id)) {
      this.newBusinessUnit.description = this.businessUnits.find(data => data.id === id).value;
      this.newBusinessUnit.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.deleteBusinessUnit(this.newBusinessUnit).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newBusinessUnit = new DebtorBusinessUnit();
            this.clearForm();
            this.getBusinessUnits();
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
    if(this.businessUnits.find(data => data.value == value))
      return;
    this.businessUnits.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.businessUnits)
  }

  clearForm() {
    this.businessUnitForm.patchValue({
      description: ""
    });
  }

  getBusinessUnits() {
    this.debtorService.getBusinessUnitShort().subscribe(
      data => {
        this.businessUnits = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.businessUnits);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.businessUnits.find(data => data.id === id)) {
      this.newBusinessUnit.description = this.businessUnits.find(data => data.id === id).value;
      this.newBusinessUnit.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.updateBusinessUnit(this.newBusinessUnit).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newBusinessUnit = new DebtorBusinessUnit();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.businessUnitForm = this.fb.group({
      description: [
        this.newBusinessUnit.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.businessUnitForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.businessUnitForm) {return; }

    const form = this.businessUnitForm;

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
    if (this.businessUnits?this.businessUnits.length>0:false) {
      if ((this.businessUnitForm.get('description').value) &&
        (this.businessUnits.find(cred => cred.value.toLowerCase() == this.businessUnitForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.businessUnitForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.businessUnitForm.get('description').validator?this.businessUnitForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.businessUnitForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'BusinessUnit name is required.'
      ,'minlength': 'BusinessUnit name must be at least 4 characters long.'
      ,'duplicate': 'BusinessUnit name must be unique.'
    }
  }


  onSubmit() {
    this.newBusinessUnit = this.businessUnitForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newBusinessUnit.createUser = this.user
        console.log(this.newBusinessUnit);
        this.debtorService.sendBusinessUnit(this.newBusinessUnit).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newBusinessUnit = new DebtorBusinessUnit();
            this.getBusinessUnits();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
