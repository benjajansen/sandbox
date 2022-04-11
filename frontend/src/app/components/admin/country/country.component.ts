/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {AdminCountry} from "../../../models/admin/Country";

@Component({
  selector: 'adminCountry'
  ,templateUrl: './country.component.html'
})
export class AdminCountryComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  countryForm: FormGroup;
  countries : ShortDataPackage[];

  newCountry: AdminCountry = new AdminCountry();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Country name is required.'
      ,'minlength': 'Country name must be at least 4 characters long.'
      ,'duplicate': 'Country name must be unique.'
    }
  }

  constructor (private fb: FormBuilder,
               private adminService: AdminService,
               private SecurityService:SecurityService,
               private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
  }

  getCountries() {
    this.adminService.getCountryShort().subscribe(
      data => {
        this.countries = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.countries);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.countries.find(data => data.id === id)) {
      this.newCountry.description = this.countries.find(data => data.id === id).value;
      this.newCountry.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.deleteCountry(this.newCountry).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newCountry = new AdminCountry();
            this.clearForm();
            this.getCountries();
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

  clearForm() {
    this.countryForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.countries.find(data => data.value == value)) {

      return;
    }

    this.countries.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.countries)
  }

  update(id: number): boolean {
    if (this.countries.find(data => data.id === id)) {
      this.newCountry.description = this.countries.find(data => data.id === id).value;
      this.newCountry.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateCountry(this.newCountry).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newCountry = new AdminCountry();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.countryForm = this.fb.group({
      description: [
        this.newCountry.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.countryForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.countryForm) {return; }

    const form = this.countryForm;

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
    if (this.countries?this.countries.length>0:false) {
      if ((this.countryForm.get('description').value) &&
        (this.countries.find(cred => cred.value.toLowerCase() == this.countryForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.countryForm.get('description').setErrors({'incorrect': true})
      } else {
        if(this.countryForm.get('description').validator?this.countryForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.countryForm.get('description').setErrors(null)
      }
    }
  }

  onSubmit() {
    this.newCountry = this.countryForm.value;
    console.log("country: " + this.newCountry)
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCountry.createUser = this.user
        console.log("Id: " + this.newCountry.id)
        console.log("description: " + this.newCountry.description)
        console.log("user: " + this.newCountry.createUser)
        console.log("date: " + this.newCountry.createDate)
        this.adminService.sendCountry(this.newCountry).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newCountry = new AdminCountry();
            this.getCountries();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
