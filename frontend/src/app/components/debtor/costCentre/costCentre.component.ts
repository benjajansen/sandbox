/**
 * Created by Benja on 5/4/2017.
 */

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Debtor} from '../../../models/debtor/Debtor';
import {DebtorService} from '../../../services/debtor.service';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {AdminService} from "../../../services/admin.service"
import {DebtCredAutoPackage} from "../../../models/dataPackages/DebtCredAutoPackage";
import {MatAutocompleteTrigger} from "@angular/material";
import {DebtorCostCentre} from "../../../models/debtor/CostCentre";
import {CostCentreAutoPackage} from "../../../models/dataPackages/CostCentreAutoPackage";


@Component({
  selector: 'debtorCostCentre',
  templateUrl: './costCentre.component.html'
})
export class DebtorCostCentreComponent implements OnInit{
  @ViewChild(MatAutocompleteTrigger)
  private trigger: MatAutocompleteTrigger;

  costCentreForm: FormGroup;

  costCentreShort: ShortDataPackage[];
  debtorsAuto: DebtCredAutoPackage[];
  costCentreAuto: CostCentreAutoPackage[];

  titles: ShortDataPackage[];

  branches: ShortDataPackage[];
  countries: ShortDataPackage[];
  provinces: ShortDataPackage[];
  cities: ShortDataPackage[];

  newCostCentre: DebtorCostCentre = new DebtorCostCentre();
  costCentreAdded: boolean = false;
  user: SecurityUser;

  filteredDebtors: DebtCredAutoPackage[];
  filteredCostCentres: CostCentreAutoPackage[];

  constructor (private fb: FormBuilder, private debtorService:DebtorService, private systemService:SystemService, private adminService:AdminService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getDebtorsAuto();
    this.getCostCentreAuto();
    this.getBranches();
    this.getTitles();
    this.getCities();
    this.getCountries();
    this.getProvinces();
    this.getCostCentreShort();
    this.createForm();
  }

  /*
  ngAfterViewInit() {
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.debtorsAuto?this.debtorsAuto.length>0:false) && option.option.value) {
        var id = this.debtorsAuto.find(debt => debt.accNo === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.debtorForm.get('accNo').setErrors(null)
        }
      }
    });
  }
  */

