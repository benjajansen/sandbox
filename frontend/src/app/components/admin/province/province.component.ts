/**
 * Created by Benja on 5/28/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {AdminProvince} from "../../../models/admin/Province";

@Component({
  selector: 'adminProvince'
  ,templateUrl: './province.component.html'
})
export class AdminProvinceComponent implements OnInit{

  provinceForm: FormGroup;
  provinces : ShortDataPackage[];

  countries : ShortDataPackage[];

  newProvince: AdminProvince = new AdminProvince();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  countrySelected: boolean = false;

  selectedCountryId: number = 0;

  filteredCountries: ShortDataPackage[];

  constructor (private fb: FormBuilder, private adminService: AdminService, private SecurityService:SecurityService) {}

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

  getProvincesByCountry(countryId: number) {
    if(countryId == 0){
      this.provinces = [];
    } else {
      this.adminService.getProvincesByCountryId(countryId).subscribe(
        data => {
          this.provinces = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        },
        error => console.log("1 " + error)
      )
    }
  }

  filterCountries(val: string){
    this.filteredCountries = this.countries.filter(option =>
      option.value.toLowerCase().includes(val.toLowerCase())
    );

    //This is to make sure a valid country has been selected
    if (this.filteredCountries?this.filteredCountries.length>0:false) {
      if ((this.provinceForm.get('country').value) &&
        (!this.filteredCountries.find(country => country.value == this.provinceForm.get('country').value))) {
        this.countrySelected = false;
        console.log("1")
        this.provinceForm.get('country').setErrors({'incorrect':true});
        this.formErrors['country'] += this.validationMessages['country'].incorrect;
      }
      else if ( (this.provinceForm.get('country').value) &&
        (this.filteredCountries.find(country => country.value == this.provinceForm.get('country').value)) &&
        (this.provinceForm.get('country').value == this.filteredCountries.find(country => country.value == this.provinceForm.get('country').value).value)) {
        this.countrySelected = true;
        console.log("2")
        this.provinceForm.get('country').setErrors(null);
      }
    }
    else {
      this.countrySelected = false;
    }

    if(this.countrySelected) {
      this.selectedCountryId = this.filteredCountries.find(country => country.value == this.provinceForm.get('country').value).id
      this.getProvincesByCountry(this.selectedCountryId);
    }
  }

  onDelete(id: number) {
    if (this.provinces.find(data => data.id === id)) {
      this.newProvince.description = this.provinces.find(data => data.id === id).value;
      this.newProvince.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.deleteProvince(this.newProvince).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newProvince = new AdminProvince();
            this.clearForm();
            this.getProvincesByCountry(this.selectedCountryId);
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
    this.provinceForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.provinces.find(data => data.value == value)) {

      return;
    }

    this.provinces.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.provinces)
  }

  update(id: number): boolean {
    if (this.provinces.find(data => data.id === id)) {
      this.newProvince.description = this.provinces.find(data => data.id === id).value;
      this.newProvince.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateProvince(this.newProvince).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newProvince = new AdminProvince();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.provinceForm = this.fb.group({
      description: [
        this.newProvince.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ],
      country: [
        this.newProvince.country,
        Validators.required
      ]
    });

    this.provinceForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.provinceForm.get('country').valueChanges.subscribe(
      data => {
        this.filterCountries(data)
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.provinceForm) {return; }

    const form = this.provinceForm;

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
    if (this.provinces?this.provinces.length>0:false) {
      if ((this.provinceForm.get('description').value) &&
        (this.provinces.find(cred => cred.value.toLowerCase() == this.provinceForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.provinceForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.provinceForm.get('description').validator?this.provinceForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.provinceForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': '',
    'country': ''
  };

  validationMessages = {
    'description': {
      'required':   'Province name is required.'
      ,'minlength': 'Province name must be at least 4 characters long.'
      ,'duplicate': 'Province name must be unique.'
    },
    'country': {
      'required':   'Country name required.',
      'incorrect':  'Country name is not valid'
    }
  }


  onSubmit() {
    this.newProvince = this.provinceForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newProvince.createUser = this.user
        this.adminService.sendProvince(this.newProvince).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newProvince = new AdminProvince();
            this.getProvincesByCountry(this.selectedCountryId);
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
