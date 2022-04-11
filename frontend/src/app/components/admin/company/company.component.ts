/**
 * Created by Benja on 5/4/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service"
import {AdminCompany} from "../../../models/admin/Company";
import {UploadFileService} from "../../../services/uploadFile.service";
import {FileService} from "../../../services/file.service";

import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";


@Component({
  selector: 'company',
  templateUrl: './company.component.html'
})
export class AdminCompanyComponent implements OnInit{

  companyForm: FormGroup;

  countries: ShortDataPackage[];

  newCompany: AdminCompany = new AdminCompany();
  companyAdded: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private adminService:AdminService, private uploadFileService:UploadFileService, private addFileService:FileService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
  }

  getCountries() {
    this.adminService.getCountryShort().subscribe(
      data => {
        this.countries = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.countries);
      },
      error => console.log(error)
    )
  }

  createForm() {
    this.companyForm = this.fb.group({
      tradeName: [
        this.newCompany.tradeName
        ,Validators.required
      ]
      ,regName: [
        this.newCompany.regName
        ,Validators.required
      ]
      ,regNo: [
        this.newCompany.regNo
      ]
      ,vatNo: [
        this.newCompany.vatNo
      ]
      ,telNo: [
        this.newCompany.telNo
      ]
      ,faxNo: [
        this.newCompany.faxNo
      ]
      ,webSite: [
        this.newCompany.webSite
      ]
      ,street1: [
        this.newCompany.street1
      ]
      ,street2: [
        this.newCompany.street2
      ]
      ,street3: [
        this.newCompany.street3
      ]
      ,street4: [
        this.newCompany.street4
      ]
      ,streetPostalCode: [
        this.newCompany.streetPostalCode
      ]
      ,box1: [
        this.newCompany.box1
      ]
      ,box2: [
        this.newCompany.box2
      ]
      ,box3: [
        this.newCompany.box3
      ]
      ,box4: [
        this.newCompany.box4
      ]
      ,boxPostalCode: [
        this.newCompany.boxPostalCode
      ]
      ,country: [
        this.newCompany.country
      ]
      ,bankName: [
        this.newCompany.bankName
      ]
      ,bankBranchNo: [
        this.newCompany.bankBranchNo
      ]
      ,bankAccNo: [
        this.newCompany.bankAccNo
      ]
      ,bankAccName: [
        this.newCompany.bankAccName
      ]
      ,headerColour: [
        this.newCompany.headerColour
      ]
      ,hFontColour: [
        this.newCompany.hFontColour
      ]
      ,bodyColour: [
        this.newCompany.bodyColour
      ]
      ,bFontColour: [
        this.newCompany.bFontColour
      ]
      ,tempPrefix: [
        this.newCompany.tempPrefix
      ]
    });

    this.companyForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.companyForm) {return; }

    const form = this.companyForm;

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

  formErrors = {
    'tradeName': ''
    ,'regName': ''
    ,'regNo': ''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'website': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'box1': ''
    ,'box2': ''
    ,'box3': ''
    ,'box4': ''
    ,'boxPostalCode': ''
    ,'country': ''
    ,'bankName': ''
    ,'bankBranchNo': ''
    ,'bankAccNo': ''
    ,'bankAccName': ''
    ,'headerColour': ''
    ,'hFontColour': ''
    ,'bodyColour': ''
    ,'bFontColour': ''
    ,'tempPrefix': ''
  };

  validationMessages = {
    'tradeName': ''
    ,'regName': ''
    ,'regNo': ''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'website': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'box1': ''
    ,'box2': ''
    ,'box3': ''
    ,'box4': ''
    ,'boxPostalCode': ''
    ,'country': ''
    ,'bankName': ''
    ,'bankBranchNo': ''
    ,'bankAccNo': ''
    ,'bankAccName': ''
    ,'headerColour': ''
    ,'hFontColour': ''
    ,'bodyColour': ''
    ,'bFontColour': ''
    ,'tempPrefix': ''
  }

  onSubmit() {
    this.newCompany = this.companyForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.sendCompany(this.newCompany).subscribe(
          data => {
            this.companyAdded = true;
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newCompany = this.companyForm.value;
    console.log(this.newCompany);
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateCompany(this.newCompany).subscribe(
          data => {
            this.companyAdded = true;
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