  filter(val: string){
    this.filteredDebtors = this.debtorsAuto.filter(option =>
      (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
    );
  }

  getDebtorsAuto() {
    this.debtorService.getDebtorAuto().subscribe(
      data => {
        this.debtorsAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredDebtors = this.debtorsAuto;
        console.log(this.debtorsAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getCostCentreAuto() {
    this.debtorService.getCostCentreAuto().subscribe(
      data => {
        this.costCentreAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredCostCentres = this.costCentreAuto;
        console.log(this.costCentreAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getCostCentreShort() {
    this.debtorService.getCostCentreShort().subscribe(
      data => {
        this.costCentreShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.costCentreShort);
      },
      error => console.log("1 " + error)
    )
  }

  getBranches() {
    this.adminService.getBranchShort().subscribe(
      data => {
        this.branches = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.branches);
      },
      error => console.log(error)
    )
  }

  getProvinces() {
    this.adminService.getProvinceShort().subscribe(
      data => {
        this.provinces = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.provinces);
      },
      error => console.log(error)
    )
  }

  getCities() {
    this.adminService.getCityTownShort().subscribe(
      data => {
        this.cities = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.cities);
      },
      error => console.log(error)
    )
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

  getTitles() {
    this.systemService.getTitleShort().subscribe(
      data => {
        this.titles = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.titles);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  populateForm(debtId:any) {
    console.log(debtId);

    this.debtorService.getDebtorById(debtId).subscribe(
      data => {
        this.newCostCentre = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        this.costCentreForm.get('ccNo').setValue(this.newCostCentre.ccNo);
        this.costCentreForm.get('name').setValue(this.newCostCentre.name);
        this.costCentreForm.get('debtor').setValue(this.newCostCentre.debtor?this.newCostCentre.debtor.accNo?this.newCostCentre.debtor.accNo:'':'');
        this.costCentreForm.get('street1').setValue(this.newCostCentre.street1?this.newCostCentre.street1:'');
        this.costCentreForm.get('street2').setValue(this.newCostCentre.street2?this.newCostCentre.street2:'');
        this.costCentreForm.get('street3').setValue(this.newCostCentre.street3?this.newCostCentre.street3:'');
        this.costCentreForm.get('street4').setValue(this.newCostCentre.street4?this.newCostCentre.street4:'');
        this.costCentreForm.get('streetPostalCode').setValue(this.newCostCentre.streetPostalCode?this.newCostCentre.streetPostalCode:'');
        this.costCentreForm.get('gps').setValue(this.newCostCentre.gps?this.newCostCentre.gps:'');
        this.costCentreForm.get('oppSName').setValue(this.newCostCentre.oppSName?this.newCostCentre.oppSName:'');
        this.costCentreForm.get('oppFName').setValue(this.newCostCentre.oppFName?this.newCostCentre.oppFName:'');
        this.costCentreForm.get('oppTitle').setValue(this.newCostCentre.oppTitle?this.newCostCentre.oppTitle.description?this.newCostCentre.oppTitle.description:'':'');
        this.costCentreForm.get('oppCellNo').setValue(this.newCostCentre.oppCellNo?this.newCostCentre.oppCellNo:'');
        this.costCentreForm.get('oppEmail').setValue(this.newCostCentre.oppEmail?this.newCostCentre.oppEmail:'');
        this.costCentreForm.get('suspended').setValue(this.newCostCentre.suspended?this.newCostCentre.suspended:false);
        this.costCentreForm.get('branch').setValue(this.newCostCentre.branch?this.newCostCentre.branch.description?this.newCostCentre.branch.description:'':'');
        this.costCentreForm.get('province').setValue(this.newCostCentre.province?this.newCostCentre.province.description?this.newCostCentre.province.description:'':'');
        this.costCentreForm.get('country').setValue(this.newCostCentre.country?this.newCostCentre.country.description?this.newCostCentre.country.description:'':'');
        this.costCentreForm.get('city').setValue(this.newCostCentre.city?this.newCostCentre.city.description?this.newCostCentre.city.description:'':'');
      }
      , error => console.log("2 " + error)
    )
  }

  createForm() {
    this.costCentreForm = this.fb.group({
      ccNo: [
        this.newCostCentre.ccNo
        ,[
          Validators.minLength(4)
        ]
      ]
      ,name: [
        this.newCostCentre.name
        ,Validators.required
      ]
      ,debtor: [
        this.newCostCentre.debtor,
        Validators.required
      ]
      ,street1: [
        this.newCostCentre.street1
      ]
      ,street2: [
        this.newCostCentre.street2
      ]
      ,street3: [
        this.newCostCentre.street3
      ]
      ,street4: [
        this.newCostCentre.street4
      ]
      ,streetPostalCode: [
        this.newCostCentre.streetPostalCode
      ]
      ,branch: [
        this.newCostCentre.branch
      ]
      ,country: [
        this.newCostCentre.country
      ]
      ,province: [
        this.newCostCentre.province
      ]
      ,city: [
        this.newCostCentre.city
      ]
      ,gps: [
        this.newCostCentre.gps
      ]
      ,oppSName: [
        this.newCostCentre.oppSName
      ]
      ,oppFName: [
        this.newCostCentre.oppFName
      ]
      ,oppTitle: [
        this.newCostCentre.oppTitle
      ]
      ,oppCellNo: [
        this.newCostCentre.oppCellNo
      ]
      ,oppEmail: [
        this.newCostCentre.oppEmail
      ]
      ,suspended: [
        this.newCostCentre.suspended
      ]
    });

    this.costCentreForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.costCentreForm) {return; }

    const form = this.costCentreForm;

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
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.debtorsAuto?this.debtorsAuto.length>0:false) && option.option.value) {
        var id = this.debtorsAuto.find(debt => debt.accNo === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.debtorForm.get('accNo').setErrors(null)
        }
      }
    });
*/

    /*
    //Check for duplicate on the Account Number
    if (this.costCentreShort?this.costCentreShort.length>0:false) {
      if ((this.costCentreForm.get('ccNo').value) &&
          (this.costCentreForm.get('ccNo').value != this.costCentreShort.find(debt => debt.value == this.autoCompleteControl.value).value)) {
        if (this.costCentreShort.find(debt => debt.value.toLowerCase() === this.costCentreForm.get('ccNo').value.toLowerCase())) {
          this.formErrors['ccNo'] += this.validationMessages['ccNo'].duplicate;
          this.costCentreForm.get('ccNo').setErrors({'incorrect': true});
        }
        else {
          this.costCentreForm.get('accNo').setErrors(null)
        }
      }
    }
    */
  }

  formErrors = {
    'ccNo': ''
    ,'name': ''
    ,'debtor': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
    ,'gps': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'suspended': ''
  };

  validationMessages = {
    'ccNo': {
      'required':   'CC No is required.'
      ,'minlength': 'CC No must be at least 4 characters long.'
      ,'duplicate': 'CC No must be unique.'
    }
    ,'name': ''
    ,'debtor': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
    ,'gps': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'suspended': ''
  }

  onSubmit() {
    this.newCostCentre = this.costCentreForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCostCentre.createUser = this.user;
        this.debtorService.sendCostCentre(this.newCostCentre).subscribe(
          data => {
            this.costCentreAdded = true;
            this.newCostCentre = new DebtorCostCentre();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newCostCentre = this.costCentreForm.value;
    console.log(this.newCostCentre);
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newCostCentre.createUser = this.user;
        this.debtorService.updateCostCentre(this.newCostCentre).subscribe(
          data => {
            this.costCentreAdded = true;
            this.newCostCentre = new DebtorCostCentre();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
