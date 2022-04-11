/**
 * Created by Benja on 5/28/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {AdminCityTown} from "../../../models/admin/CityTown";

@Component({
  selector: 'adminCityTown'
  ,templateUrl: './cityTown.component.html'
})
export class AdminCityTownComponent implements OnInit{
  cityForm: FormGroup;
  cities : ShortDataPackage[];

  provinces : ShortDataPackage[];
  countries : ShortDataPackage[];

  newCityTown: AdminCityTown = new AdminCityTown();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  countrySelected: boolean = false;
  provinceSelected: boolean = false;

  selectedCountryId: number = 0;
  selectedProvinceId: number = 0;

  filteredCountries: ShortDataPackage[];
  filteredProvinces: ShortDataPackage[];

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

  getCitiesByCountryAndProvince(countryId: number, provinceId: number) {
    console.log("countryId: " + countryId)
    console.log("provinceId: " + provinceId)
    if((countryId == 0) || (provinceId == 0)){
      this.cities = [];
    } else {
      this.adminService.getCityTownByCountryAndProvinceShort(countryId, provinceId).subscribe(
        data => {
          this.cities = JSON.parse(JSON.parse(JSON.stringify(data))._body);
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
      if ((this.cityForm.get('country').value) &&
        (!this.filteredCountries.find(country => country.value == this.cityForm.get('country').value))) {
        this.countrySelected = false;
        this.cityForm.get('country').setErrors({'incorrect':true});
        this.formErrors['country'] += this.validationMessages['country'].incorrect;
      }
      else if ( (this.cityForm.get('country').value) &&
        (this.filteredCountries.find(country => country.value == this.cityForm.get('country').value)) &&
        (this.cityForm.get('country').value == this.filteredCountries.find(country => country.value == this.cityForm.get('country').value).value)) {
        this.countrySelected = true;
        this.cityForm.get('country').setErrors(null);
      }
    }
    else {
      this.countrySelected = false;
    }

    if(this.countrySelected) {
      this.selectedCountryId = this.filteredCountries.find(country => country.value == this.cityForm.get('country').value).id
      this.getProvincesByCountry(this.selectedCountryId);
    }
  }

  filterProvinces(val: string){
    this.filteredProvinces = this.provinces.filter(option =>
      option.value.toLowerCase().includes(val.toLowerCase())
    );

    if ((this.countrySelected) &&
      (this.filteredProvinces?this.filteredProvinces.length>0:false)) {
      if ((this.cityForm.get('province').value) &&
        (!this.filteredProvinces.find(province => province.value == this.cityForm.get('province').value))) {
        this.provinceSelected = false;
        this.cityForm.get('province').setErrors({'incorrect':true});
        this.formErrors['province'] += this.validationMessages['province'].incorrect;
      }
      else if ( (this.cityForm.get('province').value) &&
        (this.filteredProvinces.find(province => province.value == this.cityForm.get('province').value)) &&
        (this.cityForm.get('province').value == this.filteredProvinces.find(province => province.value == this.cityForm.get('province').value).value)) {
        this.provinceSelected = true;
        this.cityForm.get('province').setErrors(null);
      }
    }
    else {
      this.provinceSelected = false;
    }

    console.log("provinceSelected: " + this.provinceSelected)

    if(this.provinceSelected) {
      this.selectedProvinceId = this.filteredProvinces.find(province => province.value == this.cityForm.get('province').value).id
      this.getCitiesByCountryAndProvince(this.selectedCountryId, this.selectedProvinceId);
    }
  }

  onDelete(id: number) {
    if (this.cities.find(data => data.id === id)) {
      this.newCityTown.description = this.cities.find(data => data.id === id).value;
      this.newCityTown.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.deleteCityTown(this.newCityTown).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newCityTown = new AdminCityTown();
            this.clearForm();
            this.getCitiesByCountryAndProvince(this.selectedCountryId, this.selectedProvinceId);
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
    this.cityForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.cities.find(data => data.value == value)) {

      return;
    }

    this.cities.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.cities)
  }

  update(id: number): boolean {
    if (this.cities.find(data => data.id === id)) {
      this.newCityTown.description = this.cities.find(data => data.id === id).value;
      this.newCityTown.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateCityTown(this.newCityTown).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newCityTown = new AdminCityTown();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.cityForm = this.fb.group({
      description: [
        this.newCityTown.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ],
      country: [
        this.newCityTown.country,
        Validators.required
      ],
      province: [
        this.newCityTown.province,
        Validators.required
      ]
    });

    this.cityForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.cityForm.get('country').valueChanges.subscribe(
      data => {
        this.filterCountries(data)
      }
    );

    this.cityForm.get('province').valueChanges.subscribe(
      data => {
        this.filterProvinces(data)
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.cityForm) {return; }

    const form = this.cityForm;

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

    //Check for duplicate on the Description
    if (this.cities?this.cities.length>0:false) {
      if ((this.cityForm.get('description').value) &&
        (this.cities.find(cred => cred.value.toLowerCase() == this.cityForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.cityForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.cityForm.get('description').validator?this.cityForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.cityForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': '',
    'country': '',
    'province': ''
  };

  validationMessages = {
    'description': {
      'required':   'CityTown name is required.'
      ,'minlength': 'CityTown name must be at least 4 characters long.'
      ,'duplicate': 'CityTown name must be unique.'
    },
    'country': {
      'required':   'Country name required.',
      'incorrect':  'Country name is not valid'
    },
    'province': {
      'required':   'Province name required.',
      'incorrect':  'Province name is not valid'
    }
  }


  onSubmit() {
    this.newCityTown = this.cityForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCityTown.createUser = this.user
        this.adminService.sendCityTown(this.newCityTown).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newCityTown = new AdminCityTown();
            this.getCitiesByCountryAndProvince(this.selectedCountryId, this.selectedProvinceId);
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
